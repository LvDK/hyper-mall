
/*
对外暴露的请求函数模块
 */

import ajax from './ajax'

const BASE_URL = '/emer'

// 登陆函数
export const login = (userName,passWord) => ajax(BASE_URL + '/login/login', {
  "userName": userName,
  "passWord": passWord
},'POST')

export const getUserList = () => ajax(BASE_URL + '/login/getUserList', {},'GET')

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL+'/shops', {longitude, latitude})


