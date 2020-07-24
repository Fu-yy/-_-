// pages/outMsg/outMsg.js
Page({
//   获取用户Id
    getUserId(){
        wx.cloud.callFunction({
            name:"getOpenid"
        }).then(res=>{
            console.log("获取openid成功",res);
        }).catch(res=>{
            console.log("获取openid失败",res);
        })
    },
    // 获取用户授权
    getPermission(){
        wx.requestSubscribeMessage({
          tmplIds: ['aq4gN77_2WsdbxY-ZnCneyEVY5_YsExfmRzQoJ3S9UY'],//模板Id
          success(res){
              console.log("授权成功")
          },
          fail(res){
              console.log("授权失败");
          }
        })
    },


     // 发送通知的方法
     sendFun(openid,name){
        wx.cloud.callFunction({
            name:"sengNotice",
            data:{
                openid:openid,
                name:name,
                date:"2020-05-01 15:30:30",
                text:"asdasdasda"
            }
        }).then(res=>{
            console.log("发送成功",res);
        }).catch(res=>{
            console.log("发送失败",res);
        })
    },

    // 发送通知
    outMsg(){
        let users  =["o9G4t5ES_llEcmbO4Nmrgbv3NE74","o9G4t5ES_llEcmbO4Nmrgbv3NE74"];
        users.forEach(item=>{
            console.log(item)
        })
        this.sendFun("o9G4t5ES_llEcmbO4Nmrgbv3NE74","asdasdasda")
    }
})