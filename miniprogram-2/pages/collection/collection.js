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
    var that = this
      wx.request({
        url: 'http://10.0.100.3:8080/teaSc/findByOpenId',
        data:{
          openid: wx.getStorageSync("openid")
        },
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          console.log(res.data.list)
          if(res.data.list.length>0){
            that.setData({
              date: res.data.list,
              isHidden: true
            })
          }else{
            that.setData({
              isHidden:false
            })
          }
        }
      })

    //获取收藏缓存
    var detailStorage = wx.getStorageSync('isClolected');
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
    console.log(this.data.date)
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
   var index =  e.currentTarget.dataset.index
   var date = this.data.date
    this.delect(wx.getStorageSync("openid"), date[index].name)
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
    console.log(date[index])
    wx.request({
      url: 'http://localhost:8082/ShoppingCar',
      data: {
        shangping: date[index],
        openid: wx.getStorageSync("openid")
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
      }
    })
    this.delect(wx.getStorageSync("openid"), date[index].name)
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
  delect:function(openid,name){
      wx.request({
        url: 'http://10.0.100.3:8080/teaSc/delect',
        data:{
          openid:openid,
          name:name
        },
        success(res){
            console.log(res.data)
        }
      })
  }
})
