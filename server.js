const express = require('express')
const app = express()
const router = require('./router/router.js')
const bodyParser =  require("body-parser")
// 解析body参数
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(router)
app.listen(1417,()=>{
    console.log('服务器启动: http://localhost:1417')
})