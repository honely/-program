// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isSign: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
    onLoad: function() {
      // 获取用户信息
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              
              success: res => {
                app.globalData.userInfo = res.userInfo;
                console.log(app.globalData.userInfo);
                this.setData({
                  avatarUrl: res.userInfo.avatarUrl,
                  userInfo: res.userInfo,
                  
                })
              }
            })
          }
        }
      })
    },
    onGetUserInfo: function (e) {
        if (!this.logged && e.detail.userInfo) {
        this.setData({
            logged: true,
            avatarUrl: e.detail.userInfo.avatarUrl,
            userInfo: e.detail.userInfo
        })
        }
    },
    sign:function(e){
        wx.showToast({
            title: '签到成功！',
            icon: 'success',
            duration: 2000,
        });
        this.setData({
            isSign:0
        })
    }, 
    signed:function(){
        wx.showToast({
            title: '您已签到！',
            icon: 'success',
            duration: 2000
        });
        this.setData({
            isSign: 1
        })
    }
})