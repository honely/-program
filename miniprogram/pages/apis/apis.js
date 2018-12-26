// pages/apis/apis.js
Page({

  /**
   * 页面的初始数据
   */
    onPullDownRefresh() {
        wx.stopPullDownRefresh()
    },
  data: {

  },
    sysinfo: function () {
        wx.getSystemInfo({
            success(res) {
                console.log(res.model)
                console.log(res.pixelRatio)
                console.log(res.windowWidth)
                console.log(res.windowHeight)
                console.log(res.language)
                console.log(res.version)
                console.log(res.platform)
            }
        })
    },
    actionSheet: function(){
        wx.showActionSheet({
            itemList: ['A', 'B', 'C'],
            success(res) {
                console.log(res.tapIndex)
            },
            fail(res) {
                console.log(res.errMsg)
            }
        })
    },
    hideLoading: function(){
        wx.showLoading({
            title: '加载中',
        })

        setTimeout(function () {
            wx.hideLoading()
        }, 2000)
    }
    , showToast:function(){
        wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
        })
    }, showModal:function(){
        wx.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            success(res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    }, report:function(){
        wx.reportAnalytics('purchase', {
            price: 120,
            color: 'red'
        })
    }
})