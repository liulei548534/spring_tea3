//app.js
App({
  onLaunch: function() {
     console.log("App Launch")
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
    date: [],
    index: [],
    flag:false,
    order:[]
  }
})