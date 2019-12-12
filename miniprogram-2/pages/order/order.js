// pages/order/order.js
import QRCode from '../../utils/weapp-qrcode.js'
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:false,
    status: false,
    status1: false,
    time: "",
    array: "",
    isFinish: "正在进行",
    order: [{
      id: 0,
      name: "正在进行的订单",
      funName: "on_ing",
      isSelect: false
    }, {
      id: 1,
      name: "历史订单",
      funName: "on_ed",
      isSelect: false
    }],
    index: "",
    isWho: "",
    // 显示价格栏信息
    info: [],
    // // 显示数量
    count: 3,
    // // 总价
    // num: "",
    // // 件数
    // total: "",
    bussness: [{
      name: "展示全部",
      icon: "icon-changyongtubiao-xianxingdaochu-zhuanqu-1",
      functionName: "showAll"
    }],
    order_list: []
  },
  quxiao: function() {
    this.setData({
      status1: false,
      status: false
    })
  },
  erweima: function() {
    if (!this.data.status) {
      var newDate = []
      var newArray={}
      var liulei = this.data.order_list
      liulei[0].list.forEach((v,i)=>true?newDate.push({
        image:v.image,
        isSelect:true,
        name:v.name,
        num:v.num,
        price:v.price,
        type:v.type
      }):"")
      liulei[0].list = newDate
      var that = this
      wx.sendSocketMessage({
        data: JSON.stringify(this.data.order_list),
        success: function (res) {
          app.globalData.order=[]
          that.setData({
           order_list:[],
           info:[]
          })
        },
        fail: function (res) {
          console.log("请连接服务器")
        }
      })
      this.data.status = true
      this.setData({
        status1: true
      })
      var array = []
      this.data.order_list.forEach((v,i)=>true?array.push(v.name):"")
      new QRCode('myQrcode', {
        text: JSON.stringify(array),
        width: 200,
        height: 200,
        padding: 0, // 生成二维码四周自动留边宽度，不传入默认为0
        correctLevel: QRCode.CorrectLevel.L, // 二维码可辨识度
        callback: (res) => {}
      })
    } else {
      this.data.status = false
      this.setData({
        status1: false
      })
      new QRCode('myQrcode', {
        text: this.data.order_list,
        width: 0,
        height: 0,
        padding: 0, // 生成二维码四周自动留边宽度，不传入默认为0
        correctLevel: QRCode.CorrectLevel.L, // 二维码可辨识度
        callback: (res) => {}
      })
    }
  },
  addOrder: function() {
    var openid = wx.getStorageSync("openid")
    var list2 = this.data.order_list
    var orderL = wx.getStorageSync("time")
    var house = "大厅"
    var appData = app.globalData.order
    console.log(appData)
    appData.forEach((v, i) => v.type == "house" ? house = v.name : "")
    var array = [];
    for (var i = 0; i < appData.length; i++) {
      var lily = appData.filter((p) => {
        return p.name === appData[i].name
      })
      if (lily.length < 2) {
        var count = 0
        for (var j = 0; j < array.length; j++) {
          if (lily[0].name === array[j].name) {
            count++
          }
        }
        if (count === 0) {
          array.push(lily[0])
        }
      } else {
        var count = 0
        for (var j = 0; j < array.length; j++) {
          if (lily[0].name === array[j].name) {
            count++
          }
        }
        var obj = ""
        var nums = 0
        if (count === 0) {
          for (var k = 0; k < lily.length; k++) {
            nums = lily[k].num + nums
          }
          obj = {
            content: lily[0].content,
            id: lily[0].id,
            image: lily[0].image,
            isSelect: true,
            name: lily[0].name,
            num: nums,
            openid: lily[0].openid,
            price: lily[0].price,
            type: lily[0].type
          }
          obj.num = nums
          console.log(obj)
          array.push(obj)
        }
      }
    }
    if (appData.length > 0) {
      list2.push(
        ({
          id: 0,
          openid:openid,
          order_package: house,
          orderList: orderL,
          status: "正在进行",
          class: 'order_status',
          date: this.data.time,
          list: array
        })
      )
      this.setData({
        order_list: list2
      })
      this.jisuan("正在进行")
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var flag = wx.getStorageSync("flag")
    if(flag==""){
      console.log(this.data.flag)
      this.connect();
      wx.setStorageSync("flag", true)
    }
    this.orderRequest("正在进行")
    var up = "order[0].isSelect";
    this.setData({
      [up]: true,
      time: wx.getStorageSync("time")
    })
  },
  //连接websocket
  connect() {
    var myThis = this;
    wx.connectSocket({
      url: 'ws://10.0.100.30:8090/websocket/12'
    })
    wx.onSocketOpen(function (res) {
      console.log("连接服务器成功")
      myThis.data.flag=true
    })
  },
  //断开websocket
  close() {
    var myThis = this;
    wx.closeSocket()
    wx.onSocketClose(function (res) {
      myThis.setData({
        status: "websocket服务器已经断开"
      })
    })
  },
  showAll(e) {
    var that = this;
    var newTotal = [{
      id: 1,
      name: "收起",
      icon: "icon-shangjiantou",
      functionName: "hiddenAll"
    }]
    var index = that.data.order_list[0].list.length;
    if (index == 0) {
      index = 6;
    }
    this.setData({
      count: index,
      bussness: newTotal
    })
  },
  hiddenAll(e) {
    var newTotal = [{
      name: "展示全部",
      icon: "icon-changyongtubiao-xianxingdaochu-zhuanqu-1",
      functionName: "showAll"
    }]
    this.setData({
      count: 3,
      bussness: newTotal
    })
  },
  on_ing: function(e) {
    var index = e.currentTarget.dataset.index;
    let list = this.data.order;
    list.forEach((v, i) => i === index ? v.isSelect = true : v.isSelect = false)
    this.setData({
      isFinish: "正在进行",
      order: list,
      index: 0
    })
    this.orderRequest("正在进行")
  },
  on_ed: function(e) {
    var index = e.currentTarget.dataset.index;
    let list = this.data.order;
    list.forEach((v, i) => i === index ? v.isSelect = true : v.isSelect = false)
    var that = this;
    var isWho = "";
    if (that.data.order_list.length == 0) {
      isWho = "one"
    } else {
      isWho = "else"
    }
    this.setData({
      isFinish: "已完成",
      order: list,
    })
    this.orderRequest("已完成")
  },
  orderRequest: function(index) {
    this.setData({
      order_list: []
    })
    var that = this
    var mythis = that
    wx.request({
      url: 'http://10.0.100.30:8083/client/orderList/findUserAll',
      data: {

        date: index,
        openid: wx.getStorageSync("openid")
        // openid: "owcCm5PNHntgDyI3XxZazbv1Hkgc"
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res)
        if (res.data.list.length != 0) {
          for (var i = 0; i < res.data.list.length; i++) {
            
            
            var list2 = that.data.order_list
            var classes = ""
            if (res.data.list[i].orderstatus == "已完成") {
              classes = "order_ed"
            } else {
              classes = "order_status"
            }
            list2.push(
              ({
                id: 0,
                order_package: res.data.list[i].housenumber,
                orderList: res.data.list[i].ordernumber,
                status: res.data.list[i].orderstatus,
                class: classes,
                date: res.data.list[i].orderdate,
                list: list
              })
            )
            that.setData({
              order_list: list2
            })
          }
        }
        that.addOrder()
      },
      fail: function(res) {},
      complete: function(res) {
        if (res.data.list.length != 0) {
          mythis.jisuan(index);
        }
      },
    })
  },
  jisuan: function(index) {
    var info = this.data.info
    var num2 = 0;
    // var that = this;
    var total = 0;
    for (var i = 0; i < this.data.order_list.length; i++) {
      for (var j = 0; j < this.data.order_list[i].list.length; j++) {
        num2 = num2 + parseFloat(this.data.order_list[i].list[j].num) * parseFloat(this.data.order_list[i].list[j].price);
        total = total + parseInt(this.data.order_list[i].list[j].num);
      }
      info.push({
        num: num2,
        total: total
      })
      num2 = 0
      total = 0
      console.log(info[i])
    }
    var isWho = "";
    if (index == "正在进行") {
      console.log(index)
      isWho = "else"
    } else {
      isWho = "one"
    }
    this.setData({
      info,
      isWho: isWho,
      index: 0
    })
  }
})