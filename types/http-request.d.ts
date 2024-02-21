export = HttpRequest;
/**
 * @class
 */
declare class HttpRequest {
    /**
     * Issue an HTTP GET request.
     *
     * @public
     * @static
     * @param  {String} url
     * @param  {Object} headers
     * @return {Promise}
     */
    public static get(url: string, headers?: any): Promise<any>;
    /**
     * Issue an HTTP POST request.
     *
     * @public
     * @static
     * @param  {String} url
     * @param  {Null|Object} body
     * @param  {Object} headers
     * @return {Promise}
     */
    public static post(url: string, body?: null | any, headers?: any): Promise<any>;
    /**
     * Issue an HTTP PUT request.
     *
     * @public
     * @static
     * @param  {String} url
     * @param  {Null|Object} body
     * @param  {Object} headers
     * @return {Promise}
     */
    public static put(url: string, body?: null | any, headers?: any): Promise<any>;
    /**
     * Issue an HTTP DELETE request.
     *
     * @public
     * @static
     * @param  {String} url
     * @param  {Null|Object} body
     * @param  {Object} headers
     * @return {Promise}
     */
    public static delete(url: string, body?: null | any, headers?: any): Promise<any>;
}
