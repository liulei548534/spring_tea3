// pages/details/details.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: {},
    isClolected: false,
    index: null,
  },
      addCar() {
        if (app.globalData.flag) {
      //加入购物车 数据发送到后端,发送请求
          // var  openid=wx.getStorageSync("openid")
          // var  shangping=this.data.details
          // var da = encodeURIComponent(JSON.stringify(shangping))
          // var ds = JSON.stringify(shangping)
      wx.request({
        url: 'http://10.0.100.30:8089/spCar/ShoppingCar',
        data: {
          openid: wx.getStorageSync("openid") + '/',
          shangping: JSON.stringify(this.data.details),
          
        },
        method: 'POST', 
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success(res) {}
      })
      wx.showModal({
        title: '购物车提示',
        content: '商品成功添加到购物车',
      })
    } else {
      wx.showModal({
        title: '授权登录提示',
        content: '需要授权登录才能加入购物车',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var listData = JSON.parse(decodeURIComponent(options.listData))
    var index = listData.id
    this.setData({
      details: listData,
      index: index,
    });
    //判断用户是否收藏过当前内容
    let detailStorage = wx.getStorageSync("isClolected")
    if (!detailStorage) {
      //在缓存中初始化空对象
      wx.setStorageSync("isClolected", [])
    }
    if (detailStorage.length != 0) {
      var isClolected = false;
      detailStorage.forEach((v, i) => v.id === index ? isClolected = true : "")
      this.setData({
        isClolected: isClolected
      })
    }
  },
  handleCollection() {
    if (app.globalData.flag) {
      let isClolected = !this.data.isClolected
      if (!this.data.isClolected) {
        // 收藏
        wx.request({
          url: 'http://10.0.100.30:8090/client/teaSc/insert',
          data: {
            date: JSON.stringify(this.data.details),
            openid: wx.getStorageSync("openid")
          },
          method: 'POST',
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          success: function(res) {
            console.log(res)
          }
        })
      } else {
        // 删除 
        wx.request({
          url: 'http://10.0.100.30:8090/client/teaSc/delect',
          data: {
            openid: wx.getStorageSync("openid"),
            name: this.data.details.name,
          },
          method: 'POST',
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          success(res) {
            console.log(res.data)
          }
        })
      }
      //更新状态
      this.setData({
        isClolected
      });
      //提示
      let title = isClolected ? '收藏成功' : '取消收藏';
      wx.showToast({
        title,
        icon: "success"
      });
      let {
        index
      } = this.data
      var colletionData = {
        id: index
      }
      let detailStorage = wx.getStorageSync("isClolected")
      console.log(isClolected)
      if (detailStorage.length != 0) {
        if (isClolected) {
          var count = 0;
          detailStorage.forEach((v, i) => v.id == index ? "" : count++)
          if (count == detailStorage.length) {
            detailStorage.push(colletionData)
          }
        } else {
          detailStorage.forEach((v, i) => v.id == index ? detailStorage.splice(i, 1) : "")
        }
      } else {
        detailStorage.push(colletionData)
      }
      wx.setStorage({
        key: 'isClolected',
        data: detailStorage,
        success: () => {
          console.log("缓存成功")
        }
      })
    } else {
      wx.showModal({
        title: '授权登录提示',
        content: '需要登录才能加入收藏',
      })
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


  },
})