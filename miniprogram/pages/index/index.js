//index.js
const app = getApp()

Page({
  data: {
    //搜索框
    inputShowed: false,
    inputVal: "",

    //banner图
    imgUrls:null,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
    
  },
  onLoad: function(){
    //   this.getBanner();
  },
//   getBanner: function(){
//       var self = this;
//       wx.request({
//           url: 'http://www.bbb.com/api/banner/index',
//           method:'GET',
//           success:function(res){
//               console.log(res);
//               self.setData({
//                   imgUrls: res
//               });
//           }
//       })
//   },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
})
