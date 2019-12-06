// pages/order/order.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  addOrder: function() {
    var list2 = this.data.order_list
    var orderL = 1974084011450001
    var house = "大厅"
    var appData = app.globalData.order
    appData.forEach((v, i) => v.type == "house" ? house = v.type : "")
    if (appData.length > 0) {
      list2.push(
        ({
          id: 0,
          order_package: house,
          orderList: orderL,
          status: "正在进行",
          class: 'order_status',
          date: '2018-09-10',
          list: app.globalData.order
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
    console.log(45454)
    this.orderRequest("正在进行")
    var up = "order[0].isSelect";
    this.setData({
      [up]: true
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
    var that = this
    var mythis = that
    wx.request({
      url: 'http://10.0.100.30:8080/orderList/findAll',
      data: {
        date: index,
        // openid: wx.getStorageSync("openid")
        openid: "owcCm5PNHntgDyI3XxZazbv1Hkgc"
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        if (res.data.list.length != 0) {
          for (var i = 0; i < res.data.list.length; i++) {
            var list = JSON.parse(res.data.list[i].orderinfo)
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