// 登录账号
const loginData = {
  "username":"root",
  "password":"root123"
}
// 基本的信息
const info = {
  hot:[
    {
      recommended:[{id:00001,content:'一次失败的创业经历(48/20/2117)'},{id:00002,content:'一次失败的创业经历(48/20/2117)'},{id:00003,content:'一次失败的创业经历(48/20/2117)'}], // 推荐
      headlines:[{id:12321,content:'中国首次完成商业航天天地激光通信：速度可达百兆(0/6/770)'},{id:12322,content:'中国首次完成商业航天天地激光通信：速度可达百兆(0/6/770)'},{id:12323,content:'中国首次完成商业航天天地激光通信：速度可达百兆(0/6/770)'}], // 头条
      itInfo:[{id:23412313,content:'震惊:!it男都是单身狗'} ,{id:23412314,content:'震惊:!it男都是单身狗'} ,{id:23412315,content:'震惊:!it男都是单身狗'} ]
    }
  ], // 热点信息
  info:[
    { 
      id:00001, 
      title:'什么是vue?vue能干什么?',  // 标题
      username:'小埋', // 用户名
      headPortrai:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.365biaoqing.com%2Fimages%2F309315%2F3_QHdxC.png&refer=http%3A%2F%2Fwww.365biaoqing.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621759108&t=6ca6c5c78742808e87dd8070806dc47f', // 头像
      Introduction:'关于硬件控制大部分都是使用CS客户端程序，一般连接口都是用网口，串口，USB口等，应用通讯是不支持HTTp协议操作的，而目前一般做技术的人员都在于BS开发，使用HTTP 协议，所以在硬件交互上可能觉得很复杂。最近在实施牙膏车间地磅称重过程中使用到了三色灯的控制，在开发控制的过程中将三色灯的控制转换了 .', // 简介
      createdTime:'2020-12-12 12:12:32', // 创建时间
      like:0, // 点赞数量
      leaveMessage:{id:31222,num:0}, // 留言数量和对应id
      seeNum:0, // 浏览的数量
    },
    { 
      id:00002, 
      title:'什么是vue?vue能干什么?',  // 标题
      username:'阿库娅', // 用户名
      headPortrai:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F18743828.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621759134&t=7fa15ba17638ba7393de394215ae3427', // 头像
      Introduction:'关于硬件控制大部分都是使用CS客户端程序，一般连接口都是用网口，串口，USB口等，应用通讯是不支持HTTp协议操作的，而目前一般做技术的人员都在于BS开发，使用HTTP 协议，所以在硬件交互上可能觉得很复杂。最近在实施牙膏车间地磅称重过程中使用到了三色灯的控制，在开发控制的过程中将三色灯的控制转换了 .', // 简介
      createdTime:'2020-12-12 12:12:32', // 创建时间
      like:0, // 点赞数量
      leaveMessage:{id:32222,num:0}, // 留言数量和对应id
      seeNum:0, // 浏览的数量
    },
  ], // 其他用户消息
} 
// 推荐栏
const recommendedBar = {
  bookBar:[
    {id: 1000,content:'前端开发进阶《前端修行》'},
    {id: 1001,content:'《微服务入门》,只要999'},
    {id: 1002,content:'不懂服务器？不存在的,《Linux的骚操作》'},
    {id: 1003,content:'前端开发进阶《前端修行》1'},
    {id: 1004,content:'前端开发进阶《前端修行》2'},
    {id: 1005,content:'前端开发进阶《前端修行》3'},
    {id: 1006,content:'前端开发进阶《前端修行》4'},
    {id: 1007,content:'前端开发进阶《前端修行》5'},
    {id: 1008,content:'前端开发进阶《前端修行》6'},
    {id: 1009,content:'前端开发进阶《前端修行》7'},
  ], // 书记推荐
  advBar:[
    {id:12000,content:'0基础,学IT,月薪过万,就来黑马程序员'},
    {id:12001,content:'0基础,学IT,月薪过万,就来黑马程序员'},
    {id:12002,content:'0基础,学IT,月薪过万,就来黑马程序员'},
    {id:12003,content:'0基础,学IT,月薪过万,就来黑马程序员'},
    {id:12004,content:'0基础,学IT,月薪过万,就来黑马程序员'},
    {id:12005,content:'0基础,学IT,月薪过万,就来黑马程序员'},
  ]
}

module.exports = {
  loginData,
  info,
  recommendedBar
}