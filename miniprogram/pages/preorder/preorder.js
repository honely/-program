const app = getApp()
Page({
    data: {
        imgUrls: [
            '../../images/001.png',
            '../../images/002.png',
            '../../images/003.png',
            '../../images/004.png'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000
    },
    // 提交订单发起微信支付
    toOrder: function (e) {  //点击输出outer view bindtap
        console.log(app.globalData);
        var that = this
        // wx.request({
        //     url: app.globalData.serverUrl + "/pay.php",
        //     data: { openid: app.globalData.openid },
        //     method: 'POST',
        //     header: {
        //         "content-type": "application/x-www-form-urlencoded"
        //     },
        //     success: function (res) {
        //         console.log(res);
        //         wx.requestPayment({
        //             'timeStamp': res.data.data.timeStamp,
        //             'nonceStr': res.data.data.nonceStr,
        //             'package': res.data.data.package,
        //             'signType': res.data.data.signType,
        //             'paySign': res.data.data.sign,
        //             'success': function (res) {
        //                 console.log(res);
        //             },
        //             'fail': function (res) {
        //                 console.log('fail:' + JSON.stringify(res));
        //             }
        //         })
        //     },
        //     fail: function () {
        //         console.log('服务器请求失败!')
        //     },
        // })
    }
})
