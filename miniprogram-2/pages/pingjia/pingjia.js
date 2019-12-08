// pages/pingjia/pingjia.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    score: '',
    user_score: [],
    star: [{
        id: 0,
        isSelect: true
      },
      {
        id: 1,
        isSelect: true
      },
      {
        id: 2,
        isSelect: true
      },
      {
        id: 3,
        isSelect: true
      },
      {
        id: 4,
        isSelect: true
      },
    ],
    star1: [],
    count: '',
    score_right: [{
        name: '5星',
        count: 73,
        percent: 40,
      },
      {
        name: '4星',
        count: 53,
        percent: 10
      },
      {
        name: '3星',
        count: 43,
        percent: 10
      },
      {
        name: '2星',
        count: 53,
        percent: 20
      },
      {
        name: '1星',
        count: 63,
        percent: 20
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    var obj = {
      list2: [{
          id: 0,
          isSelect: true
        },
        {
          id: 1,
          isSelect: true
        },
        {
          id: 2,
          isSelect: true
        },
        {
          id: 3,
          isSelect: true
        },
        {
          id: 4,
          isSelect: true
        },
      ]
    }
    wx.request({
      url: 'http://localhost:8080/teaPj/selectAll',
      success: function(res) {
        // console.log(res.data.list[0].pjScore)
        var star1 = that.data.star1
        for (var j = 0; j < res.data.list.length; j++) {
          star1.push(obj)
        }
        that.setData({
          list: res.data.list,
          star1
        })
        // console.log(that.data.list)
      },
      fail: function(res) {},
      complete: function(res) {

      },
    })
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
    var date = this.data.score_right
    var num = 0
    var score = 0
    date.forEach((v, i) => true ? num = num + v.count : "")
    date.forEach((v, i) => true ? score = (5 - i) * v.count + score : "")
    console.log(num)
    score = Math.floor(score / num)
    var star = this.data.star
    for (var i = 0; i < score; i++) {
      star[i].isSelect = false
    }
    this.setData({
      count: num,
      score,
      star
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
  jisuan: function() {


  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})