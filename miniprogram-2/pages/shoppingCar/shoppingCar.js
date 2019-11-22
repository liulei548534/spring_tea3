// pages/shoppingCar/shoppingCar.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:[],
    clolected: false,
  },
  /*获取传入购物车的商品*/
  getPorduct() {
    var listDataId = wx.getStorageSync("index");
    var details = app.globalData.date[listDataId]
    var s = this.data.details
    s.push( details )
    this.setData({
      details:s
    });   
  },
  showmessage(){
    var conte = this.data.details
    console.log(conte)
    if (conte[0]==undefined) {
      let clolected = !this.data.clolected
      this.setData({
        clolected,
      })
    }
  },
 /* var p = this.data.listData;
  for(var i=0;i<p.length;i++){
    if(p[i]==listDataId){
      this.setData({
        listData:p[i]
      })
    }
     var list = this.data.details
    var index = id
    list.forEach((v,i)=>v.id===index?v="")
  }*/
  /*console.log(this.data.details);
},*/
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
   this.getPorduct();
    this.showmessage();
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