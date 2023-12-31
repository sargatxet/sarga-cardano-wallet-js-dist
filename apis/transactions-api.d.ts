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
import { ApiPostTransactionFeeData } from '../models';
import { ApiPostTransactionData } from '../models';
import { ApiTransaction } from '../models';
import { ApiFee } from '../models';
/**
 * TransactionsApi - axios parameter creator
 * @export
 */
export declare const TransactionsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Forget pending transaction. Importantly, a transaction, when sent, cannot be cancelled. One can only request forgetting about it in order to try spending (concurrently) the same UTxO in another transaction. But, the transaction may still show up later in a block and therefore, appear in the wallet.
     * @summary Forget
     * @param {string} walletId
     * @param {string} transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTransaction: (walletId: string, transactionId: string, options?: any) => Promise<RequestArgs>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Get transaction by id.
     * @summary Get
     * @param {string} walletId
     * @param {string} transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTransaction: (walletId: string, transactionId: string, options?: any) => Promise<RequestArgs>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Lists all incoming and outgoing wallet's transactions.
     * @summary List
     * @param {string} walletId
     * @param {string} [start] An optional start time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60;
     * @param {string} [end] An optional end time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60;
     * @param {string} [order] An optional sort order.
     * @param {number} [minWithdrawal] Returns only transactions that have at least one withdrawal above the given amount. This is particularly useful when set to &#x60;1&#x60; in order to list the withdrawal history of a wallet.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTransactions: (walletId: string, start?: string, end?: string, order?: string, minWithdrawal?: number, options?: any) => Promise<RequestArgs>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Create and send transaction from the wallet.
     * @summary Create
     * @param {ApiPostTransactionData} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postTransaction: (body: ApiPostTransactionData, walletId: string, options?: any) => Promise<RequestArgs>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for the transaction. The estimate is made by assembling multiple transactions and analyzing the distribution of their fees. The estimated_max is the highest fee observed, and the estimated_min is the fee which is lower than at least 90% of the fees observed.
     * @summary Estimate Fee
     * @param {ApiPostTransactionFeeData} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postTransactionFee: (body: ApiPostTransactionFeeData, walletId: string, options?: any) => Promise<RequestArgs>;
};
/**
 * TransactionsApi - functional programming interface
 * @export
 */
