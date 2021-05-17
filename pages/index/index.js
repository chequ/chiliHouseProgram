// index.js
// 获取应用实例
const app = getApp();

Page({
  data: {
    myBuildingData: [],
    buttonColor: {
      houseStatus1: '#cccccc',
      houseStatus2: '#87CEFA',
      houseStatus3: '#FFA500',
      houseStatus4: 'green',
    },
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
      },
    ],
    countData: [
      {
        count: 10621,
        countName: '已选房',
        type: 'checked',
        status: 1,
      },
      {
        count: 5,
        countName: '选房中',
        type: 'isChecking',
        status: 2,
      },
      {
        count: 43,
        countName: '将选房',
        type: 'goCheck',
        status: 3,
      },
      {
        count: 23,
        countName: '已激活',
        type: 'myBuyCheck',
        status: 4,
      },
    ],
    buildList: [
      {
        buildId:'11',
        buildPreview: '../../assets/images/index/yunzhou.jpg',
        name: '麓湖生态城沄洲二期',
        houseCount: '335',
        buildNo: '4、8、9',
        status: 1,
        statusName: '已选房',
        payStatus: true,
      },
      {
        buildId:'22',
        buildPreview: '../../assets/images/index/wankeParkCity.jpg',
        name: '万科公园城二期',
        houseCount: '454',
        buildNo: '1、5、8、12',
        status: 2,
        statusName: '选房中',
        payStatus: true,
      },
      {
        buildId:'33',
        buildPreview: '../../assets/images/index/nanyang.jpg',
        name: '南阳御龙府',
        houseCount: '224',
        buildNo: '2号楼',
        status: 3,
        statusName: '将选房',
        payStatus: false,
      },
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
  getCountTypeList(e) {
    let temp = this.data.buildList.map(el => {
      el.status = e.target.dataset.item.status;
      el.statusName = e.target.dataset.item.countName;
      return el
    });
    this.setData({ buildList: temp });
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
});
