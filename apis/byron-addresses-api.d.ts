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
import { Body15 } from '../models';
import { Body16 } from '../models';
import { InlineResponse2005 } from '../models';
/**
 * ByronAddressesApi - axios parameter creator
 * @export
 */
export declare const ByronAddressesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server.
     * @summary Create Address
     * @param {Body16} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAddress: (body: Body16, walletId: string, options?: any) => Promise<RequestArgs>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server.
     * @summary Import Address
     * @param {string} walletId
     * @param {string} addressId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importAddress: (walletId: string, addressId: string, options?: any) => Promise<RequestArgs>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server.
     * @summary Import Addresses
     * @param {Body15} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importAddresses: (body: Body15, walletId: string, options?: any) => Promise<RequestArgs>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known addresses, ordered from newest to oldest for sequential wallets. Arbitrarily ordered for random wallets.
     * @summary List
     * @param {string} walletId
     * @param {string} [state] An optional filter on the address state.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listByronAddresses: (walletId: string, state?: string, options?: any) => Promise<RequestArgs>;
};
/**
 * ByronAddressesApi - functional programming interface
 * @export
 */
export declare const ByronAddressesApiFp: (configuration?: Configuration) => {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server.
     * @summary Create Address
     * @param {Body16} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAddress(body: Body16, walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2005>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server.
     * @summary Import Address
     * @param {string} walletId
     * @param {string} addressId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importAddress(walletId: string, addressId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server.
     * @summary Import Addresses
     * @param {Body15} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importAddresses(body: Body15, walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known addresses, ordered from newest to oldest for sequential wallets. Arbitrarily ordered for random wallets.
     * @summary List
     * @param {string} walletId
     * @param {string} [state] An optional filter on the address state.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listByronAddresses(walletId: string, state?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InlineResponse2005>>>;
};
/**
 * ByronAddressesApi - factory interface
 * @export
 */
export declare const ByronAddressesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server.
     * @summary Create Address
     * @param {Body16} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAddress(body: Body16, walletId: string, options?: any): AxiosPromise<InlineResponse2005>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server.
     * @summary Import Address
     * @param {string} walletId
     * @param {string} addressId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importAddress(walletId: string, addressId: string, options?: any): AxiosPromise<void>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server.
     * @summary Import Addresses
     * @param {Body15} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importAddresses(body: Body15, walletId: string, options?: any): AxiosPromise<void>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known addresses, ordered from newest to oldest for sequential wallets. Arbitrarily ordered for random wallets.
     * @summary List
     * @param {string} walletId
     * @param {string} [state] An optional filter on the address state.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listByronAddresses(walletId: string, state?: string, options?: any): AxiosPromise<Array<InlineResponse2005>>;
};
/**
 * ByronAddressesApi - object-oriented interface
 * @export
 * @class ByronAddressesApi
 * @extends {BaseAPI}
 */
export declare class ByronAddressesApi extends BaseAPI {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server.
     * @summary Create Address
     * @param {Body16} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronAddressesApi
     */
    createAddress(body: Body16, walletId: string, options?: any): Promise<import("axios").AxiosResponse<InlineResponse2005>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server.
     * @summary Import Address
     * @param {string} walletId
     * @param {string} addressId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronAddressesApi
     */
    importAddress(walletId: string, addressId: string, options?: any): Promise<import("axios").AxiosResponse<void>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  ⚠️  This endpoint is available for `random` wallets only. Any attempt to call this endpoint on another type of wallet will result in a `403 Forbidden` error from the server.
     * @summary Import Addresses
     * @param {Body15} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronAddressesApi
     */
    importAddresses(body: Body15, walletId: string, options?: any): Promise<import("axios").AxiosResponse<void>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known addresses, ordered from newest to oldest for sequential wallets. Arbitrarily ordered for random wallets.
     * @summary List
     * @param {string} walletId
     * @param {string} [state] An optional filter on the address state.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronAddressesApi
     */
    listByronAddresses(walletId: string, state?: string, options?: any): Promise<import("axios").AxiosResponse<InlineResponse2005[]>>;
}
