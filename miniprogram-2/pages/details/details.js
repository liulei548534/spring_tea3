// pages/details/details.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:{}, 
    isClolected:false,
    index:null,
  },
  addCar(){
    var list = app.globalData.index
    list.push(this.data.details)
    //wx.setStorageSync("list", list)
    console.log(list)
    wx.showModal({
      title: '购物车提示',
      content: '商品成功添加到购物车',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var listData = JSON.parse(options.listData)
    var index = listData.id
    this.setData({
      details: listData,
     index:index,
    });
   //判断用户是否收藏过当前内容
   let detailStorage = wx.getStorageSync("isClolected")
    if (!detailStorage){
      //在缓存中初始化空对象
      wx.setStorageSync("isClolected",[])
   }
   //判断用户是否收藏
    // if (detailStorage[index]){//收藏过
    //   this.setData({
    //     isClolected:true
    //   });
    // }
    if(detailStorage.length!=0){
      // var isClolected = false;
      // console.log("detailStorage:"+detailStorage)
      // detailStorage.forEach((v,i)=>(v.isClolected===true)&&(v.id===index)?isClolected=true:"")
      // this.setData({isClolected:isClolected})
      // detailStorage.forEach((v,i)=>true?console.log(v.id+"---"+v.isClolected):"")
      // console.log(index+"---"+this.data.isClolected)
    }
  },
  handleCollection(){
    let isClolected = !this.data.isClolected
    //更新状态
    this.setData({
      isClolected
    });
    //提示
    let title = isClolected?'收藏成功':'取消收藏';
    wx.showToast({
      title,
      icon:"success"
    });
    let {index} = this.data
    var colletionData = {
      id:index
    }
    let detailStorage = wx.getStorageSync("isClolected")
    console.log(isClolected)
   if(detailStorage.length!=0){
      if(isClolected){
        var count =0;
        detailStorage.forEach((v,i)=>v.id==index?"":count++)
          // for(var i = 0;i<detailStorage.length;i++){
          //       if(detailStorage[i].id!=index){
          //         count++
          //       }
          // }
          if(count==detailStorage.length){
            detailStorage.push(colletionData)
          }
      }else{
          detailStorage.forEach((v,i)=>v.id==index?detailStorage.splice(i,1):"")
      }
   }else{
     detailStorage.push(colletionData)
   }
   console.log("detailStorage:"+detailStorage)
  //  wx.getStorage({
  //    key: 'isClolected',
  //    success: function(datas) {
  //     let obj = datas.data;
  //     obj[index] = isClolected
  //      //缓存数据到本地
       wx.setStorage({
         key: 'isClolected',
         data: detailStorage,
         success: () => {
           console.log("缓存成功")
         }
       })
  //    },
  //  }) 
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

 

 

  
})