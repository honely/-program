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
        duration: 1000,
        markers: [{
            iconPath: '/images/marker.png',
            id: 0,
            latitude: 34.224702,
            longitude: 108.886737,
            width: 30,
            height: 30
        }],
    }, 
    onLoad: function (options) {
        var h_id = options.h_id;
        var that = this;
        // 房源详情
        wx.request({
            url: app.globalData.baseUrl + "/api/banner/houseDetail?h_id=" + h_id,
            success: function (res) {
                console.log(res);
                that.setData({
                    house: res.data.data
                })
            }
        })

    },
    // 提交订单
    toOrder: function (event) {  //点击输出outer view bindtap
        console.log(event);
        console.log(event.currentTarget.id);
        wx.navigateTo({
            url: '/pages/preorder/preorder'
        })
    },
    // 租客评论
    comment: function (event) {  //点击输出outer view bindtap
        wx.navigateTo({
            url: '/pages/comment/comment'
        })
    },
    // 房源介绍
    moredesc: function (event) {  //点击输出outer view bindtap
        wx.navigateTo({
            url: '/pages/moredesc/moredesc'
        })
    },
    // 房屋设施
    moreconfig: function (event) {  //点击输出outer view bindtap
        wx.navigateTo({
            url: '/pages/moreconfig/moreconfig'
        })
    }
})
