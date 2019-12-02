Page({
  data: {
    longitude:null,
    latitude:null,
    //茶楼地理位置经纬度
    markers: [{
      iconPath: "../../image/map.png",
      id: 0,
      // latitude: 30.64242,
      // longitude: 104.04311,
      latitude: 30.662438,
     longitude: 104.062443,
      width: 40,
      height: 40
    }],
  },
  regionchange(e) {

  },
  //茶楼地理图标信息
  markertap(e) {
    wx.showModal({
      title: '春茗茶楼',
      content: '品茶、休闲、麻将',
    })
  },
  controltap(e) {
 
  },
  onLoad: function (options) {
    var that = this
    //获取当前位置
    wx.getLocation({
      type:'gcj02',
      success: function(res) {
        //把位置经纬度写回去
        that.setData({
          longitude:res.longitude,
          latitude:res.latitude,
        })
      },
    })  
  },
})