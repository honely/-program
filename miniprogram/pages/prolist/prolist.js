// pages/prolist/prolist.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //搜索框
        inputShowed: false,
        inputVal: "",
    },
    onLoad: function (options) {
        var type = options.type;
        var that = this;
        if (type == 1){
            wx.setNavigationBarTitle({
                title: '热门房源'
            })
        } else if (type == 2){
            wx.setNavigationBarTitle({
                title: '短租列表'
            })
        } else if (type == 3){
            wx.setNavigationBarTitle({
                title: '月租列表'
            })
        }
        // 房源列表
        wx.request({
            url: app.globalData.baseUrl + "/api/banner/houseList?type=" + type,
            success: function (res) {
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
    toDetails: function(){
        wx.navigateTo({
            url: '/pages/prodeatil/prodeatil'
        })
    }
})