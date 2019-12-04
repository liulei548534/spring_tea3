// pages/user/user.js
var app = getApp();
Page({
  getUserInfo: function (e) {
    let that = this;
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: function (res) {
        // that.setData({
        //   info: res.userInfo,
        //   isHidden: true
        // })
        console.log(res)

        if (res.code) {

          //发起网络请求

          wx.request({
            // 获取用户的openid

            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',

            data: {

              appid: 'wx3ec4bbad864bed9b',

              secret: '91655393e7d3eebe9af569fb0932a907',

              js_code: res.code,

              grant_type: 'authorization_code' 

            },

            success(v) {
              // console.log(v.data)
              console.log(v.data.openid)
               wx.setStorage({
                 key: 'openid',
                 data: v.data.openid,
               })
            }

          })

        } else {

          console.log('登录失败！' + res.errMsg)

        }

      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              that.setData({
                 info: res.userInfo,
                  isHidden: true
              })
              // 可以将 res 发送给后台解码出 unionId
              // this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // console.log(e)
    // 获取用户信息
    // wx.getSetting({
    //   success(res) {
    //   //console.log("res", res)
    //     if (res.authSetting['scope.userInfo']) {
    //       console.log("已授权=====")
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
    //       wx.getUserInfo({
    //         success(res) {
    //           that.setData({
    //             info: res.userInfo,
    //             isHidden: true
    //           })
    //           wx.login({
    //             success(re){
    //               console.log(re.code)
    //               wx.request({
    //                 url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
    //                 data:{
    //                   appid: 'wx3ec4bbad864bed9b',

    //                   secret: '91655393e7d3eebe9af569fb0932a907',

    //                   js_code: res.code,

    //                   grant_type: 'authorization_code'
    //                 },
    //                 success:function(ree){
    //                      console.log(ree.data)
    //                 }
    //               })
    //             }
    //           })
    //         },
          
    //         fail(res) {
    //           console.log("获取用户信息失败")
    //         }
    //       })
    //     } else {
    //       console.log("未授权=====")
    //       // that.showSettingToast("请授权")
    //     }
    //   }
    // })
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