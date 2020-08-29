
/*
对外暴露的请求函数模块
 */

import ajax from './ajax'

// 登陆函数
export const login = () => ajax('/login/login', {
  "passWord": "12345678",
  "phone": "18660997572"
},'POST')


