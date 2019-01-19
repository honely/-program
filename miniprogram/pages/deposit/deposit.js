// pages/deposit/deposit.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        countries: ["西安", "成都", "重庆", "南京", "杭州"],
        countryIndex: 0,
    },
     bindCountryChange: function (e) {
        console.log('picker country 发生选择改变，携带值为', e.detail.value);

        this.setData({
            countryIndex: e.detail.value
        })
    }
})