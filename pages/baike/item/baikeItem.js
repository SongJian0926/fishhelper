// pages/baike/item/baikeItem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    items: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.type,
    });
    this.setData({ title: options.type })

    //拉取数据
    wx.showLoading({
      title: '请稍后...',
    });
    var that = this;
    wx.request({
      url: 'https://wycode.cn/web/api/public/fish/getBaike',
      data: { 'type': this.data.title },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) { 
        if (res.data.success) {
          that.setData({items:res.data.data});
        }
      },
      fail: function (res) {
        wx.showToast({
          title: res,
          icon: 'none'
        });
       },
      complete: function (res) { 
        wx.hideLoading();
      },
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

  },


  itemClick: function (e) {
    var data = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '/pages/baike/item/baikeDetail?id=' + data.id +
      '&title=' + data.title +
      '&detail=' + data.detail
    })
  }
})