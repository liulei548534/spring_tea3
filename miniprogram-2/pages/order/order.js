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
    order_list: [
      // {
      //   id:0,
      //   order_package:"天下宫",
      //   orderList:"123456789123",
      //   status:"正在进行",
      //   class:"order_status",
      //   date:"2019-11-21",
      //   list:[
      //     {
      //       id: 0,
      //       image: "http://image.suning.cn/uimg/sop/commodity/113581741812086093648839_x.jpg",
      //       name: "功夫红茶",
      //       content: "内含物质十分丰富，茶多酚和儿茶素较高，茶芽壮多毫，具有优良的发酵性能和丰富的多酚类物质",
      //       price: 45,
      //       num: 2
      //     }, {
      //       id: 1,
      //       image: "http://5b0988e595225.cdn.sohucs.com/images/20180828/82b6e4fe790a4b318de649855cd77003.jpeg",
      //       name: "绿茶",
      //       content: "绿茶是不发酵茶,防衰老、防癌、抗癌、杀菌、消炎等均有特殊效果，为发酵类茶等所不及。",
      //       price: 55,
      //       num: 3
      //     }, {
      //       id: 2,
      //       image: "http://uploads.5068.com/allimg/1809/211-1PZ1160105.jpg",
      //       name: "花茶",
      //       content: "花茶是集茶味与花香于一体，既保持了浓郁爽口的茶味，又有鲜灵芬芳的花香。花香袭人，甘芳满口，令人心旷神怡",
      //       price: 30,
      //       num: 4
      //     }, {
      //       id: 3,
      //       image: "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20171117/f6d91e11e2d3494faed3c4d4c112a3b9.jpeg",
      //       name: "乌龙茶",
      //       content: "茶叶中的有机化学成分和无机矿物元素含有许多营养成分和药效成分。",
      //       price: 55,
      //       num: 5
      //     }, {
      //       id: 4,
      //       image: 'http://img2.imgtn.bdimg.com/it/u=1387589851,597537415&fm=26&gp=0.jpg',
      //       name: "白茶",
      //       content: "成茶满披白毫、汤色清淡、味鲜醇、有毫香.素有“绿妆素裹”之美感，芽头肥壮，汤色黄亮，滋味鲜醇，叶底嫩匀。",
      //       price: 45,
      //       num: 3
      //     }, {
      //       id: 5,
      //       image: 'http://image.chawenyi.com/201903/2019032861550_b.jpg',
      //       name: "南湖银芽茶",
      //       content: "外形似月芽，嫩绿披白毫。内质香气清高，滋味清爽，汤色嫩绿清澈，叶底绿明亮。",
      //       price: 50,
      //       num: 0
      //     }
      //   ]
      // },{
      //   id:1,
      //   order_package:"家天下",
      //   orderList:"789456123789",
      //   status:"已完成",
      //   class:"order_ed",
      //   date:"2014-10-14",
      //   list:[
      //     {
      //       id: 0,
      //       image: "http://image.suning.cn/uimg/sop/commodity/113581741812086093648839_x.jpg",
      //       name: "宋明杰",
      //       content: "内含物质十分丰富，茶多酚和儿茶素较高，茶芽壮多毫，具有优良的发酵性能和丰富的多酚类物质",
      //       price: 45,
      //       num: 2
      //     }, {
      //       id: 1,
      //       image: "http://5b0988e595225.cdn.sohucs.com/images/20180828/82b6e4fe790a4b318de649855cd77003.jpeg",
      //       name: "闵润",
      //       content: "绿茶是不发酵茶,防衰老、防癌、抗癌、杀菌、消炎等均有特殊效果，为发酵类茶等所不及。",
      //       price: 55,
      //       num: 4
      //     }, {
      //       id: 2,
      //       image: "http://uploads.5068.com/allimg/1809/211-1PZ1160105.jpg",
      //       name: "林建",
      //       content: "花茶是集茶味与花香于一体，既保持了浓郁爽口的茶味，又有鲜灵芬芳的花香。花香袭人，甘芳满口，令人心旷神怡",
      //       price: 30,
      //       num: 3
      //     }, {
      //       id: 3,
      //       image: "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20171117/f6d91e11e2d3494faed3c4d4c112a3b9.jpeg",
      //       name: "周涛",
      //       content: "茶叶中的有机化学成分和无机矿物元素含有许多营养成分和药效成分。",
      //       price: 55,
      //       num: 2
      //     }, {
      //       id: 4,
      //       image: 'http://img2.imgtn.bdimg.com/it/u=1387589851,597537415&fm=26&gp=0.jpg',
      //       name: "刘磊",
      //       content: "成茶满披白毫、汤色清淡、味鲜醇、有毫香.素有“绿妆素裹”之美感，芽头肥壮，汤色黄亮，滋味鲜醇，叶底嫩匀。",
      //       price: 45,
      //       num: 1
      //     }, {
      //       id: 5,
      //       image: 'http://image.chawenyi.com/201903/2019032861550_b.jpg',
      //       name: "涛哥",
      //       content: "外形似月芽，嫩绿披白毫。内质香气清高，滋味清爽，汤色嫩绿清澈，叶底绿明亮。",
      //       price: 50,
      //       num: 2
      //     }
      //   ]
      // },{
      //   id:1,
      //   order_package:"偿命宫",
      //   orderList:"789456123789",
      //   status:"已完成",
      //   class:"order_ed",
      //   date:"2014-10-14",
      //   list:[
      //     {
      //       id: 0,
      //       image: "http://image.suning.cn/uimg/sop/commodity/113581741812086093648839_x.jpg",
      //       name: "宋明杰",
      //       content: "内含物质十分丰富，茶多酚和儿茶素较高，茶芽壮多毫，具有优良的发酵性能和丰富的多酚类物质",
      //       price: 45,
      //       num: 2
      //     }, {
      //       id: 1,
      //       image: "http://5b0988e595225.cdn.sohucs.com/images/20180828/82b6e4fe790a4b318de649855cd77003.jpeg",
      //       name: "闵润",
      //       content: "绿茶是不发酵茶,防衰老、防癌、抗癌、杀菌、消炎等均有特殊效果，为发酵类茶等所不及。",
      //       price: 55,
      //       num: 4
      //     }, {
      //       id: 2,
      //       image: "http://uploads.5068.com/allimg/1809/211-1PZ1160105.jpg",
      //       name: "林建",
      //       content: "花茶是集茶味与花香于一体，既保持了浓郁爽口的茶味，又有鲜灵芬芳的花香。花香袭人，甘芳满口，令人心旷神怡",
      //       price: 30,
      //       num: 3
      //     }, {
      //       id: 3,
      //       image: "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20171117/f6d91e11e2d3494faed3c4d4c112a3b9.jpeg",
      //       name: "周涛",
      //       content: "茶叶中的有机化学成分和无机矿物元素含有许多营养成分和药效成分。",
      //       price: 55,
      //       num: 2
      //     }, {
      //       id: 4,
      //       image: 'http://img2.imgtn.bdimg.com/it/u=1387589851,597537415&fm=26&gp=0.jpg',
      //       name: "刘磊",
      //       content: "成茶满披白毫、汤色清淡、味鲜醇、有毫香.素有“绿妆素裹”之美感，芽头肥壮，汤色黄亮，滋味鲜醇，叶底嫩匀。",
      //       price: 45,
      //       num: 1
      //     }, {
      //       id: 5,
      //       image: 'http://image.chawenyi.com/201903/2019032861550_b.jpg',
      //       name: "涛哥",
      //       content: "外形似月芽，嫩绿披白毫。内质香气清高，滋味清爽，汤色嫩绿清澈，叶底绿明亮。",
      //       price: 50,
      //       num: 2
      //     }
      //   ]
      // }
    ]
  },
  onShow: function() {
    console.log(app.globalData.order)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.orderRequest("正在进行")
    var up = "order[0].isSelect";
    this.setData({
      [up]:true
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
    // var infomation = "正在进行"
    // if (!this.data.order[0].isSelect) {
    //   infomation = "已完成"
    // }
    // date= date.split("的")[0]
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
        that.setData({
          order_list: []
        })
        if (res.data.list.length != 0) {
          for(var i=0;i<res.data.list.length;i++){
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

      },
      fail: function(res) {},
      complete: function(res) {
        if (res.data.list.length != 0) {
          var info = that.data.info
          var num2 = 0;
          // var that = this;
          var total = 0;
          for (var i = 0; i < that.data.order_list.length; i++) {
            for (var j = 0; j < that.data.order_list[i].list.length; j++) {
              num2 = num2 + parseFloat(that.data.order_list[i].list[j].num) * parseFloat(that.data.order_list[i].list[j].price);
              total = total + parseInt(that.data.order_list[i].list[j].num);
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
          if (index=="正在进行") {
            console.log(index)
            isWho = "else"
          } else {
            isWho = "one"
          }
          that.setData({
            info,
            isWho: isWho,
            index: 0
          })
        }
      },
    })
  }
})