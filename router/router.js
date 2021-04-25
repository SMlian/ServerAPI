const {loginData,info,recommendedBar} = require("../data.js")
const {loginMiddleware,infoMiddleware,barMiddleware} = require("../middleware.js")
const express = require("express")
const router = express.Router()
/**
 * @name 登录接口
 * @description http://localhost:1417/api/login
 * @description loginData - 模拟正确的数据
 * @param { username, password }    
 */
router.post("/login",loginMiddleware,(req,res)=>{
    try {
        let {username,password} = req.body
        if (loginData.username === username && loginData.password === password){
            return res.send({
                code:1,
                message:'success',
                result:[{ token:'1232421' }]
            })
        }
        return res.send({
            code:0,
            message:'账号或密码错误',
            result:[]
        })
    } catch (error) {
        res.send({
            code:500,
            message:'内部错误'
        })
    }
})

/**
 * @name 信息列表展示
 * @description  http://localhost:1417/api/info
 */
router.get("/info",infoMiddleware,(req,res)=>{
    res.send({
        code:1,
        message:'success',
        result:[info]
    })
})

/**
 * @name 推荐栏
 * @description http://localhost:1417/api/bar
 */
 router.get("/bar",barMiddleware,(req,res)=>{
    res.send({
        code:1,
        message:'success',
        result:[recommendedBar]
    })
})

// 接口将在这里定义
module.exports = router