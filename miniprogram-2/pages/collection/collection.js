// pages/collection/collection.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHidden:false,
    date:[],
    num:'',
    indexs:[-4],
    
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
    // var date = app.globalData.date;
    // console.log(date)
    //获取收藏缓存
    var detailStorage = wx.getStorageSync('isClolected');
    // console.log(detailStorage)
    var simpleDate = this.data.date
    if (detailStorage.length != 0) {
      detailStorage.forEach((v, i) => true ? simpleDate.push(app.globalData.date[v.id-1]) : "")
      this.setData({
        isHidden: true,
        date: simpleDate,
      })
    } else {
      this.setData({
        isHidden:false,
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

  },
  coltClick(e){
    // e.currentDa
    // this.data.date[e.curre]
   var index =  e.currentTarget.dataset.index
   var date = this.data.date
    date.splice(index,1)
    console.log("-----取消收藏-----")
    this.setData({
      date
    })
    wx.setStorageSync('isClolected',date);
    if(date.length==0){
        this.setData({
          isHidden:false,
        })
    }
 },
  addCarClick: function (e) {
    console.log("-----商品加入购物车-----")
    var index =  e.currentTarget.dataset.index
    var list = app.globalData.index
    var date = this.data.date
    // var count =0;
    list.push(date[index])
    date.splice(index,1)
    this.setData({
        date
    })
    wx.setStorageSync('isClolected',date);
    if(date.length==0){
      this.setData({
        isHidden:false,
      })
  }
  },
 
})




/*
 console.log(e)
    var num = e.currentTarget.dataset.index;
    var nums = num
    var dete = this.data.date;
    console.log("num:" + num)
    var leng = dete.length
    console.log("leng:" + leng)
    for (var i = 0; i < leng; i++) {
    if (i === num) {
      // 利用该方法来删除数组中元素（根据数据下标进行删除，1参数为删除几个）
      console.log(i === num)
      dete.splice(i, 1)
      num = -1;
      console.log(num)
      }
    }
    var indexs = this.data.indexs;
         for(var i = 0; i<indexs.length;i++){
          if (i === nums + 1) {
           indexs.splice(nums + 1, 1)
           nums = -1;
              }
            }
        this.setData({
          dete,
          indexs
        })
        console.log(this.data.date)
if (dete.length <= 0) {
  this.setData({
    isHidden:true
     })
   }
 */