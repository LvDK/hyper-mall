
import axios from 'axios'

/**
 * ajax函数封装处理
 * @param url
 * @param data
 * @param type
 * @returns {Promise<unknown>}
 */
export default function ajax(url ,data = {},type = 'GET') {

  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      // get请求  拼接url
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0,dataStr.length - 1)
        url = url + '?' + dataStr
      }
      // axios.defaults.headers.
      promise = axios.get(url)
    } else {
      // post请求
      // alert('token: ' + state.token)
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      // 执行成功
      resolve(response.data)
    }).catch(function (error) {
      // 执行失败
      reject(error)
    })

  })
}
