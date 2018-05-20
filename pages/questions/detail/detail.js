// pages/questions/detail/detail.js
var id;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    question:{},
    answers:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    id = options.id
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
    this.getQuestion(id)
    
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

  getQuestion:function(id){
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    wx.request({
      url: 'https://wycode.cn/web/api/public/fish/getQuestion',
      data: { id: id },
      success: (res)=> {
        console.log(res);
        if (res.statusCode == 200 && res.data.success) {
          this.setData({ question: res.data.data })
          this.getQuestionAnswers(id)
        }
      },
      fail: (res)=> {
        wx.showToast({
          title: res,
          icon: 'none'
        })
      }
    })
    
  },

  getQuestionAnswers:function(id){
    wx.request({
      url: 'https://wycode.cn/web/api/public/fish/getQuestionAnswers',
      data: { id: id },
      success: (res) => {
        console.log(res);
        if (res.statusCode == 200 && res.data.success) {
          this.setData({ answers: res.data.data })
        }
      },
      fail: (res) => {
        wx.showToast({
          title: res,
          icon: 'none'
        })
      },
      complete:()=>{
        wx.hideLoading();
      }
    })
  },

  onTopClicked:function(){
    wx.request({
      url: 'https://wycode.cn/web/api/public/fish/questionUp',
      data: { id: id },
      success: (res) => {
        console.log(res);
        if (res.statusCode == 200 && res.data.success) {
          wx.showToast({
            title: '置顶成功！',
            icon: 'success'
          })
          this.getQuestion(id)
        }else{
          wx.showToast({
            title: res.data.error,
            icon: 'none'
          })
        }
      },
      fail: (res) => {
        wx.showToast({
          title: res,
          icon: 'none'
        })
      }
    })
  },


  getUserInfo: function (e) {

    if (e.detail.userInfo != null) {

      this.uploadUserInfo(e.detail.userInfo);
    }

    this.onAnswerClicked();
  },


  uploadUserInfo: function (userInfo) {
    userInfo.accessKey = app.globalData.accessKey
    console.log(userInfo)

    wx.request({
      url: 'https://wycode.cn/web/api/public/fish/updateUserInfo',
      method: 'POST',
      data: userInfo,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res);
      }
    });
  },

  onAnswerClicked:function(){
    wx.navigateTo({
      url: '/pages/questions/detail/answer/answer?id=' + id
    })
  }
})