// pages/paymoney/paymoney.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    //微信支付支付押金，押金数额为后台设定
    payMoney: function () {
        wx.requestPayment({
            timeStamp: '',
            nonceStr: '',
            package: '',
            signType: 'MD5',
            paySign: '',
            success(res) { },
            fail(res) { }
        })
    }
})