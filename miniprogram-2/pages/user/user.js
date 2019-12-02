// pages/user/user.js
var app = getApp();
Page({
  getUserInfo: function (e) {
    let that = this;
    // console.log(e)
    // 获取用户信息
    wx.getSetting({
      success(res) {
      //console.log("res", res)
        if (res.authSetting['scope.userInfo']) {
          console.log("已授权=====")
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              that.setData({
                info: res.userInfo,
                isHidden: true
              })
            },
            fail(res) {
              console.log("获取用户信息失败")
            }
          })
        } else {
          console.log("未授权=====")
          // that.showSettingToast("请授权")
        }
      }
    })
  },
  // onload:function(e){
  //   getUserInfo(opption);
  // }  


  data: {
    img: "http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574078958964&di=0e0d2c884be45eef375591f8d26fe321&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F424964918abcd1ef4e2179ef0ecadf544eaf26ce191f7-wKp6h7_fw658",
    message: "需要您的授权才能使用哟",
    info: [],
    isHidden: false,
    order:[
      {
       id:1,
       page:"order",
       name:"查看订单",
       class:"icon-74wodedingdan",
      },{
        id:2,
        page:"collection",
        name:"我的收藏",
        class:"icon-Mycollection",
        classCon:"icon_conllection",
      },{
        id:3,
        page:"pingjia",
        name:"店铺评价",
        class:"icon-pingjia",
      },{
        id:4,
        page:"fankui",
        name:"反馈我们",
        class:"icon-fankui",
      },{
        id:5,
        page:"aboutUs",
        name:"关于我们",
        class:"icon-guanyuwomen",
      }
    ]
  }

})