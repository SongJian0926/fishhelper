// pages/questions/questions.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[]
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
    this.getQuestions();
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

  onAddQuestionClicked:function(){
    wx.navigateTo({
      url: '/pages/questions/add/add-question'
    })
  },

  getQuestions:function(){
    wx.request({
      url: 'https://wycode.cn/web/api/public/fish/getQuestions',
      success:(res)=>{
        if (res.data.success) {
          this.setData({ items: res.data.data });
        }
      }
    })
  },

  itemClick:function(e){
    console.log(e.currentTarget.dataset.item);
    let question = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '/pages/questions/detail/detail?id='+question.id
    })
  }
})