//app.js
App({
  onLaunch: function() {},
  onShow: function() {
    var that = this;
    wx.request({
      url: 'http://10.0.100.30:8080/allcontent/selectOne',
      success(data) {
        that.globalData.date = data.data.userList
      }
    })
  },
  onHide: function() {
    // console.log("App Hide")
  },
  appData: {
    userinfo: null
  },
  globalData: {
    date: [],
    index: [],
    flag:false
  }
})