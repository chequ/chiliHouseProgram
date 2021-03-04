// home.js
const app = getApp()

Page({
  data: {
    name: '',
    photo: '',
    userList: [
      {
        title:'关于我们',
        id:'aboutUs'
      },
      {
        title:'分享好友',
        id:'share'
      }
    ]
  },
  onLoad() {
    app.getAuthorization();
    if(app.globalData.userInfo){
      console.log(app.globalData.userInfo.nickName,app.globalData.userInfo.avatarUrl)
      this.setData({
        name: app.globalData.userInfo.nickName,
        photo: app.globalData.userInfo.avatarUrl
      })
    }
  }
})
