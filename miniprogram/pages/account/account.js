// pages/account/account.js
Page({

/**
 * 页面的初始数据
 */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    // 发起提现
    withdraw:function(){
        wx.navigateTo({
            url: '/pages/withdraw/withdraw'
        })
    }
    // 押金充值
    , paymoney:function(){
        wx.navigateTo({
            url: '/pages/paymoney/paymoney'
        })
    }
})