export = Endpoint;
/**
 * @class
 */
declare class Endpoint {
    /**
     * [session description]
     *
     * @static
     * @param  {Object} queryParams
     * @return {Object}
     * @see http://iq.bigtime.net/BigtimeData/api/v2/help/Session
     */
    static createSession(queryParams?: any): any;
    /**
     * [staff description]
     *
     * @static
     * @param  {Object} queryParams
     * @return {Object}
     * @see http://iq.bigtime.net/BigtimeData/api/v2/help/Staff
     */
    static getStaffList(queryParams?: any): any;
    /**
     * [getStaffDetail description]
     *
     * @static
     * @param  {Object} queryParams
     * @param  {Number} staffId
     * @return {Object}
     * @see http://iq.bigtime.net/BigtimeData/api/v2/help/Staff
     */
    static getStaffDetail(staffId: number, queryParams?: any): any;
    /**
     * [staffTimeSheet description]
     *
     * @static
     * @param  {Object} queryParams
     * @param  {Number} staffId
     * @return {Object}
     */
    static getTimeSheetDateRange(staffId: number, queryParams?: any): any;
    /**
     * [getDailyTotalDateRange description]
     *
     * @static
     * @param {Number} staffId
     * @param {Object} queryParams
     * @return {Object} [description]
     */
    static getDailyTotalDateRange(staffId: number, queryParams?: any): any;
    /**
     * [getTimeEntry description]
     *
     * @static
     * @param  {Number} id
     * @param  {Object} queryParams
     * @return {Object}
     */
    static getTimeEntry(id: number, queryParams?: any): any;
    /**
     * [createTimeEntry description]
     *
     * @static
     * @param {Object} queryParams
     * @return {Object} [description]
     */
    static createTimeEntry(queryParams?: any): any;
    /**
     * [updateTimeEntry description]
     *
     * @static
     * @param {Number} id
     * @param {Object} queryParams
     * @return {Object}
     */
    static updateTimeEntry(id: number, queryParams?: any): any;
    /**
     * [deleteTimeEntry description]
     *
     * @static
     * @param {Number} id
     * @param {Object} queryParams
     * @return {Object}
     */
    static deleteTimeEntry(id: number, queryParams?: any): any;
    /**
     * [getReportById description]
     *
     * @static
     * @param  {Number} id
     * @param {Object} queryParams
     * @return {Object}
     */
    static getReportById(id: number, queryParams?: any): any;
    /**
     * [updateAndGetReportById description]
     *
     * @static
     * @param  {Number} id
     * @param  {Object} queryParams
     * @return {Object}
     */
    static updateReportById(id: number, queryParams?: any): any;
    /**
     * [projectsPicklist description]
     *
     * @param  {Object} queryParams
     * @return {Object}
     */
    static projectsPicklist(queryParams?: any): any;
    /**
     * [staffPicklist description]
     *
     * @param  {Object} queryParams
     * @return {Object}
     */
    static staffPicklist(queryParams?: any): any;
    /**
     * [laborCodesPicklist description]
     *
     * @param  {Object} queryParams
     * @return {Object}
     * @see http://iq.bigtime.net/BigTimeData/api/v2/help/Picklist
     */
    static laborCodesPicklist(queryParams?: any): any;
    /**
     * [clientsPicklist description]
     *
     * @param  {Object} queryParams
     * @return {Object}
     * @see http://iq.bigtime.net/BigTimeData/api/v2/help/Picklist
     */
    static clientsPicklist(queryParams?: any): any;
    /**
     * [getProjectList description]
     *
     * @param  {Object} queryParams
     * @return {Object}
     * @see http://iq.bigtime.net/BigTimeData/api/v2/help/Project
     */
    static getProjectList(queryParams?: any): any;
}
