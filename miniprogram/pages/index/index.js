//index.js
const app = getApp()

Page({
  data: {
    //搜索框
    inputShowed: false,
    inputVal: "",

      imgUrls: [
          '../../images/bg.png',
          '../../images/bgg.png',
          '../../images/bggg.png',
          '../../images/bgggg.png'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      icons_item: [{
          icon: '../../images/q1.png',
          text: '短租'
      },
      {
          icon: '../../images/q2.png',
          text: '月租'
      },
      {
          icon: '../../images/q3.png',
          text: '房屋托管'
      }
      ],
    
  },
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
