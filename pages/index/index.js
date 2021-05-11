// index.js
// 获取应用实例
const app = getApp();

Page({
  data: {
    myBuildingData: [],
    adList: [
      {
        name: 'ad1',
        src: '../../assets/images/index/ad1.jpg',
      },
      {
        name: 'ad2',
        src: '../../assets/images/index/ad2.webp',
      },
      {
        name: 'ad3',
        src: '../../assets/images/index/ad3.webp',
      }
    ],
  },
  onLoad() {
    app.getAuthorization();
    this.getMyBuildingData();
    this.setData({
      myBuildingData: [
        {
          name: '山河峯荟',
          buildId: '2020001',
        },
        {
          name: '南阳长治御龙府',
          buildId: '2020002',
        },
        {
          name: '招商时代公园',
          buildId: '2020101',
        },
        {
          name: '未来公园城',
          buildId: '2020102',
        },
        {
          name: '招商时代公园',
          buildId: '2020101',
        },
        {
          name: '未来公园城',
          buildId: '2020102',
        },
      ],
    });
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
  getMyBuildingData() {
    wx.request({
      url: 'http://localhost:5050/login',
      data: {
        name: 'lin',
        pwd: 'no',
      },
      method: 'POST',
      success: (res) => {
        console.log('成功', res);
      },
      err: (err) => {
        console.log(err);
      },
    });
  },
  getBuildingList(event) {
    if (app.globalData.userInfo) {
      wx.navigateTo({
        url:
          '/pages/buildingList/buildingList?buildId=' +
          event.currentTarget.dataset.buildid +
          '&name=' +
          event.currentTarget.dataset.name,
      });
    }
  },
});
