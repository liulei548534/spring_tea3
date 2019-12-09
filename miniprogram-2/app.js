//app.js
App({
  onLaunch: function() {
    //  console.log("App Launch")
    if (!wx.getStorageSync("orderList")) {
      //没有则向后台请求数据
      wx.request({
        url: 'http://10.0.100.30:8083/customer/food/findAll',
        success(data) {
          wx.setStorageSync("orderList", data.data)
        }
      })
      }
  },
  onShow: function() {
     console.log("App Show")
  },
  onHide: function() {
     console.log("App Hide")
  },
  appData: {
    userinfo: null
  },
  globalData: {
    OnShowtime:1000,
    date: [],
    index: [],
    flag:false,
    order:[]
  }
})