export declare const TransactionsApiFp: (configuration?: Configuration) => {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Forget pending transaction. Importantly, a transaction, when sent, cannot be cancelled. One can only request forgetting about it in order to try spending (concurrently) the same UTxO in another transaction. But, the transaction may still show up later in a block and therefore, appear in the wallet.
     * @summary Forget
     * @param {string} walletId
     * @param {string} transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTransaction(walletId: string, transactionId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Get transaction by id.
     * @summary Get
     * @param {string} walletId
     * @param {string} transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTransaction(walletId: string, transactionId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiTransaction>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Lists all incoming and outgoing wallet's transactions.
     * @summary List
     * @param {string} walletId
     * @param {string} [start] An optional start time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60;
     * @param {string} [end] An optional end time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60;
     * @param {string} [order] An optional sort order.
     * @param {number} [minWithdrawal] Returns only transactions that have at least one withdrawal above the given amount. This is particularly useful when set to &#x60;1&#x60; in order to list the withdrawal history of a wallet.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTransactions(walletId: string, start?: string, end?: string, order?: string, minWithdrawal?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ApiTransaction>>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Create and send transaction from the wallet.
     * @summary Create
     * @param {ApiPostTransactionData} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postTransaction(body: ApiPostTransactionData, walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiTransaction>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for the transaction. The estimate is made by assembling multiple transactions and analyzing the distribution of their fees. The estimated_max is the highest fee observed, and the estimated_min is the fee which is lower than at least 90% of the fees observed.
     * @summary Estimate Fee
     * @param {ApiPostTransactionFeeData} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postTransactionFee(body: ApiPostTransactionFeeData, walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiFee>>;
};
/**
 * TransactionsApi - factory interface
 * @export
 */
export declare const TransactionsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Forget pending transaction. Importantly, a transaction, when sent, cannot be cancelled. One can only request forgetting about it in order to try spending (concurrently) the same UTxO in another transaction. But, the transaction may still show up later in a block and therefore, appear in the wallet.
     * @summary Forget
     * @param {string} walletId
     * @param {string} transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTransaction(walletId: string, transactionId: string, options?: any): AxiosPromise<void>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Get transaction by id.
     * @summary Get
     * @param {string} walletId
     * @param {string} transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTransaction(walletId: string, transactionId: string, options?: any): AxiosPromise<ApiTransaction>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Lists all incoming and outgoing wallet's transactions.
     * @summary List
     * @param {string} walletId
     * @param {string} [start] An optional start time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60;
     * @param {string} [end] An optional end time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60;
     * @param {string} [order] An optional sort order.
     * @param {number} [minWithdrawal] Returns only transactions that have at least one withdrawal above the given amount. This is particularly useful when set to &#x60;1&#x60; in order to list the withdrawal history of a wallet.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTransactions(walletId: string, start?: string, end?: string, order?: string, minWithdrawal?: number, options?: any): AxiosPromise<Array<ApiTransaction>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Create and send transaction from the wallet.
     * @summary Create
     * @param {ApiPostTransactionData} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postTransaction(body: ApiPostTransactionData, walletId: string, options?: any): AxiosPromise<ApiTransaction>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for the transaction. The estimate is made by assembling multiple transactions and analyzing the distribution of their fees. The estimated_max is the highest fee observed, and the estimated_min is the fee which is lower than at least 90% of the fees observed.
     * @summary Estimate Fee
     * @param {ApiPostTransactionFeeData} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postTransactionFee(body: ApiPostTransactionFeeData, walletId: string, options?: any): AxiosPromise<ApiFee>;
};
/**
 * TransactionsApi - object-oriented interface
 * @export
 * @class TransactionsApi
 * @extends {BaseAPI}
 */
export declare class TransactionsApi extends BaseAPI {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Forget pending transaction. Importantly, a transaction, when sent, cannot be cancelled. One can only request forgetting about it in order to try spending (concurrently) the same UTxO in another transaction. But, the transaction may still show up later in a block and therefore, appear in the wallet.
     * @summary Forget
     * @param {string} walletId
     * @param {string} transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    deleteTransaction(walletId: string, transactionId: string, options?: any): Promise<import("axios").AxiosResponse<void>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Get transaction by id.
     * @summary Get
     * @param {string} walletId
     * @param {string} transactionId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransaction(walletId: string, transactionId: string, options?: any): Promise<import("axios").AxiosResponse<ApiTransaction>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Lists all incoming and outgoing wallet's transactions.
     * @summary List
     * @param {string} walletId
     * @param {string} [start] An optional start time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60;
     * @param {string} [end] An optional end time in ISO 8601 date-and-time format. Basic and extended formats are both accepted. Times can be local (with a timezone offset) or UTC.  If both a start time and an end time are specified, then the start time must not be later than the end time.  Example: &#x60;2008-08-08T08:08:08Z&#x60;
     * @param {string} [order] An optional sort order.
     * @param {number} [minWithdrawal] Returns only transactions that have at least one withdrawal above the given amount. This is particularly useful when set to &#x60;1&#x60; in order to list the withdrawal history of a wallet.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    listTransactions(walletId: string, start?: string, end?: string, order?: string, minWithdrawal?: number, options?: any): Promise<import("axios").AxiosResponse<ApiTransaction[]>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Create and send transaction from the wallet.
     * @summary Create
     * @param {ApiPostTransactionData} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    postTransaction(body: ApiPostTransactionData, walletId: string, options?: any): Promise<import("axios").AxiosResponse<ApiTransaction>>;
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Estimate fee for the transaction. The estimate is made by assembling multiple transactions and analyzing the distribution of their fees. The estimated_max is the highest fee observed, and the estimated_min is the fee which is lower than at least 90% of the fees observed.
     * @summary Estimate Fee
     * @param {ApiPostTransactionFeeData} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    postTransactionFee(body: ApiPostTransactionFeeData, walletId: string, options?: any): Promise<import("axios").AxiosResponse<ApiFee>>;
}
