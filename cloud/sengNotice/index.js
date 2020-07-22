// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  try{
    const result=await cloud.openapi.subscribeMessage.send({
      touser:event.openid,//要推送的用户
      page:'pages/index/index',//要跳转到的页面
      data:{//推送的内容
        thing1:{
          value:event.name
        },
        date2:{
          value:event.date
        },
        thing3:{
          value:event.text
        }
      },
      templateId:'aq4gN77_2WsdbxY-ZnCneyEVY5_YsExfmRzQoJ3S9UY'//模板ID
    })
    console.log(result)
    return result
  }catch(e){
    console.log(e)
    return e
  }
}