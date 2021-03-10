// pages/addBuilding/addBuilding.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sms: '',
    show:false,
    myBuilding:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  addBuilding(){
    app.getAuthorization();
    if(app.globalData.userInfo){
      this.setData({
        myBuilding:'天府里',
        show:true
      })
    }
  },
  onConfirm() {
    this.setData({ show: false });
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})