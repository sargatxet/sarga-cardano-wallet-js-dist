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
 * The live pool stake relative to the *total* stake.  For more details, see the section \"Relative Stake: Active vs Total\" in [Design Specification for Delegation and Incentives in Cardano](https://hydra.iohk.io/job/Cardano/cardano-ledger-specs/delegationDesignSpec/latest/download-by-type/doc-pdf/delegation_design_spec).
 * @export
 * @interface StakepoolsMetricsRelativeStake
 */
export interface StakepoolsMetricsRelativeStake {
    /**
     *
     * @type {number}
     * @memberof StakepoolsMetricsRelativeStake
     */
    quantity: any;
    /**
     *
     * @type {string}
     * @memberof StakepoolsMetricsRelativeStake
     */
    unit: StakepoolsMetricsRelativeStakeUnitEnum;
}
/**
 * @export
 * @enum {string}
 */
export declare enum StakepoolsMetricsRelativeStakeUnitEnum {
    Percent = "percent"
}
