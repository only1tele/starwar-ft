/* eslint-disable valid-jsdoc */
import Axios, { AxiosRequestConfig } from "axios"

const Request = {
  /**
   * Prepares request options
   *
   * @param {AxiosRequestConfig} axiosOpts
   * @param {string} authToken
   * @return {Object}
   */
  prepareOptions(axiosOpts?: AxiosRequestConfig | null) {
    /* eslint-disable-next-line */
    const { url, method, headers, data, ...requestOptions } = axiosOpts || {}

    const options = {
      ...requestOptions,
      headers: {
        ...(headers || {}),
      },
    }

    return { data, ...options }
  },
  /**
   * Makes a GET request
   *
   * @param {string}                    endpoint
   * @param {AxiosRequestConfig | null} options
   */
  async get<T = any>(endpoint: string, options?: AxiosRequestConfig | null) {
    return (await Axios.get<T>(endpoint, options || {})).data
  },
  /**
   * Makes a POST request
   *
   * @param endpoint
   * @param data
   * @param options
   */
  async post<T = any>(endpoint: string, options?: AxiosRequestConfig | null) {
    let postData
    let requestOptions

    if (options) {
      const { data, ...rest } = options

      postData = data
      requestOptions = rest
    }

    return (await Axios.post<T>(endpoint, postData, requestOptions)).data
  },
  /**
   * Makes a POST request
   *
   * @param endpoint
   * @param data
   * @param options
   */
  async put<T = any>(endpoint: string, options?: AxiosRequestConfig | null) {
    let postData
    let requestOptions

    if (options) {
      const { data, ...rest } = options

      postData = data
      requestOptions = rest
    }

    return (await Axios.put<T>(endpoint, postData, requestOptions)).data
  },
  /**
   * Makes a POST request
   *
   * @param endpoint
   * @param data
   * @param options
   */
  async patch<T = any>(endpoint: string, options?: AxiosRequestConfig | null) {
    let postData
    let requestOptions

    if (options) {
      const { data, ...rest } = options

      postData = data
      requestOptions = rest
    }

    return (await Axios.patch<T>(endpoint, postData, requestOptions)).data
  },
  /**
   * Makes a GET request
   *
   * @param endpoint
   * @param options
   */
  async delete<T = any>(endpoint: string, options?: AxiosRequestConfig | null) {
    return (await Axios.delete<T>(endpoint, options || {})).data
  },
}

export default Request
