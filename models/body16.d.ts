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
/**
 *
 * @export
 * @interface Body16
 */
export interface Body16 {
    /**
     * A master passphrase to lock and protect the wallet for sensitive operation (e.g. sending funds)
     * @type {string}
     * @memberof Body16
     */
    passphrase: any;
    /**
     * An address derivation index.
     * @type {number}
     * @memberof Body16
     */
    address_index?: any;
}