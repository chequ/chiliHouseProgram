// app.js
import { baseUrl, _get, _post, _put, _delete } from './utils/request';
App({
  phone: '',
  appId: '',
  openId: '',
  onLaunch() {
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || [];
    // logs.unshift(Date.now());
    // wx.setStorageSync('logs', logs);
    this.token = wx.getStorageSync('access_token') || '';
    this.phone = wx.getStorageSync('phoneNumber') || '';
    // 获取用户信息
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserProfile({
            success: (res) => {
              console.log(111);
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            },
          });
        }
      },
    });
  },
  globalData: {
    userInfo: null,
  },
  getAuthorization() {
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          // wx.navigateTo({
          //   url: '/pages/getUserInfo/getInfo',
          // });
        }
      },
    });
  },
  get(data) {
    return _get(baseUrl, data);
  },
  post(data) {
    return _post(baseUrl, data);
  },
  put(data) {
    return _put(baseUrl, data);
  },
  delete(data) {
    return _delete(baseUrl, data);
  },
});
