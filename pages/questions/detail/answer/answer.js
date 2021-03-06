// pages/questions/detail/answer/answer.js
var content = ''
const app = getApp()
var id;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    id = options.id;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  contentInput: function (e) {
    content = e.detail.value
  },

  submit: function () {
    //内容不能为空
    if (content.length == 0) {
      wx.showToast({
        title: '回答内容不能为空！',
        icon: 'none'
      });
      return;
    }

    var that = this;
    wx.showLoading({
      title: '请稍后...',
    })
    wx.request({
      url: 'https://wycode.cn/web/api/public/fish/postAnswer',
      method: 'POST',
      data: {
        accessKey: app.globalData.accessKey,
        id: id,
        content: content
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        wx.hideLoading();
        wx.showToast({
          title: '提交成功！',
          icon: 'success'
        });
        that.setData({
          content: ''
        })
        setTimeout(() => { wx.navigateBack({}) }, 1000);
      },
      fail: function (res) {
        wx.showToast({
          title: res.errMsg,
          icon: 'none'
        });
        wx.hideLoading();
      }
    });
  }
})