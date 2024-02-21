export = Base;
declare class Base {
    /**
     * [constructor description]
     *
     * @constructor
     * @param  {Object} options
     * @return {Base}
     */
    constructor(options?: any);
    /**
     * [options description]
     * @type {Object}
     */
    options: any;
    /**
     * [isLoggedIn description]
     *
     * @public
     * @method isLoggedIn
     * @memberOf Base
     * @return {Boolean}
     */
    public isLoggedIn(): boolean;
    /**
     * [authHeaders description]
     *
     * @public
     * @method authHeaders
     * @memberOf Base
     * @return {Object}
     * @see http://iq.bigtime.net/BigtimeData/api/v2/help/Session
     */
    public get authHeaders(): any;
    /**
     * [createSession description]
     *
     * @public
     * @method createSession
     * @memberOf Base
     * @param {String} username
     * @param {String} password
     * @return {Promise<Response>}
     * @see http://iq.bigtime.net/BigtimeData/api/v2/help/Session
     */
    public createSession(username: string, password: string, queryParams?: {}): Promise<Response>;
    sessionToken: any;
    firm: any;
    staffSid: any;
    userId: any;
    /**
     * [getStaffList description]
     *
     * @public
     * @method getStaffList
     * @memberOf Base
     * @param  {Object} queryParams
     * @return {Promise<Response>}
     * @see http://iq.bigtime.net/BigtimeData/api/v2/help/Staff
     */
    public getStaffList(queryParams?: any): Promise<Response>;
    /**
     * [getStaffDetail description]
     *
     * @public
     * @memberOf Base
     * @method getStaffDetail
     * @param  {Object} queryParams
     * @param  {Number} staffId
     * @return {Promise<Response>}
     * @see http://iq.bigtime.net/BigtimeData/api/v2/help/Staff
     */
    public getStaffDetail(queryParams?: any, staffId?: number): Promise<Response>;
    /**
     * [dateRange description]
     *
     * @public
     * @method getTimeSheetDateRange
     * @memberOf Base
     * @param  {Object} queryParams
     * @param {Number} staffId
     * @return {Promise<Response>}
     * @see http://iq.bigtime.net/BigtimeData/api/v2/help/Time
     */
    public getTimeSheetDateRange(queryParams?: any, staffId?: number): Promise<Response>;
    /**
     * [dateRangeSummary description]
     *
     * @public
     * @method getDailyTotalDateRange
     * @memberOf Base
     * @param  {Object} queryParams
     * @param {Number} staffId
     * @return {Promise<Response>}
     * @see http://iq.bigtime.net/BigtimeData/api/v2/help/Time
     */
    public getDailyTotalDateRange(queryParams?: any, staffId?: number): Promise<Response>;
    /**
     * [detail description]
     *
     * @public
     * @method getTimeEntry
     * @memberOf Base
     * @param  {Number} id
     * @param  {Object} queryParams
     * @return {Promise<Response>}
     * @see http://iq.bigtime.net/BigtimeData/api/v2/help/Time
     */
    public getTimeEntry(id: number, queryParams?: any): Promise<Response>;
    /**
     * [create description]
     *
     * @public
     * @method createTimeEntry
     * @memberOf Base
     * @param  {Object} body
     * @param  {Object} queryParams
     * @return {Promise<Response>}
     * @see http://iq.bigtime.net/BigtimeData/api/v2/help/Time
     */
    public createTimeEntry(body?: any, queryParams?: any): Promise<Response>;
    /**
     * [update description]
     *
     * @public
     * @method updateTimeEntry
     * @memberOf Base
     * @param {Number} id
     * @param {Object} body
     * @param  {Object} queryParams
     * @return {Promise<Response>}
     * @see http://iq.bigtime.net/BigtimeData/api/v2/help/Time
     */
    public updateTimeEntry(id: number, body?: any, queryParams?: any): Promise<Response>;
    /**
     * [destory description]
     *
     * @public
     * @method deleteTimeEntry
     * @memberOf Base
     * @param {Number} id
     * @param {Object} body
     * @param  {Object} queryParams
     * @return {Promise<Response>}
     * @see http://iq.bigtime.net/BigtimeData/api/v2/help/Time
     */
    public deleteTimeEntry(id: number, body?: any, queryParams?: any): Promise<Response>;
    /**
     * A convenience method to find a person by their name rather than by
     * their staff ID.
     *
     * @public
     * @method findStaffByName
     * @memberOf Base
     * @param {Object} options
     * @param  {Object} queryParams
     * @return {Promise<Response>}
     */
    public findStaffByName(options?: any, queryParams?: any): Promise<Response>;
    /**
     * [getReportById description]
     *
     * @param  {Number} id
     * @param {Object} queryParams
     * @return {Promise}
     */
    getReportById(id: number, queryParams?: any): Promise<any>;
    /**
     * [updateReportById description]
     *
     * @param  {Number} id
     * @param  {Object} body
     * @param  {Object} queryParams
     * @return {Promise}
     */
    updateReportById(id: number, body?: any, queryParams?: any): Promise<any>;
    /**
     * [projectsPicklist description]
     *
     * @param  {Object} queryParams
     * @return {Promise<Array>}
     */
    projectsPicklist(queryParams?: any): Promise<any[]>;
    /**
     * [laborCodesPicklist description]
     *
     * @param  {Object} queryParams
     * @return {Promise<Array>}
     */
    laborCodesPicklist(queryParams?: any): Promise<any[]>;
    /**
     * [staffPicklist description]
     *
     * @param  {Object} queryParams
     * @return {Promise<Array>}
     */
    staffPicklist(queryParams?: any): Promise<any[]>;
    /**
     * [clientsPicklist description]
     *
     * @param  {Object} queryParams
     * @return {Promise<Array>}
     */
    clientsPicklist(queryParams?: any): Promise<any[]>;
    /**
     * [getProjectList description]
     *
     * @param  {Object} queryParams
     * @return {Promise<Array>}
     */
    getProjectList(queryParams?: any): Promise<any[]>;
}
