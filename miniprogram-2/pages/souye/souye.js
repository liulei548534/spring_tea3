// pages/souye/souye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      TeahousePic:[],
      content_pic:'http://image.chawenyi.com/201904/2019040471929_b.jpg',
      imgUrl: []
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
    var that = this
    var picList = []
    picList.push("http://image.chawenyi.com/201904/2019040364716_b.jpg")
    picList.push("http://img1.imgtn.bdimg.com/it/u=4204701126,1244358288&fm=214&gp=0.jpg")
    picList.push("http://img.zcool.cn/community/018ef45632ea256ac7259e0f9af769.png")
    picList.push("http://img.zcool.cn/community/019bd25632ea256ac7259e0f8f6840.png") 
    var imgUrl = []
    imgUrl.push("http://image.chawenyi.com/201904/2019041654428_b.jpg")
    imgUrl.push("http://image.chawenyi.com/201904/2019040471929_b.jpg")
    imgUrl.push("http://image.chawenyi.com/201904/2019040364716_b.jpg")
    imgUrl.push("http://image.chawenyi.com/201904/2019040264724_b.jpg")

    var Teahouse_img = []
    Teahouse_img.push("http://img.zx123.cn/Resources/zx123cn/uploadfile/2015/0516/e05d6df60f4b9e3bc13dc8b74bf4ff60.jpg")
    Teahouse_img.push("http://img.zcool.cn/community/019bd25632ea256ac7259e0f8f6840.png")
    Teahouse_img.push("http://static-xiaoguotu.17house.com/xgt/m/15/1462691135164.jpg")
    Teahouse_img.push("http://pic1.shejiben.com/case/day_120315/20120315_acac94cab82a06cc129fZevQFXSshyjx.jpg")
    that.setData({
      picList: picList,
      imgUrl: imgUrl,
      Teahouse_img: Teahouse_img,
    })
  },
  allClick:function(){
    wx.navigateTo({
      url: '../content/content',
    })
  },
  teaClick:function(){
    wx.navigateTo({
      url: '../teaHouse/teaHouse',
    })
  }
})