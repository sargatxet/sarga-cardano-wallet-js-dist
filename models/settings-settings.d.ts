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
 * Settings
 * @export
 * @interface SettingsSettings
 */
export interface SettingsSettings {
    /**
     * Select stake pool metadata fetching strategy:   - `none` - metadata is not fetched at all,   - `direct` - metadata is fetched directly URLs registered on chain,   - `uri` - metadata is fetched from an external Stake-Pool Metadata Aggregation Server (SMASH)  After update existing metadata will be dropped forcing it to re-sync automatically with the new setting.
     * @type {string}
     * @memberof SettingsSettings
     */
    pool_metadata_source: any;
}