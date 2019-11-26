// pages/collection/collection.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHidden:false,
    date:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    //获取date
      var date = app.globalData.date;
      console.log(date)
      //获取收藏缓存
    var detailStorage = wx.getStorageSync('isClolected');
    console.log(detailStorage)
    var simpleDate = this.data.date
    if(detailStorage.length!=0){
      detailStorage.forEach((v,i)=>true?simpleDate.push(date[v.id]):"")
      this.setData({
        isHidden:true,
        date:simpleDate
      })
    }else{
      this.setData({
        isHidden:false,
        date:simpleDate
      })
    }
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

  }
})