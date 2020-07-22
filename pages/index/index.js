//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    msg:"hello",
    person:{
      name:"asdas",
      gender:"dasdas",
      imgs:"asdasd"
    },
    list:[
    {
      msgId:1,
      msgInfo:"通知*****",
      msgLastTime:"2020.9.1",
      msgState:1
    },
    {
      msgId:2,
      msgInfo:"通知*****",
      msgLastTime:"2020.9.1",
      msgState:0
    },
    {
      msgId:3,
      msgInfo:"通知*****",
      msgLastTime:"2020.9.1",
      msgState:0
    },
    {
      msgId:4,
      msgInfo:"通知*****",
      msgLastTime:"2020.9.1",
      msgState:2
    },
    {
      msgId:5,
      msgInfo:"通知*****",
      msgLastTime:"2020.9.1",
      msgState:0
    }
    
  ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
   
  },

  handle1:function(){
    let that = this;
    wx.request({
      url:"http://202.118.26.114:8080/notice/msg/.do",
      success(res){
        console.log("数据提取成功" + res);
        that.setData({
          dataBean:res.data
        })
      }
    })
  },

  imgsss:function(){
    this.setData({
      imgData:"http://202.118.26.114:8080/notice/upload/aaafc9af96a54095b813870695ee6094/setting.png"
    })
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

console.log("tstrasfadasda");

