// pages/aboutUs/aboutUs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  check() {
    // wx.showToast({
    //   title: '成功提示弹窗',
    //   icon: '',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
    //   duration: 2000,      //停留时间
    // })

    // wx.showToast({
    //   title: '带蒙层的弹窗',
    //   duration: 2000,
    //   mask: true    //是否有透明蒙层，默认为false 
    //   //如果有透明蒙层，弹窗的期间不能点击文档内容 
    // })

    wx.showToast({
      title: '当前已是最新版本',
      icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
      duration: 2000     
    })  
  }

})