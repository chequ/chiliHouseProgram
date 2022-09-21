// index.js
// 获取应用实例
const app = getApp();

Page({
  data: {
    myBuildingData: [],
    buttonColor: {
      houseStatus0: '#F4A460',
      houseStatus1: '#B0C4DE',
      houseStatus2: '#87CEFA',
      houseStatus3: '#AFEEEE',
      houseStatus4: '#7FFFD4',
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
        count: 11545,
        countName: '全部',
        type: 'all',
        status: 0,
      },
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
    originBuildList: [
      {
        buildId: '111',
        buildPreview: '../../assets/images/index/yunzhou.jpg',
        name: '麓湖生态城沄洲二期',
        houseCount: '335',
        buildNo: '4、8、9',
        status: 1,
        statusName: '已选房',
        payStatus: true,
      },
      {
        buildId: '222',
        buildPreview: '../../assets/images/index/wankeParkCity.jpg',
        name: '万科公园城二期',
        houseCount: '454',
        buildNo: '1、5、8、12',
        status: 2,
        statusName: '选房中',
        payStatus: true,
      },
      {
        buildId: '333',
        buildPreview: '../../assets/images/index/nanyang.jpg',
        name: '南阳御龙府',
        houseCount: '224',
        buildNo: '2号楼',
        status: 3,
        statusName: '将选房',
        payStatus: false,
      },
      {
        buildId: '44',
        buildPreview: '../../assets/images/index/yunzhou.jpg',
        name: '山河玖璋',
        houseCount: '335',
        buildNo: '4、8、9',
        status: 1,
        statusName: '已选房',
        payStatus: true,
      },
      {
        buildId: '55',
        buildPreview: '../../assets/images/index/wankeParkCity.jpg',
        name: '源滩麒麟荟',
        houseCount: '454',
        buildNo: '1、5、8、12',
        status: 2,
        statusName: '选房中',
        payStatus: true,
      },
      {
        buildId: '66',
        buildPreview: '../../assets/images/index/nanyang.jpg',
        name: '鑫苑城',
        houseCount: '224',
        buildNo: '2号楼',
        status: 3,
        statusName: '将选房',
        payStatus: false,
      },
    ],
    buildList: [
      {
        buildId: '11',
        buildPreview: '../../assets/images/index/yunzhou.jpg',
        name: '麓湖生态城沄洲二期',
        houseCount: '335',
        buildNo: '4、8、9',
        status: 1,
        statusName: '已选房',
        payStatus: true,
      },
      {
        buildId: '22',
        buildPreview: '../../assets/images/index/wankeParkCity.jpg',
        name: '万科公园城二期',
        houseCount: '454',
        buildNo: '1、5、8、12',
        status: 2,
        statusName: '选房中',
        payStatus: true,
      },
      {
        buildId: '33',
        buildPreview: '../../assets/images/index/nanyang.jpg',
        name: '南阳御龙府',
        houseCount: '224',
        buildNo: '2号楼',
        status: 3,
        statusName: '将选房',
        payStatus: false,
      },
      {
        buildId: '44',
        buildPreview: '../../assets/images/index/yunzhou.jpg',
        name: '山河玖璋',
        houseCount: '335',
        buildNo: '4、8、9',
        status: 1,
        statusName: '已选房',
        payStatus: true,
      },
      {
        buildId: '55',
        buildPreview: '../../assets/images/index/wankeParkCity.jpg',
        name: '源滩麒麟荟',
        houseCount: '454',
        buildNo: '1、5、8、12',
        status: 2,
        statusName: '选房中',
        payStatus: true,
      },
      {
        buildId: '66',
        buildPreview: '../../assets/images/index/nanyang.jpg',
        name: '鑫苑城',
        houseCount: '224',
        buildNo: '2号楼',
        status: 3,
        statusName: '将选房',
        payStatus: false,
      },
    ],
    loading: false,
    showShare: false,
    noMore: false,
    loadingFailed: false,
    pageNo: 1,
    options: [
      { name: '微信', icon: 'wechat', openType: 'share' },
      { name: '复制链接', icon: 'link' },
      { name: '分享海报', icon: 'poster' },
    ],
    adShow: true, // 开屏广告
  },
  onLoad() {
    // app.getAuthorization();
    // this.getMyBuildingData();
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
    if (app.globalData.userInfo) {
      console.log(111);
    } else {
      wx.navigateTo({ url: 'pages/login/index', events: { url: '..' } });
    }
  },
  getCountTypeList(e) {
    let temp;
    if (e.target.dataset.item.status === 0) {
      temp = this.data.originBuildList;
    } else if (e.target.dataset.item.status !== 4) {
      temp = this.data.originBuildList.filter((el) => {
        if (el.status === e.target.dataset.item.status) {
          return el;
        }
      });
    } else {
      temp = this.data.originBuildList.filter((el) => {
        if (el.payStatus) {
          return el;
        }
      });
    }
    this.setData({ buildList: temp });
  },
  // 剩余房源
  getRemainingList(event) {
    if (app.openId) {
      wx.navigateTo({
        url:
          '/pages/remaining/index?buildId=' +
          event.target.dataset.item.buildId +
          '&name=' +
          event.target.dataset.item.name +
          '&payStatus=' +
          event.target.dataset.item.payStatus,
      });
    } else {
      wx.setStorageSync('params',event.target.dataset.item)
      wx.navigateTo({
        url: '/pages/login/index?url=/pages/remaining/index'
      });
    }

    if (app.globalData.userInfo) {
      // wx.navigateTo({
      //   url:
      //     '/pages/buildingList/buildingList?buildId=' +
      //     event.target.dataset.item.buildId +
      //     '&name=' +
      //     event.target.dataset.item.name +
      //     '&payStatus=' +
      //     event.target.dataset.item.payStatus,
      // });
    }
  },
  getBuildingList(event) {
    wx.navigateTo({
      url:
        '/pages/buildingList/buildingList?buildId=' +
        event.target.dataset.item.buildId +
        '&name=' +
        event.target.dataset.item.name +
        '&payStatus=' +
        event.target.dataset.item.payStatus,
    });
    if (app.globalData.userInfo) {
      // wx.navigateTo({
      //   url:
      //     '/pages/buildingList/buildingList?buildId=' +
      //     event.target.dataset.item.buildId +
      //     '&name=' +
      //     event.target.dataset.item.name +
      //     '&payStatus=' +
      //     event.target.dataset.item.payStatus,
      // });
    }
  },
  //到达底部
  scrollToLower: function (e) {
    if (!this.data.loading && this.data.pageNo <= 5) {
      this.setData({
        loading: true,
        loadingFailed: false,
        pageNo: this.data.pageNo + 1,
      });
      this.getData(true);
    }
  },
  //请求数据
  getData(isPage) {
    let params = {
      pageNum: this.data.pageNo,
      pageSize: 30,
    };
    //请求
    setTimeout(() => {
      let round = Math.round(Math.random());
      let addData = round
        ? [
            {
              buildId: '441',
              buildPreview: '../../assets/images/index/yunzhou.jpg',
              name: '山河玖璋',
              houseCount: '335',
              buildNo: '4、8、9',
              status: 1,
              statusName: '已选房',
              payStatus: true,
            },
            {
              buildId: '551',
              buildPreview: '../../assets/images/index/wankeParkCity.jpg',
              name: '源滩麒麟荟',
              houseCount: '454',
              buildNo: '1、5、8、12',
              status: 2,
              statusName: '选房中',
              payStatus: true,
            },
            {
              buildId: '661',
              buildPreview: '../../assets/images/index/nanyang.jpg',
              name: '鑫苑城',
              houseCount: '224',
              buildNo: '2号楼',
              status: 3,
              statusName: '将选房',
              payStatus: false,
            },
            {
              buildId: '442',
              buildPreview: '../../assets/images/index/yunzhou.jpg',
              name: '山河玖璋',
              houseCount: '335',
              buildNo: '4、8、9',
              status: 1,
              statusName: '已选房',
              payStatus: true,
            },
            {
              buildId: '553',
              buildPreview: '../../assets/images/index/wankeParkCity.jpg',
              name: '源滩麒麟荟',
              houseCount: '454',
              buildNo: '1、5、8、12',
              status: 2,
              statusName: '选房中',
              payStatus: true,
            },
            {
              buildId: '662',
              buildPreview: '../../assets/images/index/nanyang.jpg',
              name: '鑫苑城',
              houseCount: '224',
              buildNo: '2号楼',
              status: 3,
              statusName: '将选房',
              payStatus: false,
            },
          ]
        : [];
      this.setData({
        loading: false,
      });
      if (!round) {
        //返回失败
        this.setData({
          loadingFailed: true,
        });
        return false;
      }
      if (round) {
        if (isPage) {
          //下一页的数据拼接在原有数据后面
          this.setData({
            buildList: this.data.buildList.concat(addData),
          });
        } else {
          //第一页数据直接赋值
          this.setData({
            buildList: addData,
          });
        }
        //如果返回的数据为空，那么就没有下一页了
        if (this.data.pageNo > 5) {
          this.setData({
            noMore: true,
            loadingFailed: false,
          });
        }
      }
      // } else {
      //   //返回失败
      //   this.setData({
      //     loadingFailed: true,
      //   });
      // }
    }, 1000);
  },
  goSearch() {
    wx.navigateTo({
      url: '/pages/search/search',
    });
  },
  onShare() {
    this.setData({ showShare: true });
  },

  onClose() {
    this.setData({ showShare: false });
  },

  onSelect(e) {
    Toast(e.detail.name);
    this.onClose();
  },
  // 关闭开屏广告
  onAdClose() {
    this.setData({
      adShow: false,
    });
  },
});
