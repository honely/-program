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
    withdraw:function(){
        wx.navigateTo({
            url: '/pages/withdraw/withdraw'
        })
    }
    , withlogs:function(){
        wx.navigateTo({
            url: '/pages/withlogs/withlogs'
        })
    }
})