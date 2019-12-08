// pages/souye/souye.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },

  /**
   * 生命周期函数--监听页面加载
   */

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    //判断是否有缓存
    if (!wx.getStorageSync("orderList")) {
      console.log(wx.getStorageSync("orderList"))
      //没有则向后台请求数据
      wx.request({
        url: 'http://localhost:8080/allcontent/selectOne',
        success(data) {
          wx.setStorageSync("orderList", data.data.userList)
        }
      })
    }
    //茶
    var imgUrl = []
     //包间
    var Teahouse_img = []
     //小吃
    var snack = []
     //轮播图
    var picList=[]
    //获取缓存
    var global = wx.getStorageSync("orderList")
    for (var i = 0; i < global.length; i++) {
      if (global[i].type == "house") {
        Teahouse_img.push(global[i])
      }
      if (global[i].type == "snack") {
        snack.push(global[i])
      }
      if (global[i].type == "tea") {
        imgUrl.push(global[i])
      }
      if (global[i].lunbo == "true") {
        picList.push(global[i])
      }
    }
    that.setData({
      picList: picList,
      imgUrl: imgUrl,
      Teahouse_img: Teahouse_img,
      snack: snack
    });
  },
  //全部商品信息跳转
  teaClick: function (e) {
    var name = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '../content/content?name=' + name
    })
  },
  //点击图片跳转商品详情页
  jumpTo: function(e) {
    let index = e.currentTarget.dataset.index.split("/")
    if (index[0] == "tea") {
      var listData = JSON.stringify(this.data.imgUrl[index[1]])
    }
    if (index[0] == "house") {
      var listData = JSON.stringify(this.data.Teahouse_img[index[1]])
      console.log(listData)
    }
    if (index[0] == "snack") {
      var listData = JSON.stringify(this.data.snack[index[1]])
    }
    if (index[0] == "true") {
      var listData = JSON.stringify(this.data.picList[index[1]])
    }
    wx.navigateTo({
      url: '../details/details?listData=' + encodeURIComponent(listData),
    })
  },
  //茶楼地址
  messageClick: function() {
    console.log("------")
    wx.navigateTo({
      url: '../map/map',
    })
  },
  //茶楼电话
  telClick: function() {
    wx.makePhoneCall({
      phoneNumber: '13882305120',
    })
  },
})