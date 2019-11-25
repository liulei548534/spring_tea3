// pages/details/details.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:[], 
    isClolected:false,
  },
  addCar(){
    wx.setStorageSync("index",this.data.index)
    console.log(this.data.index)
    wx.showModal({
      title: '购物车提示',
      content: '商品成功添加到购物车',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var listData = JSON.parse(options.listData)
    var index = listData.id
    this.setData({
      details: listData,
     index:index,
    });
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
  //小吃
  delClick: function (event) {
    let index = event.currentTarget.dataset;
    var num = this.data.snack[index.index].num;
    // 商品总数量-1
    if (num > 0) {
      this.data.snack[index.index].num--;
    }
    // 将数值与状态写回  
    //拼接
    var up = "snack[" + index.index + "].num";
    this.setData({
      [up]: this.data.snack[index.index].num
    });
  },
  addClick: function (event) {
    let index = event.currentTarget.dataset;
    var num = this.data.snack[index.index].num;
    // 总数量-1  
    if (num < 50) {
      this.data.snack[index.index].num++;
    }
    // 将数值与状态写回  
    var up = "snack[" + index.index + "].num";
    this.setData({
      [up]: this.data.snack[index.index].num

    });
  }
})