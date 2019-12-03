//app.js
App({
  onLaunch: function () {
  var that = this;
  wx.request({
    url: 'http://localhost:8081/allcontent/selectOne',
    success(data){
      that.globalData.date = data.data.userList
    }
  })
  },
  onShow:function(){
    console.log("App Show")
  },
  onHide:function(){
    console.log("App Hide")
  },
  appData: {
    userinfo: null
  },
  globalData: {
    date: [],
    index: [],
  },
})