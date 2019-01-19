//index.js
const app = getApp()

Page({
  data: {
    //搜索框
    inputShowed: false,
    inputVal: "",

      imgUrls: [
          '../../images/001.png',
          '../../images/002.png',
          '../../images/003.png',
          '../../images/004.png'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      icons_item: [{
          icon: '../../images/q1.png',
          url: 'rent',
          text: '短租'
      },
      {
          icon: '../../images/q2.png',
          url: 'monthrent',
          text: '月租'
      },
      {
          icon: '../../images/q3.png',
          url: 'deposit',
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
  },
    toDetails:function(){
        wx.navigateTo({
            url: '/pages/prodeatil/prodeatil'
        })
    },
    toList:function(){
        wx.navigateTo({
            url: '/pages/prolist/prolist'
        })
    },
    rent:function(){
        wx.navigateTo({
            url: '/pages/prolist/prolist'
        })
    },
    monthrent: function () {
        wx.navigateTo({
            url: '/pages/prolist/prolist'
        })
    },
    deposit: function () {
        wx.navigateTo({
            url: '/pages/deposit/deposit'
        })
    }
})
