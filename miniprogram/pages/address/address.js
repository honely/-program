// pages/address/address.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    newAdd: function () {
        wx.navigateTo({
            url: '/pages/newAddress/newAddress'
        })
    },
    editAdd: function () {
        wx.navigateTo({
            url: '/pages/eidtAddress/eidtAddress'
        })
    }
})