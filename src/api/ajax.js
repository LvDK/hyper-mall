
import axios from 'axios'
import state from '../store/state'

/**
 * ajax函数封装处理
 * @param url
 * @param data
 * @param type
 * @returns {Promise<unknown>}
 */
export default function ajax(url ,data = {},type = 'GET') {

  return new Promise(function (resolve, reject) {
    alert('token: ' + url + JSON.stringify(state.token))
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
      promise = axios.get(url,{
        headers: {
          "token": state.token  //token换成从缓存获取
        }
      })
    } else {
      // post请求
      promise = axios.post(url, data,{
        headers: {
          'content-type': 'application/json',
          "token": state.token  //token换成从缓存获取
        }
      })
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
