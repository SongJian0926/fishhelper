// pages/questions/add/add-question.js
var title=''
var description=''
const app = getApp()
var imageURL = ''
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionImage: '/assets/icons/add.png',
    imageProgress: 0,
    isUploading: false
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

  titleInput:function(e){
    title = e.detail.value
  },

  descriptionInput: function (e) {
    description = e.detail.value
  },

  chooseImage:function(){
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      success: (res)=> {
        console.log(res)
        this.setData({ questionImage: res.tempFilePaths[0] })
        this.uploadImage(res.tempFilePaths);
      }
    })
  },


  uploadImage: function (paths) {
    this.setData({ isUploading: true })
    let that = this
    imageURL = ''
    const uploadTask = wx.uploadFile({
      url: 'https://wycode.cn/web/api/public/upload',
      filePath: paths[0],
      name: 'file',
      success: function (res) {
        let data = JSON.parse(res.data);
        console.log(data)
        if (res.statusCode == 200 && data.success) {
          imageURL = data.data
        }
      },
      fail: function (res) {
        wx.showToast({
          title: res.errMsg,
          icon: 'none'
        });
      },
      complete: function (res) {
        that.setData({ isUploading: false })
      },
    })

    uploadTask.onProgressUpdate((res) => {
      this.setData({ imageProgress: res.progress })
    })
  },

  getUserInfo:function(e){
    console.log(e)
    
    if(e.detail.userInfo!=null){
      
      this.uploadUserInfo(e.detail.userInfo);
    }

    if (title.length==0){
      wx.showToast({
        title: '问题标题不能为空！',
        icon: 'none'
      });
      return;
    }

    if (description.length == 0) {
      wx.showToast({
        title: '问题描述不能为空！',
        icon: 'none'
      });
      return;
    }

    this.postQuestion();
  },


  uploadUserInfo:function(userInfo){
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

  postQuestion:function(){
    var that = this;
    wx.showLoading({
      title: '请稍后...',
    })
    wx.request({
      url: 'https://wycode.cn/web/api/public/fish/addQuestion',
      method: 'POST',
      data: {
        content: description,
        title: title,
        accessKey: app.globalData.accessKey,
        images: imageURL
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res);
        if (res.statusCode == 200 && res.data.success) {
          wx.hideLoading();
          wx.showToast({
            title: '提交成功！',
            icon: 'success'
          });
          setTimeout(() => { 
            imageURL=''
            wx.navigateBack({}) }, 1000);
        }

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