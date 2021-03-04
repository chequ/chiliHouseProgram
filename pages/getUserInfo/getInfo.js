// pages/getUserInfo/getInfo.js
const app = getApp()

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
    // let that = this;
    // wx.getSetting({
    //   success(res){
    //     if(!res.authSetting['scope.userInfo']){
    //       wx.authorize({
    //         scope: 'scope.userInfo',
    //         success(){
    //           console.log(11)
    //           wx.getUserInfo({
    //             success(){
    //               wx.switchTab({
    //                 url: '/pages/index/index'
    //               })
    //             },
    //             fail(){
    //               that.setData({
    //                 isAuthorization: true
    //               })
    //             }
    //           })  
    //         }
    //       })
    //     }
    //    },
    //   fail(){
    //     that.setData({
    //       isAuthorization: true
    //     })
    //   }
    // })
  },

  bindGetUserInfo(e){
    if(e.detail.userInfo){
      app.globalData.userInfo = e.detail
      wx.navigateBack()
    }else{
      console.log('拒绝')
    }
  }
})