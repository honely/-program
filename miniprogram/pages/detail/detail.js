// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    exchange: function () {
        wx.showModal({
            title: '一键兑换',
            content: '确认用500积分兑换该礼品吗？',
            confirmText: "确认兑换",
            cancelText: "我再想想",
            success: function (res) {
                console.log(res);
                if (res.confirm) {
                    console.log('确认兑换')
                } else {
                    console.log('我再想想')
                }
            }
        });
    }
})