// pages/exchange/exchange.js
Page({
    /**
     * 页面的初始数据
     */
    data: {

    },
    toShop: function (options) {
        wx.navigateTo({
            url: '/pages/detail/detail'
        })
    },
    exchangeLog: function (options) {
        wx.navigateTo({
            url: '/pages/detail/detail'
        })
    }
})