// pages/baike/item/baikeDetail.js
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
    wx.setNavigationBarTitle({
      title: options.title
    });

    var WxParse = require('../../../libs/wxParse/wxParse.js');

    var that = this;
    wx.showLoading({
      title: '请稍后...',
    });
    wx.request({
      url: 'https://wycode.cn/upload/fish/'+options.detail,
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        var article = res.data;
        WxParse.wxParse('article', 'md', article, that,12);
      },
      fail: function(res) {
        wx.showToast({
          title: res,
          icon: 'none'
        });
      },
      complete: function(res) {
        wx.hideLoading();
      },
    })

    //增加阅读数
    wx.request({
      url: 'https://wycode.cn/web/api/public/fish/addReadCount',
      data: { 'id': options.id},
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

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

  }
})