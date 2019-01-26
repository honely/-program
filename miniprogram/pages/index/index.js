//index.js
const app = getApp()

Page({
  data: {
    //搜索框
    inputShowed: false,
    inputVal: "",
    imgUrls:[{
            ba_img: '../../images/q1.png',
            ba_title: 'rent'
        },
        {
            ba_img: '../../images/q1.png',
            ba_title: 'rent'
        },
        {
            ba_img: '../../images/q1.png',
            ba_title: 'rent'
        }
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
    onLoad: function (options) {
        var that = this;
        //banner图
        wx.request({
            url: app.globalData.baseUrl+"/api/banner/miniBanner",
            success: function (res) {
                console.log(res.data.data);
                that.setData({
                    imgUrls: res.data.data
                })
            }
        }),
        // 首页热门房源
        wx.request({
        url: app.globalData.baseUrl + "/api/banner/indexHouse",
            success: function (res) {
                console.log(res.data.data);
                that.setData({
                    houseInfo: res.data.data
                })
            }
        })
            
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
    // 热门房源列表
    toList:function(){
        wx.navigateTo({
            url: '/pages/prolist/prolist?type=1'
        })
    },
    // 短租房源列表
    rent:function(){
        wx.navigateTo({
            url: '/pages/prolist/prolist?type=2'
        })
    },
    // 月租房源列表
    monthrent: function () {
        wx.navigateTo({
            url: '/pages/prolist/prolist?type=3'
        })
    },
    deposit: function () {
        wx.navigateTo({
            url: '/pages/deposit/deposit'
        })
    }
})
