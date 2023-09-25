import Mock from 'mockjs'
import user from './userData'
import './menuData'
const Rondom = Mock.Random
Mock.mock('/api/login/username', (options) => {
  console.log('options', options)
  if (!options || !options.body) {
    return {
      code: 101,
      message: '参数为空'
    }
  }

  const params = JSON.parse(options.body)
  if (!params || !params.username || !params.password || !params.imgcode) {
    return {
      code: 101,
      message: '参数为空'
    }
  }
  if (params.username == 'admin' && params.password == '12345') {
    return {
      code: 888,
      message: '',
      data: user.userInfo,
      token: Rondom.string(64)
    }
  }
  return {
    code: 101,
    message: '用户名或密码错误'
  }
})
