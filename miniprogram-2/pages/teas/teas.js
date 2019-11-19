// pages/teas/teas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Teaimgurl:[],
    snackimgurl:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this
      var Teaimgurl = []
    Teaimgurl.push('http://image.suning.cn/uimg/sop/commodity/113581741812086093648839_x.jpg ')
    Teaimgurl.push('http://5b0988e595225.cdn.sohucs.com/images/20180828/82b6e4fe790a4b318de649855cd77003.jpeg')
    Teaimgurl.push('http://uploads.5068.com/allimg/1809/211-1PZ1160105.jpg')
    Teaimgurl.push('http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20171117/f6d91e11e2d3494faed3c4d4c112a3b9.jpeg')
    Teaimgurl.push('http://img2.imgtn.bdimg.com/it/u=1387589851,597537415&fm=26&gp=0.jpg')
    Teaimgurl.push('http://image.chawenyi.com/201903/2019032212502_b.jpg')
    var snackimgurl = []
    snackimgurl.push('http://img1.imgtn.bdimg.com/it/u=1432096479,1066005478&fm=26&gp=0.jpg')
    snackimgurl.push('http://photocdn.sohu.com/20130427/Img374279387.jpg')
    snackimgurl.push('http://images.quanjing.com/mhrf003/high/mhrf-dspd51180f10.jpg')
    that.setData({
      Teaimgurl: Teaimgurl,
      snackimgurl: snackimgurl,
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

  }
})