// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    myBuildingData:[]
  },
  onLoad() {
    app.getAuthorization();
    this.setData({
      myBuildingData: [
        {"name": '山河峯荟',"buildId": '2020001'},
        {"name": '南阳长治御龙府',"buildId": '2020002'},
        {"name": '招商时代公园',"buildId": '2020101'},
        {"name": '未来公园城',"buildId": '2020102'},
        {"name": '招商时代公园',"buildId": '2020101'},
        {"name": '未来公园城',"buildId": '2020102'}
      ]
    });
  },
  getAuthorization(){
    wx.getSetting({
      success(res){
        if(!res.authSetting['scope.userInfo']){
          wx.navigateTo({
            url: '/pages/getUserInfo/getInfo',
          })
        }
      }
    })
  },
  addBuilding() {
    wx.navigateTo({
      url: '/pages/addBuilding/addBuilding'
    })
  },
  getBuildingList(event) {
    if(app.globalData.userInfo){
      wx.navigateTo({
        url: '/pages/buildingList/buildingList?buildId='+event.currentTarget.dataset.buildid+'&name='+event.currentTarget.dataset.name
      })
    }
  }
})
