// pages/content/content.js
var app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:[],
    house:[],
    snack:[]
    
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      date: app.globalData.date,
      house: app.globalData.house,
      snack: app.globalData.snack
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //茶
  img_Click: function (e) {
    let index = e.currentTarget.dataset;
    var listData = JSON.stringify(this.data.date[index.index])
    wx: wx.navigateTo({
      url: '../details/details?listData=' + listData,
    })
  },
  //包间
  house_Click:function(e){
    let index = e.currentTarget.dataset;
    var listData = JSON.stringify(this.data.house[index.index])
    wx: wx.navigateTo({
      url: '../details/details?listData=' + listData,
    })
  },
  //小吃
  snack_Click: function (e) {
    let index = e.currentTarget.dataset;
    var listData = JSON.stringify(this.data.snack[index.index])
    wx: wx.navigateTo({
      url: '../details/details?listData=' + listData,
    })
  }
})