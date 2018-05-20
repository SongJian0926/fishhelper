//app.js
App({
  onLaunch: function () {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    this.checkLogin();
  },

  globalData: {
    accessKey: ''
  },

  checkLogin: function () {
    var that = this;
    let accessKey = wx.getStorageSync('accessKey');
    if (accessKey) {
      // 检查 session_key 是否过期
      wx.checkSession({
        // session_key 有效(未过期)
        success: function () {
          // 业务逻辑处理
          that.globalData.accessKey = accessKey;
          console.log(accessKey);
          wx.hideLoading()
        },

        // session_key 过期
        fail: function () {
          // session_key过期，重新登录
          that.doLogin();
        }
      });
    } else {
      // 无accessKey，作为首次登录
      that.doLogin();
    }
  },

  doLogin: function () {
    var that = this;
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          wx.request({
            url: 'https://wycode.cn/web/api/public/fish/wx/getSession',
            data: { 'jsCode': res.code },
            success: function (res) {
              if (res.statusCode == 200 && res.data.success) {
                let key = res.data.data;
                wx.setStorage({
                  key: "accessKey",
                  data: key
                });
                that.globalData.accessKey = key;
                console.log('save-->' + key);
                wx.hideLoading()
              }
            },
            fail: function (res) { },
            complete: function (res) { },
          })
        } else {
          wx.showToast({
            title: res.errMsg,
            icon: 'none'
          })
        }
      }
    })
  }

})