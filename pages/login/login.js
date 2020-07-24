Page({
  data: {
    username: '',
    password: '',
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },


  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  usernameInput: function (event) {
    this.setData({ username: event.detail.value })
  },

  passwordInput: function (event) {
    this.setData({ password: event.detail.value })
  },
  login:function(){

   

    // 授权
    wx.requestSubscribeMessage({
      tmplIds: ['aq4gN77_2WsdbxY-ZnCneyEVY5_YsExfmRzQoJ3S9UY'],//模板Id
      success(res){
          console.log("授权成功");
      },
      fail(res){
          console.log("授权失败");
      }
    })

     //获取openid
     wx.cloud.callFunction({
      name:"getOpenid"
    }).then(res=>{
        console.log("获取openid成功",res.result.openid);
        console.log(res.result.openid);


        console.log(this.data);
    }).catch(res=>{
        console.log("获取openid失败",res);
    })
  },


  getOpenId:function(){
    //获取openid
    // wx.cloud.callFunction({
    //   name:"getOpenid"
    // }).then(res=>{
    //     console.log("获取openid成功",res.result.openid);
    //     console.log(res.result.openid);

    //     console.log(this.data);
    // }).catch(res=>{
    //     console.log("获取openid失败",res);
    // })
  }
})