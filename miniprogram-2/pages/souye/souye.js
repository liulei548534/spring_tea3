// pages/souye/souye.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      TeahousePic:[],
      imgUrl: [],
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
  onLoad: function () {
    var that = this
    var picList = []
    var imgUrl = []
    var Teahouse_img =[] 
    var global = app.globalData.date
    var snack=[]
    for(var i = 0;i<global.length;i++){
        if(global[i].type=="house"){
          Teahouse_img.push(global[i])
        }
        if(global[i].type=="snack"){
            snack.push(global[i])
        }
        if(global[i].type=="tea"){
          imgUrl.push(global[i])
        }
        if(global[i].lunbo=="true"){
          picList.push(global[i])
        }
    }
    that.setData({
      picList: picList,
      imgUrl: imgUrl,
      Teahouse_img: Teahouse_img,
      snack:snack
    });
  },
  teaClick:function(e){
    var name = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '../content/content?name='+name
    })
  },
  jumpTo:function(e){
    let index = e.currentTarget.dataset.index.split("/")
     if(index[0]=="tea"){
      var listData = JSON.stringify(this.data.imgUrl[index[1]])
     }
     if(index[0]=="house"){
      var listData = JSON.stringify(this.data.Teahouse_img[index[1]])
      console.log(listData)
    }
    if(index[0]=="snack"){
      var listData = JSON.stringify(this.data.snack[index[1]])
    }
    if (index[0] == "true") {
      var listData = JSON.stringify(this.data.picList[index[1]])
    }
    wx.navigateTo({
      url: '../details/details?listData=' + encodeURIComponent(listData),
    })

  },
  messageClick:function(){
    console.log("------")
     wx.navigateTo({
       url: '../map/map',
     })
  },
  telClick:function(){
    wx.makePhoneCall({
      phoneNumber: '13882305120',
    })
  },
 

})
