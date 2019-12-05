// pages/search/search.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: [],
    quxiao: "",
    info: ""
  },
  time: -1,
  handInput: function(e) {
    var date = e.detail.value
    if (!date.trim()) {
      return
    }
    clearTimeout(this.time)
    var that = this
    this.time = setTimeout(function() {
      wx.request({
        url: 'http://10.0.100.30:8080/allcontent/search',
        data: {
          name: date
        },
        header: {
          'content-type': 'application/json'
        },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (result) => {
          // if(result.data.searchInfo==null){}
          var date = result.data.searchInfo
          var info="songmingjie"
          if (date.length === 0) {
            info = "抱歉亲，本店还没有该商品"
            
            that.setData({
              info
            })
          } else {
            info = "songmingjie"
            that.setData({
              index: date,
              info
            })
          }
        },
        fail: () => {},
        complete: () => {}
      });
    }, 1000)
  },
  quxiao() {
    this.setData({
      quxiao: "",
      index: []
    })
  },
  jumpTo: function(e) {
    let index = e.currentTarget.dataset.index
    var listData = JSON.stringify(this.data.index[index])
    console.log(index + "-----")
    console.log(listData)
    wx.navigateTo({
      url: '../details/details?listData=' + encodeURIComponent(listData),
    })
  }
})