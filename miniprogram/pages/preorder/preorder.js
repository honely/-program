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
    toOrder: function (event) {  //点击输出outer view bindtap
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
