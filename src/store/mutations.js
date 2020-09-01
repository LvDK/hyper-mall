/**
 * 直接更新state多个方法对象
 */
import {
  RECEIVE_TOKEN,
  RECEIVE_USERINFO,
  RECEIVE_USERLIST,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutations-types'


export default {
  [RECEIVE_TOKEN] (state, {token}) {
    state.token = token
  },

  [RECEIVE_USERINFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },

  [RECEIVE_USERLIST] (state, {userList}) {
    state.userList = userList
  },

  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },

  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },

  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  }
}
