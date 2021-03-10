// home.js
const app = getApp()

Page({
  data: {
    show: false,
    name: '',
    photo: '',
    userList: [
      {
        title:'关于我们',
        id:'aboutUs',
        url:'/pages/aboutUs/aboutUs'
      }
      // {
      //   title:'分享好友',
      //   id:'share'
      // }
    ]
  },
  onLoad() {
    app.getAuthorization();
    if(app.globalData.userInfo){
      console.log(app.globalData.userInfo.nickName,app.globalData.userInfo.avatarUrl)
      this.setData({
        name: app.globalData.userInfo.nickName,
        photo: app.globalData.userInfo.avatarUrl,
        show: true
      })
    }
  },
  go(e) {
    wx.navigateTo({
      url: e.target.dataset.url
    })
  }
})
