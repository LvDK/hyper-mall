import {RECEIVE_TOKEN,RECEIVE_USERINFO,RECEIVE_USERLIST,RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS} from './mutations-types'
import {login, getUserList, reqAddress, reqFoodCategorys, reqShops} from '../api/index'


/**
 * 通过mutation间接更新state多个方法对象
 */
export default {
  // 登陆
  async login({commit,state}) {
    // 发送异步ajax请求
    const result = await login(state.userName,state.passWord)
    // 提交一个mutation
    // console.log(result)

    if (result.code === 200) {
      const userInfo = result.result
      const token = result.token
      alert(token)
      commit(RECEIVE_TOKEN, {token})
      commit(RECEIVE_USERINFO, {userInfo})
    }
  },

  async getUserList({commit}) {

    // 发送异步ajax请求
    const result = await getUserList()
    alert("getUserList")
    // 提交一个mutation
    if (result.code === 200) {
      const userList = result.result
      commit(RECEIVE_USERLIST, {userList})
    }
  },

  // 异步获取地址
  async getAddress({commit, state}) {
    // alert(state.token)
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  // 异步获取食品分类列表
  async getCategorys({commit}) {
    // 发送异步ajax请求
    const result = await reqFoodCategorys()
    // 提交一个mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  // 异步获取商家列表
  async getShops({commit, state}) {
    // 发送异步ajax请求
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    // 提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  }
}
