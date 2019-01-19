// pages/usercomment/usercomment.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    uploadimg: function () {
        var that = this;
        wx.chooseImage({  //从本地相册选择图片或使用相机拍照
            count: 9, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有

            success: function (res) {
                that.setData({
                    source: res.tempFilePaths
                })
            }
        })
    },
})