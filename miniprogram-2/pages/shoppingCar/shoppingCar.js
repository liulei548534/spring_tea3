// pages/shoppingCar/shoppingCar.js
const app = getApp();
var myData = new Date();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:'',
    // indexs用来 存放传入过来的索引值
    indexs: [-4],
    details: [],
    iscart: false,
    hidden: null,
    num: '',
    totalMoney: 0,
    isAllSelect: false,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function(options) {
  //   var that = this;
  // },
  //websocket发送信息
  send() {
    var count = 0;
    this.data.details.forEach((v, i) => v.isSelect ?count++ :"")
    console.log(app.globalData.order)
    if(count>0){
      var myThis = this;
      var food = this.data.details
      food.forEach((v, i) => v.isSelect ? app.globalData.order.push(v) : "")
      var date = JSON.stringify(this.data.details)
      var year = myData.getFullYear() 
      var month = myData.getMonth()+1 
      var date = myData.getDate() 
      if(month<10){
        month="0"+month
      }
      if(date<10){
        date="0"+date
      }
      var hour = myData.getHours()
      var min = myData.getMinutes()
      var second = myData.getSeconds()
      if (hour < 10) {
        hour = "0" + hour
      }
      if (min < 10) {
        min = "0" + min
      }
      if (second < 10) {
        second = "0" + second
      }
      var time =year+"-"+month+"-"+date+"  "+ hour + ":" + min + ":" + second
      var foods = [];
      var babFoods = [];
      food.forEach((v, i) => v.isSelect ? babFoods.push(v) : foods.push(v))
      myThis.setData({
        details: foods,
        totalMoney: 0,
        isAllSelect: false
      })
      wx.request({
        url: 'http://10.0.100.30:8089/spCar/delAll',
        data: {
          openid: wx.getStorageSync("openid"),
          date: JSON.stringify(babFoods)
        },
        method: 'POST',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
        },
        fail: function (res) { },
        complete: function (res) {
          wx.showModal({
            title: '下单提示',
            content: '商品下单成功，点击确定前往结算，点击取消返回主页',
            success(res) {
              wx.setStorageSync("time", time)
              if (res.confirm) {
                wx.navigateTo({
                  url: '../order/order',
                })
              } else if (res.cancel) {
                wx.switchTab({
                  url: '../souye/souye',
                })
              }
            }
          })
        },
      })
    }else{
      wx.showToast({
        title: '请选择您想要购买的商品',
        icon:"none",
        duration: 1500
      });
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this
    if (wx.getStorageSync("openid")==null){
      that.setData({
        hidden: true,
        iscart: false,
      })
    }
    //请求后台查询购物车表中数据
    wx.request({
      url: 'http://10.0.100.30:8089/spCar/selectShoppingCar',
      data: {
        openid: wx.getStorageSync("openid")
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success(res) {
        that.data.details = res.data.shoppingCarList
        //判断是否有值
        if (that.data.details.length > 0) {
          //有值
          that.setData({
            details: res.data.shoppingCarList,
            hidden: false,
            iscart: true,
          })
        } else {
           //无值
          that.setData({
            hidden: true,
            iscart: false,
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //增加商品数量
  addClick: function(event) {
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
  delClick: function(event) {
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
  switchSelect: function(e) {
    // 获取item项的id，和数组的下标值  
    var Allprice = 0,
      i = 0;
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    console.log(index)
    this.data.details[index].isSelect = !this.data.details[index].isSelect;
    //价钱统计
    if (this.data.details[index].isSelect) {
      this.data.totalMoney = this.data.totalMoney + (this.data.details[index].price * this.data.details[index].num);
    } else {
      this.data.totalMoney = this.data.totalMoney - (this.data.details[index].price * this.data.details[index].num);
    }
    //是否全选判断
    for (i = 0; i < this.data.details.length; i++) {
      Allprice = Allprice + (this.data.details[i].price * this.data.details[i].num);
    }
    console.log(Allprice)
    if (Allprice == this.data.totalMoney) {
      this.data.isAllSelect = true;
    } else {
      this.data.isAllSelect = false;
    }
    this.setData({
      details: this.data.details,
      totalMoney: this.data.totalMoney,
      isAllSelect: this.data.isAllSelect
    })
  },
  //全选
  allSelect: function(e) {
    let i = 0;
    if (!this.data.isAllSelect) {
      this.data.totalMoney = 0;
      for (i = 0; i < this.data.details.length; i++) {
        this.data.details[i].isSelect = true;
        this.data.totalMoney = this.data.totalMoney + (this.data.details[i].price * this.data.details[i].num);
        console.log(this.data.totalMoney)
      }
    } else {
      for (i = 0; i < this.data.details.length; i++) {
        this.data.details[i].isSelect = false;
      }
      this.data.totalMoney = 0;
    }
    this.setData({
      details: this.data.details,
      isAllSelect: !this.data.isAllSelect,
      totalMoney: this.data.totalMoney,
    })
  },
  //删除商品
  delimg(e) {
    var num = e.currentTarget.dataset.index;
    var nums = num;
    var details = this.data.details;
    var leng = details.length
    for (var i = 0; i < leng; i++) {
      console.log("leng:" + leng)
      if (i === num) {
        wx.request({
          url: 'http://10.0.100.30:8089/spCar/delShoppingCar',
          data: {
            name: details[i].name,
            openid: wx.getStorageSync("openid")
          },
          method: 'POST',
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          success(res) {

          }
        })
        // 利用该方法来删除数组中元素（根据数据下标进行删除，1参数为删除几个）
        details.splice(i, 1)
        num = -1;
      }
    }
    var indexs = this.data.indexs;
    for (var i = 0; i < indexs.length; i++) {
      if (i === nums + 1) {
        indexs.splice(nums + 1, 1)
        nums = -1;
      }
    }
    this.setData({
      details,
      indexs
    })
    if (details.length <= 0) {
      this.setData({
        hidden: true,
        iscart: false,
      })
    }
  },
  qianggou:function(){
    if (app.globalData.flag){
     wx.navigateTo({
       url: '../content/content',
     })
    }else{
      wx.showModal({
        title: '购物车提示',
        content: '需要授权登录才能去抢购',
      })
    }
  }
})