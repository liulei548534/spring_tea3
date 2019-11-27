//app.js
App({
  onLaunch: function () {
   console.log("App lauch")
  },
  onShow:function(){
    console.log("App Show")
  },
  onHide:function(){
    console.log("App Hide")
  },
  appData: {
    userinfo: null
  },
  globalData: {
    date: [
      {
        id: 0,
        image: "http://image.suning.cn/uimg/sop/commodity/113581741812086093648839_x.jpg",
        name: "功夫红茶",
        content: "工夫红茶原料细嫩,制工精细,外形条索紧直,匀齐,色泽乌润,香气浓郁,滋味醇和而甘浓,汤色,叶底红艳明亮,具有形质兼优的品质特征.,内含物质十分丰富，茶多酚和儿茶素较高，茶芽壮多毫，具有优良的发酵性能和丰富的多酚类物质",
        price: "45",
        num: 1,
        type:"tea"
      }, {
        id:1,
        image: "http://5b0988e595225.cdn.sohucs.com/images/20180828/82b6e4fe790a4b318de649855cd77003.jpeg",
        name: "绿茶",
        content: "绿茶是不发酵茶,防衰老、防癌、抗癌、杀菌、消炎等均有特殊效果，为发酵类茶等所不及。",
        price: "55",
        num: 1,
        type:"tea"
      }, {
        id: 2,
        image: "http://uploads.5068.com/allimg/1809/211-1PZ1160105.jpg",
        name: "花茶",
        content: "花茶是集茶味与花香于一体，既保持了浓郁爽口的茶味，又有鲜灵芬芳的花香。花香袭人，甘芳满口，令人心旷神怡",
        price: "30",
        num: 1,
        type:"tea"
      }, {
        id: 3,
        image: "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20171117/f6d91e11e2d3494faed3c4d4c112a3b9.jpeg",
        name: "乌龙茶",
        content: "茶叶中的有机化学成分和无机矿物元素含有许多营养成分和药效成分。",
        price: "55",
        num: 1,
        type:"tea"
      }, {
        id: 4,
        image: "http://image.chawenyi.com/201903/2019032861550_b.jpg",
        name: "白茶",
        content: "成茶满披白毫、汤色清淡、味鲜醇、有毫香.素有“绿妆素裹”之美感，芽头肥壮，汤色黄亮，滋味鲜醇，叶底嫩匀。",
        price: "45",
        num: 1,
        type:"tea"
      }, {
        id: 5,
        image: 'http://image.chawenyi.com/201903/2019032861550_b.jpg',
        name: "南湖银芽茶",
        content: "外形似月芽，嫩绿披白毫。内质香气清高，滋味清爽，汤色嫩绿清澈，叶底绿明亮。",
        price: "50",
        num: 1,
        type:"tea"
      },
      {
        id: 6,
        image: "http://img.zx123.cn/Resources/zx123cn/uploadfile/2015/0516/e05d6df60f4b9e3bc13dc8b74bf4ff60.jpg",
        name: "春华阁",
        content: "吊顶装饰 复古风茶楼",
        price: "130",
        num:1,
        type:"house"
      },
      {
        id: 7,
        image: "http://img.zx123.cn/Resources/zx123cn/uploadfile/2016/0613/084d101a7066af146268d0067e0f16fc.jpg",
        name: "夏梦阁",
        content: "吊顶装饰 复古风茶楼",
        price: "190",
        num: 0,
        type:"house"
      },
      {
        id: 8,
        image: "http://www.tuozhe8.com/data/attachment/forum/threadcover/12/e1/1297945.jpg",
        name: "迎香阁",
        content: "吊顶装饰 复古风茶楼",
        price: "150",
        num: 0,
        type:"house"
      },
      {
        id: 9,
        image: "http://img.zcool.cn/community/018ef45632ea256ac7259e0f9af769.png",
        name: "明瑞阁",
        content: "吊顶装饰 复古风茶楼",
        price: "150",
        num: 0,
        type:"house"
      },
      {
        id: 10,
        image: "http://img.zcool.cn/community/0101cf5637166532f87512f6cdf09f.jpg@900w_1l_2o_100sh.jpg",
        name: "鸿福阁",
        content: "吊顶装饰 复古风茶楼",
        price: "160",
        num: 0,
        type:"house"
      },
      {
        id: 11,
        image: "http://img.zx123.cn/Resources/zx123cn/uploadfile/2018/1218/2d9f89ef7a4db7c6c8c84614d7db0bd0.jpg",
        name: "华锦阁",
        content: "300平米中式禅意茶楼",
        price: "160",
        num: 0,
        type:"house"
      },
      {
        id: 12,
        image: "http://cd.a963.com/uploadfile/2016/0401/20160401111137264.jpg",
        name: "静心亭",
        content: "300平米中式禅意茶楼",
        price: "160",
        num: 0,
        type:"house"
      },
      {
        id: 13,
        image: "http://photocdn.sohu.com/20130427/Img374279387.jpg",
        name: "瓜子",
        content: "受广大顾客喜欢的小吃，一份200g.",
        price: "10",
        num: 1,
        type:"snack"
      },
      {
        id: 14,
        image: "http://photocdn.sohu.com/20130427/Img374279387.jpg",
        name: "黄金豆腐块",
        content: "素有“植物肉”之美称。豆腐的消化吸收率达95%以上。两小块豆腐，即可满足一个人一天钙的需要量",
        price: "15",
        num: 1,
        type:"snack"
      },
      {
        id: 15,
        image: "http://images.quanjing.com/mhrf003/high/mhrf-dspd51180f10.jpg",
        name: "糕点",
        content: "面团的甜食，补充人体糖分。一份5个。",
        price: "20",
        num: 1,
        type:"snack"
      },
    ],
    index: [],
    
  },
 
})