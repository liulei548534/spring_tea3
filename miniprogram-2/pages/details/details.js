// pages/details/details.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:{}, 
    isClolected:false,
    index:null,
  },
  addCar(){
    var list = app.globalData.index
    list.push(this.data.details)
    //wx.setStorageSync("list", list)
    console.log(list)
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
   //判断用户是否收藏过当然内容
   let detailStorage = wx.getStorageSync("isClolected")
    if (!detailStorage){
      //在缓存中初始化空对象
      wx.setStorageSync("isClolected",{})
   }
   //判断用户是否收藏
    if (detailStorage[index]){//收藏过
      this.setData({
        isClolected:true
      });
    }
  },
  handleCollection(){
    let isClolected = !this.data.isClolected
    //更新状态
    this.setData({
      isClolected
    });
    //提示
    let title = isClolected?'收藏成功':'取消收藏';
    wx.showToast({
      title,
      icon:"success"
    });
    let {index} = this.data
   wx.getStorage({
     key: 'isClolected',
     success: function(datas) {
      let obj = datas.data;
      obj[index] = isClolected
       //缓存数据到本地
       wx.setStorage({
         key: 'isClolected',
         data: obj,
         success: () => {
           console.log("缓存成功")
         }
       })
     },
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

 

 

  
})