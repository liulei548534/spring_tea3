// pages/teas/teas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Teahouse_img: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var Teahouse_img=[] 
    Teahouse_img.push('http://img.zx123.cn/Resources/zx123cn/uploadfile/2015/0516/e05d6df60f4b9e3bc13dc8b74bf4ff60.jpg')
    Teahouse_img.push('http://img.zx123.cn/Resources/zx123cn/uploadfile/2016/0613/084d101a7066af146268d0067e0f16fc.jpg')
    Teahouse_img.push('http://img2.imgtn.bdimg.com/it/u=2256473595,1440560495&fm=26&gp=0.jpg')
    Teahouse_img.push('http://www.tuozhe8.com/data/attachment/forum/threadcover/12/e1/1297945.jpg')
    Teahouse_img.push('http://img.zcool.cn/community/018ef45632ea256ac7259e0f9af769.png')
    Teahouse_img.push('http://img.zcool.cn/community/0101cf5637166532f87512f6cdf09f.jpg@900w_1l_2o_100sh.jpg')
    Teahouse_img.push('http://pic.tugou.com/hotword/d554274a-4461-e210-ee8e-9250f3d15348.jpg@815h_1e_1c')
    Teahouse_img.push('http://www.mlgjjd.com/wwwroot/pic/ChaLouBaoJian003.gif')
    Teahouse_img.push('http://cd.a963.com/uploadfile/2016/0401/20160401111137264.jpg')
    Teahouse_img.push('http://img.zcool.cn/community/019bd25632ea256ac7259e0f8f6840.png')
    Teahouse_img.push('http://static-xiaoguotu.17house.com/xgt/m/15/1462691135164.jpg')
    Teahouse_img.push('http://pic1.shejiben.com/case/day_120315/20120315_42ba2c10bc8ce9c8ac04jkvy8MhwG3sE.jpg')
    Teahouse_img.push('http://pic1.shejiben.com/case/day_120315/20120315_acac94cab82a06cc129fZevQFXSshyjx.jpg')
    that.setData({
      Teahouse_img: Teahouse_img,
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