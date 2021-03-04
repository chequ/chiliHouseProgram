// pages/addBuilding/addBuilding.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sms: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  addBuilding(){
    app.getAuthorization();
    if(app.globalData.userInfo){
      console.log('111')
    }
  }
})