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
 * <span style=\"position: relative; left: 35px; top: -21px; vertical-align: middle; background-color: rgba(142, 142, 220, 0.05); color: rgba(50, 50, 159, 0.9); margin: 0 5px; padding: 0 5px; border: 1px solid rgba(50, 50, 159, 0.1); line-height: 20px; font-size: 13px; border-radius: 2px;\"> <strong>if:</strong> status == syncing </span><br/>
 * @export
 * @interface WalletsStateProgress
 */
export interface WalletsStateProgress {
    /**
     *
     * @type {number}
     * @memberof WalletsStateProgress
     */
    quantity: any;
    /**
     *
     * @type {string}
     * @memberof WalletsStateProgress
     */
    unit: WalletsStateProgressUnitEnum;
}
/**
 * @export
 * @enum {string}
 */
export declare enum WalletsStateProgressUnitEnum {
    Percent = "percent"
}
