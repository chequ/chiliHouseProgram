// index.js
// 获取应用实例
const app = getApp();

Page({
  data: {
    value: '',
    timer: null,
    buttonColor: {
      houseStatus1: '#cccccc',
      houseStatus2: '#87CEFA',
      houseStatus3: '#FFA500',
      houseStatus4: 'green',
    },
    adList: '../../assets/images/index/ad1.jpg',
    buildList: [ ],
    searchResult: false
  },
  onLoad() {
    app.getAuthorization();
  },
  getAuthorization() {
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          wx.navigateTo({
            url: '/pages/getUserInfo/getInfo',
          });
        }
      },
    });
  },
  addBuilding() {
    wx.navigateTo({
      url: '/pages/addBuilding/addBuilding',
    });
  },
  getBuildingList(event) {
    if (app.globalData.userInfo) {
      wx.navigateTo({
        url:
          '/pages/buildingList/buildingList?buildId=' +
          event.target.dataset.item.buildid +
          '&name=' +
          event.target.dataset.item.name,
      });
    }
  },
  onSearch() {
    this.timer = setTimeout(() => {
      this.setData({searchResult: true})
      if(this.data.value){
        this.setData({
          buildList: [{
            buildId:'11',
            buildPreview: '../../assets/images/index/yunzhou.jpg',
            name: '麓湖生态城沄洲二期',
            houseCount: '335',
            buildNo: '4、8、9',
            status: 1,
            statusName: '已选房',
            payStatus: true,
          }],
        })
      }
    }, 300);
  },
  onHide () {
    clearTimeout(this.timer)
    this.timer = null
  },
  onCancel() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
});
