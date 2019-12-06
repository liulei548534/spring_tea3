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
  onLoad: function(options) {
    var that = this;
    that.connect();
  },
  //连接websocket
  connect() {
    var myThis = this;
    wx.connectSocket({
      url: 'ws://10.0.100.30:8080/websocket/12'
    })
    wx.onSocketOpen(function(res) {
      console.log("连接服务器成功")
    })
  },
  //断开websocket
  close() {
    var myThis = this;
    wx.closeSocket()
    wx.onSocketClose(function(res) {
      myThis.setData({
        status: "websocket服务器已经断开"
      })
    })
  },
  //websocket发送信息
  send() {
    var count = 0;
    this.data.details.forEach((v, i) => v.isSelect ?count++ :"")
    if(count>0){
      var myThis = this;
      var food = this.data.details
      food.forEach((v, i) => v.isSelect ? app.globalData.order.push(v) : "")
      // console.log(this.data.details)
      var date = JSON.stringify(this.data.details)
      var year = myData.getFullYear() 
      var month = myData.getMonth() 
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
      var time =year+"-"+month+"-"+date+"  "+ hour + ":" + min + ":" + second
      wx.sendSocketMessage({
        data: date + time,
        success: function (res) {
          // console.log("发送信息")
          myThis.setData({
            totalMoney: 0,
            isAllSelect: false,
            time:time
          }),
          // wx.showToast({
          //   title: '下单成功',
          //   icon: 'success',
          //   duration: 1000
          // })
          wx.showModal({
            title: '下单提示',
            content: '商品下单成功，点击确定前往结算，点击取消返回主页',
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
                wx.navigateTo({
                  url: '../order/order?' + 'time=' + time,
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
                wx.switchTab({
                  url: '../souye/souye',
                })
              }
            }
          })
        },
        fail: function (res) {
          console.log("请连接服务器")
        }
      })
      wx.request({
        url: 'http://10.0.100.30:8082/delAll',
        data: {
          openid: wx.getStorageSync("openid"),
          date: app.globalData.order
        },
        success: function (res) {
          food.forEach((v, i) => v.isSelect ? food.splice(i, 1) : "")
          //  console.log(food)
          myThis.setData({
            details: food
          })
        },
        fail: function (res) { },
        complete: function (res) { },
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
      url: 'http://10.0.100.30:8082/selectShoppingCar',
      data: {
        openid: wx.getStorageSync("openid")
      },
      header: {
        'content-type': 'application/json'
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
    console.log("num:" + num)
    var leng = details.length
    for (var i = 0; i < leng; i++) {
      console.log("leng:" + leng)
      if (i === num) {
        console.log(details[i].name)
        wx.request({
          url: 'http://10.0.100.30:8082/delShoppingCar',
          data: {
            name: details[i].name,
            openid: wx.getStorageSync("openid")
          },
          header: {
            'content-type': 'application/json'
          },
          success(res) {

          }
        })
        // 利用该方法来删除数组中元素（根据数据下标进行删除，1参数为删除几个）
        details.splice(i, 1)
        num = -1;
        console.log(num)
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