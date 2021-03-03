// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    show: false,
    activeNames: ['1'],
    checked: [],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad() {

  },
  closePopup() {
    this.setData({
      show: false
    })
  },
  showPopup() {
    this.setData({
      show: true
    })
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },
  getHouseList() {
    this.closePopup()
  }
})
