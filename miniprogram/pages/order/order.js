var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        tabs: ["待付款", "待入住", "已完成"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    // 去付钱，跳转到预付订单页面
    toPreOrder: function (e) {
        wx.navigateTo({
            url: '/pages/preorder/preorder'
        })
    },
    // 去入住，凭订单号。身份证号码，或者手机号去后台或者另外一个端进行核销
    toVerify: function (e) {
        wx.navigateTo({
            url: '/pages/verify/verify'
        })
    },
    // 去评价，跳转到预付订单页面
    toComment: function (e) {
        wx.navigateTo({
            url: '/pages/usercomment/usercomment'
        })
    },
});