
const defaultHeaders = {
  'Content-Type': 'application/json',
  'User-Agent': 'node-bigtime-sdk',
  'Accept': 'application/json',
}

/**
 * @class
 */
class HttpRequest {

  /**
   * Issue an HTTP GET request.
   *
   * @public
   * @static
   * @param  {String} url
   * @param  {Object} headers
   * @return {Promise}
   */
  static get(url, headers = {}) {
    if (!url) throw new Error('Base.get: a URL is required.')
    return request(url, 'GET', null, headers)
  }

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
  static post(url, body = {}, headers = {}) {
    if (!url) throw new Error('Base.post: a URL is required.')
    return request(url, 'POST', body, headers)
  }

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
  static put(url, body = {}, headers = {}) {
    if (!url) throw new Error('Base.put: a URL is required.')
    return request(url, 'PUT', body, headers)
  }

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
  static delete(url, body = {}, headers = {}) {
    if (!url) throw new Error('Base.delete: a URL is required.')
    return request(url, 'DELETE', body, headers)
  }

}

/**
 * Issue an HTTP request.
 *
 * @private
 * @method request
 * @param  {String} url
 * @param  {String} method
 * @param  {Object} body
 * @param  {Object} headers
 * @return {Promise<Response>}
 */
async function request(url, method, body, headers) {
  let options = {
    method,
    headers: Object.assign({}, headers, defaultHeaders),
  };
  if (body) options.body = JSON.stringify(body);
  let res = await fetch(url, options);
  await checkResponseStatus(res);
  if (options.headers['Content-Type'] === 'application/json')
    res = await res.json();
  return res;
}

/**
 * Check if a response status code is in the 2xx or 3xx families.
 *
 * @private
 * @method checkResponseStatus
 * @param  {Response} response
 * @return {Promise}
 */
function checkResponseStatus(response) {
  return (response.status > 199 && response.status < 400) ? Promise.resolve(response) : Promise.reject(response)
}

/**
 * Converts the response body to JSON.
 *
 * @private
 * @method responseBodyAsJson
 * @param  {Response} response
 * @return {Promise<Response>}
 */
async function responseBodyAsJson(response) {
  const json = await response.json().catch(async () => {
    const text = await response.text().catch(e => e);
    console.debug(text);
    return response
  })
  response.body = json // TODO: Is this bad?
  return response;
}

module.exports = HttpRequest