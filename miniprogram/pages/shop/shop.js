// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
    data: {
        inputShowed: false,
        inputVal: "",
       
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
    },
    toDetail: function (event) {  //点击输出outer view bindtap
        console.log(event);
        console.log(event.currentTarget.id);
        wx.navigateTo({
            url: '/pages/detail/detail'
        })
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
    }
})