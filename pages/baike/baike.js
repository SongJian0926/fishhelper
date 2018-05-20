// pages/baike/baike.js
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

  clickJinyu:function(){
    wx.navigateTo({
      url: '/pages/baike/item/baikeItem?type=金鱼'
      });
  },
  clickJinli: function () {
    wx.navigateTo({
      url: '/pages/baike/item/baikeItem?type=锦鲤'
    });
  },
  clickLongyu: function () {
    wx.navigateTo({
      url: '/pages/baike/item/baikeItem?type=龙鱼'
    });
  },
  clickDengyu: function () {
    wx.navigateTo({
      url: '/pages/baike/item/baikeItem?type=灯鱼'
    });
  },
  clickShenxianyu: function () {
    wx.navigateTo({
      url: '/pages/baike/item/baikeItem?type=神仙鱼'
    });
  },
  clickSanhucidiao: function () {
    wx.navigateTo({
      url: '/pages/baike/item/baikeItem?type=三湖慈鲷'
    });
  },
  clickHaishuiyu: function () {
    wx.navigateTo({
      url: '/pages/baike/item/baikeItem?type=海水鱼'
    });
  },
  clickShanhu: function () {
    wx.navigateTo({
      url: '/pages/baike/item/baikeItem?type=珊瑚'
    });
  },
  clickWugui: function () {
    wx.navigateTo({
      url: '/pages/baike/item/baikeItem?type=乌龟'
    });
  },
  clickShebei: function () {
    wx.navigateTo({
      url: '/pages/baike/item/baikeItem?type=设备'
    });
  },
  clickYubing: function () {
    wx.navigateTo({
      url: '/pages/baike/item/baikeItem?type=鱼病'
    });
  },
  clickShuizhi: function () {
    wx.navigateTo({
      url: '/pages/baike/item/baikeItem?type=水质'
    });
  },
  clickShuicao: function () {
    wx.navigateTo({
      url: '/pages/baike/item/baikeItem?type=水草'
    });
  },
  clickHuyu: function () {
    wx.navigateTo({
      url: '/pages/baike/item/baikeItem?type=虎鱼'
    });
  },
  clickKongque: function () {
    wx.navigateTo({
      url: '/pages/baike/item/baikeItem?type=孔雀鱼'
    });
  },
  clickYingwu: function () {
    wx.navigateTo({
      url: '/pages/baike/item/baikeItem?type=鹦鹉鱼'
    });
  },
  clickHongyu: function () {
    wx.navigateTo({
      url: '/pages/baike/item/baikeItem?type=淡水魟鱼'
    });
  },
})