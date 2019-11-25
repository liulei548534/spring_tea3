// pages/shoppingCar/shoppingCar.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:[],
    details:[],
    iscart: false,
    hidden: null,
    num:'',
    totalMoney:'',
    isAllSelect: false,
  },
  /*获取传入购物车的商品*/
  getPorduct() {
    var index = wx.getStorageSync("index");
    var arr = app.globalData.date[index]
    console.log(details)
    var num = app.globalData.date[index].num
    console.log(num)
    var s = this.data.details
    s.push( details )
    this.setData({
      details:s,
      num
    });   
    console.log(details)
  },
 
 /* 
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
    var index1 = wx.getStorageSync("index");
    var details  = app.globalData.date[index1] ||[]
    console.log(details.length)
    console.log(details )
    if (details.length !=0) {
      var s = this.data.details
      s.push(details)
      var index2 = this.data.index
      index2.push(index1)
      index2.forEach((v, i) =>v=== index1 ?"return":function(){
        this.setData({
          index: index2,
          details: s,
          hidden: false,
          iscart: true,
        })
      })
    }else{
      this.setData({
        hidden: true,
        iscart: false,
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
  //增加商品数量
  addClick: function (event) {
    let index = event.currentTarget.dataset;
    var num = this.data.details[index.index].num;
    // 总数量-1  
    if (num < 50) {
      this.data.details[index.index].num++;
    }
    var up = "details[" + index.index + "].num";
    // 将数值与状态写回  
    this.setData({
      [up]: this.data.details[index.index].num++
    });
    },
      //减少商品数量
  delClick: function (event) {
    let index = event.currentTarget.dataset;
    var num = this.data.details[index.index].num;
    // 商品总数量-1
    if (num > 0) {
     this.data.details[index.index].num--;
    }
    // 将数值与状态写回  
    //拼接
    var up = "details[" + index.index + "].num";
    this.setData({
      [up]: this.data.details[index.index].num--
    });
  },
  //勾选事件处理函数  
  switchSelect: function (e) {
    // 获取item项的id，和数组的下标值  
    var Allprice = 0, i = 0;
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
      console.log(index)
    this.data.details[index].isSelect = !this.data.details[index].isSelect;
    //价钱统计
    if (this.data.details[index].isSelect) {
      this.data.totalMoney = this.data.totalMoney + (this.data.details[index].price * this.data.details[index].num);
    }
    else {
      this.data.totalMoney = this.data.totalMoney - (this.data.details[index].price * this.data.details[index].num);
    }
    //是否全选判断
    for (i = 0; i < this.data.details.length; i++) {
      Allprice = Allprice + (this.data.details[index].price * this.data.details[index].num);
    }
    if (Allprice == this.data.totalMoney) {
      this.data.isAllSelect = true;
    }
    else {
      this.data.isAllSelect = false;
    }
    this.setData({
      details: this.data.details,
      totalMoney: this.data.totalMoney,
      isAllSelect: this.data.isAllSelect,
    })
  },
  //全选
  allSelect: function (e) {
    //处理全选逻辑
    let i = 0;
    if (!this.data.isAllSelect) {
      this.data.totalMoney = 0;
      for (i = 0; i < this.data.details.length; i++) {
        this.data.details[i].isSelect = true; 
        this.data.totalMoney = this.data.totalMoney + (this.data.details[i].price * this.data.details[i].num);
        console.log(this.data.totalMoney)
      }
    }
    else {
      for (i = 0; i < this.data.details.length; i++) {
        this.data.details[i].isSelect = false;
      }
      this.data.totalMoney = 0;
    }
    this.setData({
      carts: this.data.details,
      isAllSelect: !this.data.isAllSelect,
      totalMoney: this.data.totalMoney,
    })
  },
  // 去结算
  toBuy() {
    wx.showToast({
      title: '去结算',
      icon: 'success',
      duration: 1500
    });
    this.setData({
      showDialog: !this.data.showDialog
    });
  }
  
})