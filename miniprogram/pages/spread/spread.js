// pages/spread/spread.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imageHeight: wx.getSystemInfoSync().windowHeight
  },
//   长按图片保存至
    baocun: function (e) {
        wx.showModal({
            title: '提示',
            content: '确定要保存这张图片吗？',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                    wx.getImageInfo({
                        src: 'http://blog.aiweimeng.top/usr/uploads/2019/01/2380830870.png',
                        success: function (res) {
                            console.log(res);
                            var path = res.path;
                            wx.saveImageToPhotosAlbum({
                                filePath: path,
                                success: function (res) {
                                    console.log('图片已保存');
                                },
                                fail: function (res) {
                                    console.log('保存失败');
                                }
                            })
                        }
                    });
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
})