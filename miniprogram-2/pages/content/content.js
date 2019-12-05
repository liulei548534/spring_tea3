// pages/content/content.js
var app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop:'',
    status:2,
    navList:[
      {
      id:0,
      isSelected:true,
      name:"茶"},
      {id:1,
        isSelected:false,
        name:"包间"},
        {id:2,
          isSelected:false,
          name:"小吃"}
    ],
    date:[],
    house:[],
    snack:[]
    
  },
  ssdf:function(e){
    var index = e.currentTarget.dataset.index;
    this.liulei(index)
  },
liulei:function(index){
  var date = this.data.navList;
  date.forEach((v,i)=>i===index?v.isSelected=true:v.isSelected=false)
  // console.log(e)
  this.setData(
    {
     status:index,
     navList:date
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var imgUrl = []
    var Teahouse_img =[] 
    var global = wx.getStorageSync("orderList")
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
    }
    this.setData({
      date: imgUrl,
      house: Teahouse_img,
      snack: snack
    })
     var name = options.name
     if(name=="tea"){
      this.liulei(0)
      this.setData({
        scrollTop:10
      })
     }
    if(name=="house"){
      this.liulei(1)
      this.setData({
        scrollTop:400
      })
    }
    if(name=="snack"){
      this.liulei(2)
      this.setData({
        scrollTop:800
      })
    }
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
  //茶
  img_Click: function (e) {
    let index = e.currentTarget.dataset;
    var listData = JSON.stringify(this.data.date[index.index])
    wx: wx.navigateTo({
      url: '../details/details?listData=' + encodeURIComponent(listData),
    })
  },
  //包间
  house_Click:function(e){
    let index = e.currentTarget.dataset;
    var listData = JSON.stringify(this.data.house[index.index])
    wx: wx.navigateTo({
      url: '../details/details?listData=' + encodeURIComponent(listData),
    })
  },
  //小吃
  snack_Click: function (e) {
    let index = e.currentTarget.dataset;
    var listData = JSON.stringify(this.data.snack[index.index])
    wx: wx.navigateTo({
      url: '../details/details?listData=' + encodeURIComponent(listData),
    })
  }
})