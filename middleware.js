
const {loginData} = require("./data.js")
function getDateArr(arr){
  let targets = []
  targets = Object.keys(arr)
  return targets
}
/**
 * @name 登录-中间件
 * @param {*} params 
 * @description 判断中间件
 */
const loginMiddleware = function(req,res,next){
  if (getDateArr(req.body).length == 0){
    return res.send({
      code:0,
      message:'请填入参数'
    })
  }
  if (getDateArr(loginData).toString() === getDateArr(req.body).toString()){
    next()
  } else {
    return res.send({
      code:0,
      message:'参数错误'
    })
  }
}

/**
 * @name 信息-中间价
 */
const infoMiddleware = function (req,res,next){
  next()
}

/**
 * @name 推荐栏-中间件
 */
const barMiddleware = function(req,res,next){
  next()
}

module.exports = {
  loginMiddleware,
  infoMiddleware,
  barMiddleware
}