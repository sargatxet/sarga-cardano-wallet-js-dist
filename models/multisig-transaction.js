"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultisigTransaction = void 0;
var cardano_serialization_lib_nodejs_1 = require("@emurgo/cardano-serialization-lib-nodejs");
var utils_1 = require("../utils");
var MultisigTransaction = /** @class */ (function () {
    function MultisigTransaction() {
        this.vkeyWitnesses = cardano_serialization_lib_nodejs_1.Vkeywitnesses.new();
        this.nativeScripts = cardano_serialization_lib_nodejs_1.NativeScripts.new();
    }
    MultisigTransaction.new = function (coinSelection, txBody, scripts, privateKeys, numberOfWitnesses, config, encoding, metadata, tokens) {
        var multisig = new MultisigTransaction();
        multisig.metadata = metadata;
        scripts.forEach(function (s) {
            multisig.nativeScripts.add(s);
        });
        multisig.txBody = multisig.adjustFee(txBody, coinSelection, tokens, numberOfWitnesses, config, encoding);
        multisig.txHash = cardano_serialization_lib_nodejs_1.hash_transaction(multisig.txBody);
        privateKeys.forEach(function (prvKey) {
            // add keyhash witnesses
            var vkeyWitness = cardano_serialization_lib_nodejs_1.make_vkey_witness(multisig.txHash, prvKey);
            multisig.vkeyWitnesses.add(vkeyWitness);
        });
        return multisig;
    };
    MultisigTransaction.prototype.addKeyWitnesses = function () {
        var _this = this;
        var privateKeys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            privateKeys[_i] = arguments[_i];
        }
        privateKeys.forEach(function (prvKey) {
            // add keyhash witnesses
            var vkeyWitness = cardano_serialization_lib_nodejs_1.make_vkey_witness(_this.txHash, prvKey);
            _this.vkeyWitnesses.add(vkeyWitness);
        });
    };
    MultisigTransaction.prototype.adjustFee = function (txBody, coinSelection, tokens, numberOfWitnesses, config, encoding) {
        var bodyFee = parseInt(txBody.fee().to_str());
        var tx = this.fakeTx(txBody, numberOfWitnesses);
        var txFee = this.txFee(tx, config);
        console.log("Fees: initial = " + bodyFee + ", adjusted = " + txFee);
        if (txFee < bodyFee) {
            var feeDiff = bodyFee - txFee;
            var feeDiffPerChange_1 = Math.ceil(feeDiff / coinSelection.change.length);
            var change = coinSelection.change.map(function (c) {
                c.amount.quantity += feeDiffPerChange_1;
                return c;
            });
            var outputs = coinSelection.outputs.map(function (output) {
                var address = cardano_serialization_lib_nodejs_1.Address.from_bech32(output.address);
                var amount = cardano_serialization_lib_nodejs_1.Value.new(cardano_serialization_lib_nodejs_1.BigNum.from_str(output.amount.quantity.toString()));
                // add tx assets
                if (output.assets && output.assets.length > 0) {
                    var multiAsset = utils_1.Seed.buildMultiAssets(output.assets, encoding);
                    amount.set_multiasset(multiAsset);
                }
                return cardano_serialization_lib_nodejs_1.TransactionOutput.new(address, amount);
            });
            outputs.push.apply(outputs, change.map(function (ch) {
                var address = cardano_serialization_lib_nodejs_1.Address.from_bech32(ch.address);
                var amount = cardano_serialization_lib_nodejs_1.Value.new(cardano_serialization_lib_nodejs_1.BigNum.from_str(ch.amount.quantity.toString()));
                // add tx assets
                if (ch.assets && ch.assets.length > 0) {
                    var multiAsset = utils_1.Seed.buildMultiAssets(ch.assets, encoding);
                    amount.set_multiasset(multiAsset);
                }
                return cardano_serialization_lib_nodejs_1.TransactionOutput.new(address, amount);
            }));
            var txOutputs_1 = cardano_serialization_lib_nodejs_1.TransactionOutputs.new();
            outputs.forEach(function (txout) { return txOutputs_1.add(txout); });
            console.log("Final change:", change);
            var body = cardano_serialization_lib_nodejs_1.TransactionBody.new(txBody.inputs(), txOutputs_1, cardano_serialization_lib_nodejs_1.BigNum.from_str(txFee.toString()), txBody.ttl());
            // metadata
            if (this.metadata) {
                var dataHash = cardano_serialization_lib_nodejs_1.hash_auxiliary_data(this.metadata);
                body.set_auxiliary_data_hash(dataHash);
            }
            // mint tokens
            if (tokens) {
                var mint = utils_1.Seed.buildTransactionMint(tokens, encoding);
                body.set_mint(mint);
            }
            // set tx validity start interval
            body.set_validity_start_interval(txBody.validity_start_interval());
            return body;
        }
        else {
            return txBody;
        }
    };
    MultisigTransaction.prototype.build = function () {
        var witnesses = cardano_serialization_lib_nodejs_1.TransactionWitnessSet.new();
        witnesses.set_vkeys(this.vkeyWitnesses);
        if (this.nativeScripts.len() > 0) {
            witnesses.set_native_scripts(this.nativeScripts);
        }
        var tx = cardano_serialization_lib_nodejs_1.Transaction.new(this.txBody, witnesses, this.metadata);
        return Buffer.from(tx.to_bytes()).toString("hex");
    };
    MultisigTransaction.prototype.toBytes = function () {
        var _this = this;
        var encoder = new TextEncoder();
        var keys = Array.from(Array(this.vkeyWitnesses.len()).keys())
            .map(function (i) { return _this.vkeyWitnesses.get(i).to_bytes(); })
            .map(function (k) { return MultisigTransaction.buff2hex(k); });
        var scripts = Array.from(Array(this.nativeScripts.len()).keys())
            .map(function (i) { return _this.nativeScripts.get(i).to_bytes(); })
            .map(function (s) { return MultisigTransaction.buff2hex(s); });
        var data = {
            body: MultisigTransaction.buff2hex(this.txBody.to_bytes()),
            keys: keys,
            scripts: scripts,
            metadata: this.metadata
                ? MultisigTransaction.buff2hex(this.metadata.to_bytes())
                : null,
        };
        return encoder.encode(JSON.stringify(data));
    };
    MultisigTransaction.fromBytes = function (bytes) {
        var decoder = new TextDecoder();
        var _a = JSON.parse(decoder.decode(bytes)), body = _a.body, keys = _a.keys, scripts = _a.scripts, metadata = _a.metadata;
        var multisig = new MultisigTransaction();
        multisig.txBody = cardano_serialization_lib_nodejs_1.TransactionBody.from_bytes(MultisigTransaction.hexToBuff(body));
        multisig.txHash = cardano_serialization_lib_nodejs_1.hash_transaction(multisig.txBody);
        multisig.metadata = metadata
            ? cardano_serialization_lib_nodejs_1.AuxiliaryData.from_bytes(MultisigTransaction.hexToBuff(metadata))
            : null;
        var vKyes = keys.map(function (k) {
            return cardano_serialization_lib_nodejs_1.Vkeywitness.from_bytes(MultisigTransaction.hexToBuff(k));
        });
        for (var _i = 0, vKyes_1 = vKyes; _i < vKyes_1.length; _i++) {
            var key = vKyes_1[_i];
            multisig.vkeyWitnesses.add(key);
        }
        var nScripts = scripts.map(function (k) {
            return cardano_serialization_lib_nodejs_1.NativeScript.from_bytes(MultisigTransaction.hexToBuff(k));
        });
        for (var _b = 0, nScripts_1 = nScripts; _b < nScripts_1.length; _b++) {
            var script = nScripts_1[_b];
            multisig.nativeScripts.add(script);
        }
        return multisig;
    };
    MultisigTransaction.buff2hex = function (buffer) {
        // buffer is an ArrayBuffer
        return Array.from(buffer.values())
            .map(function (x) { return x.toString(16).padStart(2, "0"); })
            .join("");
    };
    MultisigTransaction.hexToBuff = function (hexString) {
        return new Uint8Array(hexString.match(/.{1,2}/g).map(function (byte) { return parseInt(byte, 16); }));
    };
    MultisigTransaction.prototype.txFee = function (tx, config) {
        return parseInt(cardano_serialization_lib_nodejs_1.min_fee(tx, cardano_serialization_lib_nodejs_1.LinearFee.new(cardano_serialization_lib_nodejs_1.BigNum.from_str(config.protocolParams.txFeePerByte.toString()), cardano_serialization_lib_nodejs_1.BigNum.from_str(config.protocolParams.txFeeFixed.toString()))).to_str());
    };
    MultisigTransaction.prototype.fakeTx = function (txBody, numberOfWitnesses) {
        var fakeWitnesses = cardano_serialization_lib_nodejs_1.Vkeywitnesses.new();
        var fakeKey = this.fakePrivateKey();
        var rawKey = fakeKey.to_raw_key();
        // const txHash = hash_transaction(txBody);
        var fakeVkeyWitness = cardano_serialization_lib_nodejs_1.Vkeywitness.new(cardano_serialization_lib_nodejs_1.Vkey.new(rawKey.to_public()), 
        // rawKey.sign(txHash.to_bytes())
        rawKey.sign(Buffer.from(Array.from(Array(100).keys()))));
        for (var i = 0; i < numberOfWitnesses; i++) {
            fakeWitnesses.add(fakeVkeyWitness);
        }
        var witnessSet = cardano_serialization_lib_nodejs_1.TransactionWitnessSet.new();
        witnessSet.set_vkeys(fakeWitnesses);
        if (this.nativeScripts.len() > 0) {
            witnessSet.set_native_scripts(this.nativeScripts);
        }
        var cloneMetadata = this.metadata
            ? cardano_serialization_lib_nodejs_1.AuxiliaryData.from_bytes(this.metadata.to_bytes())
            : null;
        var tx = cardano_serialization_lib_nodejs_1.Transaction.new(txBody, witnessSet, cloneMetadata);
        return tx;
    };
    MultisigTransaction.prototype.fakePrivateKey = function () {
        return cardano_serialization_lib_nodejs_1.Bip32PrivateKey.from_bytes(Buffer.from([
            0xb8, 0xf2, 0xbe, 0xce, 0x9b, 0xdf, 0xe2, 0xb0, 0x28, 0x2f, 0x5b, 0xad,
            0x70, 0x55, 0x62, 0xac, 0x99, 0x6e, 0xfb, 0x6a, 0xf9, 0x6b, 0x64, 0x8f,
            0x44, 0x45, 0xec, 0x44, 0xf4, 0x7a, 0xd9, 0x5c, 0x10, 0xe3, 0xd7, 0x2f,
            0x26, 0xed, 0x07, 0x54, 0x22, 0xa3, 0x6e, 0xd8, 0x58, 0x5c, 0x74, 0x5a,
            0x0e, 0x11, 0x50, 0xbc, 0xce, 0xba, 0x23, 0x57, 0xd0, 0x58, 0x63, 0x69,
            0x91, 0xf3, 0x8a, 0x37, 0x91, 0xe2, 0x48, 0xde, 0x50, 0x9c, 0x07, 0x0d,
            0x81, 0x2a, 0xb2, 0xfd, 0xa5, 0x78, 0x60, 0xac, 0x87, 0x6b, 0xc4, 0x89,
            0x19, 0x2c, 0x1e, 0xf4, 0xce, 0x25, 0x3c, 0x19, 0x7e, 0xe2, 0x19, 0xa4,
        ]));
    };
    return MultisigTransaction;
}());
exports.MultisigTransaction = MultisigTransaction;
//# sourceMappingURL=multisig-transaction.js.map