/**
 * Cardano Wallet Backend API
 * <p align=\"right\"><img style=\"position: relative; top: -10em; margin-bottom: -12em;\" width=\"20%\" src=\"https://cardanodocs.com/img/cardano.png\"></img></p>
 *
 * OpenAPI spec version: 2021.3.4
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { Body12 } from '../models';
import { Body13 } from '../models';
import { Body14 } from '../models';
import { InlineResponse20010 } from '../models';
import { InlineResponse2003 } from '../models';
import { ApiWallet } from '../models';
import { InlineResponse2011 } from '../models';
/**
 * ByronWalletsApi - axios parameter creator
 * @export
 */
export declare const ByronWalletsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Delete a Byron wallet.
     * @summary Delete
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteByronWallet: (walletId: string, options?: any) => Promise<RequestArgs>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ```
     * @summary UTxO Statistics
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getByronUTxOsStatistics: (walletId: string, options?: any) => Promise<RequestArgs>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return information about a Byron wallet.
     * @summary Get
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getByronWallet: (walletId: string, options?: any) => Promise<RequestArgs>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known Byron wallets, ordered from oldest to newest.
     * @summary List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listByronWallets: (options?: any) => Promise<RequestArgs>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Restore a Byron wallet from a mnemonic sentence or encrypted root private key (deprecated).    **⚠️ WARNING ⚠️**    The construction of random wallet in itself is **deprecated**, in particular the restoration from an encrypted root private key.   These endpoints exist to ease migrations from legacy software such as `cardano-sl` but should be avoided by new applications.
     * @summary Restore
     * @param {Body12} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postByronWallet: (body: Body12, options?: any) => Promise<RequestArgs>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Update Metadata
     * @param {Body13} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putByronWallet: (body: Body13, walletId: string, options?: any) => Promise<RequestArgs>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Update Passphrase
     * @param {Body14} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putByronWalletPassphrase: (body: Body14, walletId: string, options?: any) => Promise<RequestArgs>;
};
/**
 * ByronWalletsApi - functional programming interface
 * @export
 */
export declare const ByronWalletsApiFp: (configuration?: Configuration) => {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Delete a Byron wallet.
     * @summary Delete
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteByronWallet(walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ```
     * @summary UTxO Statistics
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getByronUTxOsStatistics(walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2003>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return information about a Byron wallet.
     * @summary Get
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getByronWallet(walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2011>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known Byron wallets, ordered from oldest to newest.
     * @summary List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listByronWallets(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InlineResponse20010>>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Restore a Byron wallet from a mnemonic sentence or encrypted root private key (deprecated).    **⚠️ WARNING ⚠️**    The construction of random wallet in itself is **deprecated**, in particular the restoration from an encrypted root private key.   These endpoints exist to ease migrations from legacy software such as `cardano-sl` but should be avoided by new applications.
     * @summary Restore
     * @param {Body12} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postByronWallet(body: Body12, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2011>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Update Metadata
     * @param {Body13} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putByronWallet(body: Body13, walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiWallet>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Update Passphrase
     * @param {Body14} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putByronWalletPassphrase(body: Body14, walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
/**
 * ByronWalletsApi - factory interface
 * @export
 */
export declare const ByronWalletsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Delete a Byron wallet.
     * @summary Delete
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteByronWallet(walletId: string, options?: any): AxiosPromise<void>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ```
     * @summary UTxO Statistics
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getByronUTxOsStatistics(walletId: string, options?: any): AxiosPromise<InlineResponse2003>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return information about a Byron wallet.
     * @summary Get
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getByronWallet(walletId: string, options?: any): AxiosPromise<InlineResponse2011>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known Byron wallets, ordered from oldest to newest.
     * @summary List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listByronWallets(options?: any): AxiosPromise<Array<InlineResponse20010>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Restore a Byron wallet from a mnemonic sentence or encrypted root private key (deprecated).    **⚠️ WARNING ⚠️**    The construction of random wallet in itself is **deprecated**, in particular the restoration from an encrypted root private key.   These endpoints exist to ease migrations from legacy software such as `cardano-sl` but should be avoided by new applications.
     * @summary Restore
     * @param {Body12} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postByronWallet(body: Body12, options?: any): AxiosPromise<InlineResponse2011>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Update Metadata
     * @param {Body13} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putByronWallet(body: Body13, walletId: string, options?: any): AxiosPromise<ApiWallet>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Update Passphrase
     * @param {Body14} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putByronWalletPassphrase(body: Body14, walletId: string, options?: any): AxiosPromise<void>;
};
/**
 * ByronWalletsApi - object-oriented interface
 * @export
 * @class ByronWalletsApi
 * @extends {BaseAPI}
 */
export declare class ByronWalletsApi extends BaseAPI {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Delete a Byron wallet.
     * @summary Delete
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronWalletsApi
     */
    deleteByronWallet(walletId: string, options?: any): Promise<import("axios").AxiosResponse<void>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ```
     * @summary UTxO Statistics
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronWalletsApi
     */
    getByronUTxOsStatistics(walletId: string, options?: any): Promise<import("axios").AxiosResponse<InlineResponse2003>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return information about a Byron wallet.
     * @summary Get
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronWalletsApi
     */
    getByronWallet(walletId: string, options?: any): Promise<import("axios").AxiosResponse<InlineResponse2011>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known Byron wallets, ordered from oldest to newest.
     * @summary List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronWalletsApi
     */
    listByronWallets(options?: any): Promise<import("axios").AxiosResponse<InlineResponse20010[]>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Restore a Byron wallet from a mnemonic sentence or encrypted root private key (deprecated).    **⚠️ WARNING ⚠️**    The construction of random wallet in itself is **deprecated**, in particular the restoration from an encrypted root private key.   These endpoints exist to ease migrations from legacy software such as `cardano-sl` but should be avoided by new applications.
     * @summary Restore
     * @param {Body12} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronWalletsApi
     */
    postByronWallet(body: Body12, options?: any): Promise<import("axios").AxiosResponse<InlineResponse2011>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Update Metadata
     * @param {Body13} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronWalletsApi
     */
    putByronWallet(body: Body13, walletId: string, options?: any): Promise<import("axios").AxiosResponse<ApiWallet>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Update Passphrase
     * @param {Body14} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronWalletsApi
     */
    putByronWalletPassphrase(body: Body14, walletId: string, options?: any): Promise<import("axios").AxiosResponse<void>>;
}