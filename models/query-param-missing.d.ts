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
 * @interface QueryParamMissing
 */
export interface QueryParamMissing {
    /**
     * May occur when an endpoint requires the presence of a query parameter that is missing.
     * @type {string}
     * @memberof QueryParamMissing
     */
    message: any;
    /**
     *
     * @type {string}
     * @memberof QueryParamMissing
     */
    code: QueryParamMissingCodeEnum;
}
/**
 * @export
 * @enum {string}
 */
export declare enum QueryParamMissingCodeEnum {
    Missing = "query_param_missing"
}