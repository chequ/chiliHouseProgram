// pages/login/index.js
// import API from '../../utils/api';
const App = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    noLogin: true, //
    isSelect: false, // 是否选中协议
    appcode: '',
    phoneNumber: '',
    openId: '',
    code: '',
    encryptedData: '',
    iv: '',
    name: '',
    icon: '',
    goUrl: '', //登录后要跳转去的地址
    isLogin: App.appId, // appId
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options', options);
    if (options.url && options.url != 'undefined') {
      let params = wx.getStorageSync('params');
      this.setData({
        goUrl:
          options.url + (params
            ? '?buildId=' +
              params.buildId +
              '&name=' +
              params.name +
              '&payStatus=' +
              params.payStatus
            : ''),
      });
    }
    // this.getCode();
    // this.getMallInfo();
  },

  // 关闭登录
  closeLogin() {
    this.setData({
      noLogin: false,
    });
  },
  // 先登录
  login() {
    let that = this;
    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'http://localhost:8110/user/login',
            data: {
              jsCode: res.code,
            },
            method: 'get',
            success: (res) => {
              console.log('成功', res);
              App.openId = res.data.data.openid;
              console.log(that.data.goUrl)
              if (that.data.goUrl) {
                //去个人中心跳转登录
                wx.redirectTo({
                  url: that.data.goUrl,
                  success: (res) => {
                    console.log('登陆后指定跳转页面', that.data.goUrl);
                  },
                });
              } else {
                //正常未登录
                wx.navigateBack({
                  delta: 1,
                });
              }
            },
            err: (err) => {
              console.log(err);
            },
          });
        } else {
          console.log('登录失败！' + res.errMsg);
        }
      },
    });
  },
  //获取用户信息
  getUserProfile(e) {
    // 推荐使用 wx.getUserProfile 获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        App.globalData.userInfo = res;
      },
    });
    console.log(res)
  },
  // 登录点击
  getPhoneNumber: function (e) {
    this.login();
    var that = this;
    if (e.detail.errMsg == 'getPhoneNumber:ok') {
      that.setData({
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv,
      });
      // that.logingr();
      // this.getToken();
    }
  },
  logingr: function () {
    let that = this;
    let datas = {
      jsCode: that.data.code,
      appCode: App.appcode,
      phone: {
        encryptedData: that.data.encryptedData,
        iv: that.data.iv,
      },
      userInfo: {},
    };

    let datastr = JSON.stringify(datas);
    let encryptstr = encryptByDES(datastr);
    this.setData({
      encryptstr: encryptstr,
    });
    API.loginAndInfo(datas).then((res) => {
      if (res.code === 200) {
        that.setData({
          phoneNumber: res.data.phoneNumber,
          openId: res.data.openId,
        });
        wx.setStorageSync('phoneNumber', res.data.phoneNumber);
        App.phone = res.data.phoneNumber;
        wx.setStorageSync('openId', res.data.openId);
        App.openId = res.data.openId;
        that.getToken();
      }
    });
  },
  getToken: function () {
    let that = this;
    let encryptPhone = encryptLong(that.data.phoneNumber);
    // console.log(encryptPhone,'phone加密后')
    // console.log(decrypt(encryptPhone),'phone解密')
    let datas = {
      appCode: App.appcode,
      phone: encryptPhone,
      //   phone: 13533806932,
    };
    let datastr = JSON.stringify(datas);
    let encryptstr = encryptByDES(datastr);
    // console.log(encryptstr,'data加密后')
    // console.log(decryptByDES(encryptstr),'data解密后')
    this.setData({
      encryptstr: encryptstr,
    });
    API.appLogin(datas, {
      port: App.isEncryption ? '' : 9201,
    })
      .then(async (res) => {
        if (res.data.code === 0) {
          wx.setStorageSync('access_token', res.data.data.access_token);
          App.token = res.data.data.access_token;
          wx.setStorageSync('appcode', App.appcode);

          await this.getUerInfo();
          let scene = wx.getStorageSync('scene');
          if (scene) {
            //如果存在就是扫码跳转活动中心未登录过来的
            if (scene.includes('act')) {
              wx.navigateBack({
                delta: 1,
                success: () => {
                  wx.reLaunch({
                    url: '/pages/activityCenter/activityCenter?scene=' + scene,
                    success: () => {
                      setTimeout(() => {
                        wx.removeStorageSync('scene');
                      }, 2000);
                    },
                  });
                },
              });
            } else if (scene.includes('shop')) {
              let id = scene.replace('shop', '');
              let param = {
                shopId: id,
                APPCode: App.appcode,
              };
              API.getShopDetail(param, { isOnline: false }).then((res) => {
                if (res.code === 200) {
                  App.goAR(res.data.data, 'brand', {
                    url: '/v2/shopInfo/listShop',
                  });
                }
              });
            }
          } else {
            if (this.data.goUrl) {
              //去个人中心跳转登录
              wx.redirectTo({
                url: this.data.goUrl,
                success: (res) => {
                  console.log('登陆后指定跳转页面', this.data.goUrl);
                },
              });
            } else {
              //正常未登录
              wx.navigateBack({
                delta: 1,
              });
            }
          }
        }
      })
      .catch((error) => {
        this.$toast(error.message || '登录失败');
      });
  },
  //获取用户信息
  async getUerInfo() {
    let data = {
      appCode: App.appcode,
    };
    let res = await API.getUserInfo(data, {
      port: App.isEncryption ? '' : 9202,
    });
    //   .then((res) => {
    //     if (res.data.code != 0) return;
    //     wx.setStorageSync('userInfo', res.data.data);
    //   });
    if (res.data.code != 0) return;
    wx.setStorageSync('userInfo', res.data.data);
  },

  getCode() {
    let that = this;
    wx.login({
      success(res) {
        console.log('获取code', res);
        if (res.code) {
          //发起网络请求
          that.setData({
            code: res.code,
          });
        } else {
          //console.log('登录失败！' + res.errMsg)
        }
      },
    });
  },
  toyszc() {
    // wx.navigateTo({
    //   url: '../../packageA/pages/yszc/index',
    // });
  },
  tofwxy() {
    // wx.navigateTo({
    //   url: '../../packageA/pages/fuwuxy/index',
    // });
  },
  ystoast() {
    if (!this.data.isSelect) {
      wx.showModal({
        title: '请先同意 服务协议和隐私协议',
        icon: 'none',
        confirmText: '同意',
        success: (res) => {
          console.log(res);
          if (res.confirm) {
            this.selectFunc();
          }
        },
      });
    }
  },
  // 是否选中协议
  selectFunc() {
    this.setData({
      isSelect: !this.data.isSelect,
    });
    if (this.data.isSelect && !this.data.isLogin) {
      this.login();
      // this.getUserProfile();
    }
  },
  //获取首页界面菜单信息
  getMallInfo() {
    let that = this;
    let param = {
      appCode: App.appcode,
    };
    API.homepageMallInfo(param, {
      port: App.isEncryption ? '' : 9202,
    }).then((res) => {
      if (res.code != 200) return;
      that.setData({
        name: res.data.data.mallName || '',
        icon: res.data.data.logo,
      });
    });
  },
});
