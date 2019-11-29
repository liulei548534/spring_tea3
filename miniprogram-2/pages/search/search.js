// pages/search/search.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index : [],
    quxiao:""
  },
  time:-1,
  handInput:function(e){
    var date = e.detail.value
    if(!date.trim()){
        return
    }
    clearTimeout(this.time)
    var that = this
    this.time=setTimeout(function(){
      wx.request({
        url: 'http://localhost:8080/allcontent/search',
        data: {
          name:date
        },
        header: {'content-type':'application/json'},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
          that.setData({
            index:result.data.searchInfo
          })
        },
        fail: ()=>{},
        complete: ()=>{}
      });
     },1000)
    // var s = "456786454657451"
    // console.log(s.contains(12))

    // date.forEach((v,i)=>v.contains(e.detail.value)?index.push(i):"")
    // this.setData({
    //   index
    // })
  },
  quxiao(){
      this.setData({
        quxiao:"",
        index:[]
      })
  },
  jumpTo: function(e){
    let index = e.currentTarget.dataset.index
    var listData = JSON.stringify(this.data.index[index])
    console.log(index + "-----")
    console.log(listData)
    wx.navigateTo({
      url: '../details/details?listData=' + encodeURIComponent(listData),
    })
  }
})