// pages/teas/teas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalPrice:0,
    date:[
      {
        id:0,
        image:"http://image.suning.cn/uimg/sop/commodity/113581741812086093648839_x.jpg",
        name:"功夫红茶",
        content:"内含物质十分丰富，茶多酚和儿茶素较高，茶芽壮多毫，具有优良的发酵性能和丰富的多酚类物质",
        price:"45￥",
        num:0
      },{
        id:1,
        image: "http://5b0988e595225.cdn.sohucs.com/images/20180828/82b6e4fe790a4b318de649855cd77003.jpeg",
        name: "绿茶",
        content: "绿茶是不发酵茶,防衰老、防癌、抗癌、杀菌、消炎等均有特殊效果，为发酵类茶等所不及。",
        price: "55￥",
        num:0
      }, {
        id:2,
        image: "http://uploads.5068.com/allimg/1809/211-1PZ1160105.jpg",
        name: "花茶",
        content: "花茶是集茶味与花香于一体，既保持了浓郁爽口的茶味，又有鲜灵芬芳的花香。花香袭人，甘芳满口，令人心旷神怡",
        price: "30￥",
        num: 0
      }, {
        id:3,
        image: "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20171117/f6d91e11e2d3494faed3c4d4c112a3b9.jpeg",
        name: "乌龙茶",
        content: "茶叶中的有机化学成分和无机矿物元素含有许多营养成分和药效成分。",
        price: "55￥",
        num: 0
      },{
        id:4,
        image:'http://img2.imgtn.bdimg.com/it/u=1387589851,597537415&fm=26&gp=0.jpg',
        name: "白茶",
        content: "成茶满披白毫、汤色清淡、味鲜醇、有毫香.素有“绿妆素裹”之美感，芽头肥壮，汤色黄亮，滋味鲜醇，叶底嫩匀。",
        price: "45￥",
        num: 0
      }, {
        id: 5,
        image: 'http://image.chawenyi.com/201903/2019032861550_b.jpg',
        name: "南湖银芽茶",
        content: "外形似月芽，嫩绿披白毫。内质香气清高，滋味清爽，汤色嫩绿清澈，叶底绿明亮。",
        price: "50￥",
        num: 0
      }
    ],
    snack:[
       {
        id: 0,
        image: "http://img1.imgtn.bdimg.com/it/u=1432096479,1066005478&fm=26&gp=0.jpg ",
        name: "五香瓜子",
        content: "受广大顾客喜欢的小吃，一份200g.",
        price: "10￥",
        num: 0
      }, {
        id: 1,
        image: "http://photocdn.sohu.com/20130427/Img374279387.jpg",
        name: "黄金豆腐块",
        content: "素有“植物肉”之美称。豆腐的消化吸收率达95%以上。两小块豆腐，即可满足一个人一天钙的需要量。",
        price: "15￥",
        num: 0
      }, {
        id: 2,
        image: "http://images.quanjing.com/mhrf003/high/mhrf-dspd51180f10.jpg",
        name: "糕点",
        content: "面团的甜食，补充人体糖分。一份5个。",
        price: "20￥",
        num: 0
      }

    ]
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
jianClick:function(event){
  let index = event.currentTarget.dataset;
  var num = this.data.date[index.index].num;
  var price = this.data.date[index.index].price;
  var allPrice = this.data.date[index.index].num;
  // 商品总数量-1
  if (num > 0) {
    this.data.date[index.index].num--;
  }
  // 将数值与状态写回  
  //拼接
  var up = "date[" + index.index + "].num";
  this.setData({
    [up]: this.data.date[index.index].num,
  
  });
},
jiaClick:function(event){
      let index = event.currentTarget.dataset;
      var num = this.data.date[index.index].num;
      // 总数量-1  
      if (num < 50) {
        this.data.date[index.index].num++;
      }
      // 将数值与状态写回  
      var up = "date["+index.index+"].num";  
      this.setData({
        [up]: this.data.date[index.index].num,
      });
  },
  //小吃
  delClick: function (event) {
    let index = event.currentTarget.dataset;
    var num = this.data.snack[index.index].num;
    // 商品总数量-1
    if (num > 0) {
      this.data.snack[index.index].num--;
    }
    // 将数值与状态写回  
    //拼接
    var up = "snack[" + index.index + "].num";
    this.setData({
      [up]: this.data.snack[index.index].num
    });
  },
  addClick: function (event) {
    let index = event.currentTarget.dataset;
    var num = this.data.snack[index.index].num;
    // 总数量-1  
    if (num < 50) {
      this.data.snack[index.index].num++;
    }
    // 将数值与状态写回  
    var up = "snack[" + index.index + "].num";
    this.setData({
      [up]: this.data.snack[index.index].num

    });
  },
  addCarClick:function(){
    console.log("-----加入购物车---")
    let index = event.currentTarget.dataset;
    var snack = this.data.snack[index].num;

  },
  //收藏
  btn_submit_order:function(){
    console.log("--收藏--")
  },
  img_Click:function(e){
    let index = e.currentTarget.dataset;
    var listData = JSON.stringify(this.data.date[index.index])
    wx:wx.navigateTo({
      url: '../order/order?listData='+listData,
    })
  }

})