// pages/souye/souye.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      TeahousePic:[],
      imgUrl: [],
  },
 
  /**
   * 生命周期函数--监听页面加载
   */

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
  previewImg: function (e) {
    var currentUrl = e.currentTarget.dataset.currenturl
    var previewUrls = e.currentTarget.dataset.previewurl
    wx.previewImage({
      current: currentUrl, //必须是http图片，本地图片无效
      urls: previewUrls, //必须是http图片，本地图片无效
    })
  },
  onLoad: function () {
    // list.forEach((v,i)=>v.hot===true?data.push(v):'')
    var that = this
    var picList = []
    picList.push("http://image.chawenyi.com/201904/2019040364716_b.jpg")
    picList.push("http://img1.imgtn.bdimg.com/it/u=4204701126,1244358288&fm=214&gp=0.jpg")
    picList.push("http://img.zcool.cn/community/018ef45632ea256ac7259e0f9af769.png")
    picList.push("http://img.zcool.cn/community/019bd25632ea256ac7259e0f8f6840.png") 
    var imgUrl = []
    var Teahouse_img =[] 
    that.setData({
      picList: picList,
      imgUrl: app.globalData.date,
      Teahouse_img: app.globalData.house,
    });
  },
  allClick:function(){
    wx.navigateTo({
      url: '../content/content',
    })
  },
  teaClick:function(){
    wx.navigateTo({
      url: '../content/content?name=house',
    })
  },
  jumpTo:function(e){
    let index = e.currentTarget.dataset;
     var listData = JSON.stringify(this.data.imgUrl[index.index])
    wx.navigateTo({
      url: '../details/details?listData='+listData,
    })
  }
})