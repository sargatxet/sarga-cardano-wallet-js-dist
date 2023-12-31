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
import { InlineResponse20016 } from '../models';
/**
 * UtilsApi - axios parameter creator
 * @export
 */
export declare const UtilsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Get health status of the currently active SMASH server.
     * @summary Current SMASH health
     * @param {string} [url] check this url for health instead of the currently configured one
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCurrentSmashHealth: (url?: string, options?: any) => Promise<RequestArgs>;
};
/**
 * UtilsApi - functional programming interface
 * @export
 */
export declare const UtilsApiFp: (configuration?: Configuration) => {
    /**
     * Get health status of the currently active SMASH server.
     * @summary Current SMASH health
     * @param {string} [url] check this url for health instead of the currently configured one
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCurrentSmashHealth(url?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20016>>;
};
/**
 * UtilsApi - factory interface
 * @export
 */
export declare const UtilsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Get health status of the currently active SMASH server.
     * @summary Current SMASH health
     * @param {string} [url] check this url for health instead of the currently configured one
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCurrentSmashHealth(url?: string, options?: any): AxiosPromise<InlineResponse20016>;
};
/**
 * UtilsApi - object-oriented interface
 * @export
 * @class UtilsApi
 * @extends {BaseAPI}
 */
export declare class UtilsApi extends BaseAPI {
    /**
     * Get health status of the currently active SMASH server.
     * @summary Current SMASH health
     * @param {string} [url] check this url for health instead of the currently configured one
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UtilsApi
     */
    getCurrentSmashHealth(url?: string, options?: any): Promise<import("axios").AxiosResponse<InlineResponse20016>>;
}
