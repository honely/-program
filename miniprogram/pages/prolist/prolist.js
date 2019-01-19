// pages/prolist/prolist.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //搜索框
        inputShowed: false,
        inputVal: "",
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