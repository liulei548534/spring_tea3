// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:[], 
    isClolected:false,
    index:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var listData = JSON.parse(options.listData)
    console.log(listData.id)
    let index = listData.id
    this.setData({
      details: listData,
      index
    });
    //根据本地缓存数据判断用户是否收藏当前内容
  let datilStorg = wx.getStorageSync("isClolected")
    if (!datilStorg){
      wx.setStorageSync("isClolected", {})
  }
  //判读用户是否收藏
    if (datilStorg[index]){
      //true
      this.setData({
        isClolected: true,
      });
   }
  },
  handleCollection(){
    let isClolected = !this.data.isClolected
    this.setData({
      isClolected
    });
    // 提示
    let title = isClolected?'收藏成功':'取消收藏';
    wx.showToast({
      title,
      icon:"success"
    });
    //缓存数据到本地
    let {index} = this.data;
    console.log(this.data)
    wx.getStorage({
      key: 'isClolected',
      success: function(datas) {      
        let obj = datas.data;
        console.log(obj)
        obj[index] = isClolected;
        wx.setStorage({
          key: 'isClolected',
          data: obj,
          success: () => {

          }
        })
      },
    });
    
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
  btn_submit_order:function(e){
    let index = e.currentTarget.dataset;
    var listData = JSON.stringify(this.data.details[index.index])
    wx: wx.navigateTo({
      url: '../shoppingCar/shoppingCar?listData=' + listData,
    })
  },
})