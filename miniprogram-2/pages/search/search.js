// pages/search/search.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index : [],
    quxiao:"12"
  },
  handInput:function(e){
    // e.detail.value
    // var date = app.globalData.date
    // var index=this.data.index
    console.log(e.detail.value)
    // var s = "456786454657451"
    // console.log(s.contains(12))

    // date.forEach((v,i)=>v.contains(e.detail.value)?index.push(i):"")
    // this.setData({
    //   index
    // })
  },
  quxiao(){
    console.log("sfs")
      this.setData({
        quxiao:""
      })
  }
})