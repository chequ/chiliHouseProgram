var app = getApp();
var util = require('../../utils/util.js');

var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
   isFree: '￥1.00', //默认付费人民币一元
   is_free: 0,
   ischange:0,
   quesq: '2222',// 页面内容设置
   famImg:null,//名人头像
   famName:null,//名人姓名
   userInfo: {},//用户信息
   hiddenToast: true,
   answerList: [
    {
      img: 'https://img.zcool.cn/community/01a2a35906dec9a801214550412547.jpg@1280w_1l_2o_100sh.jpg',
      id: 1,
      name: '辣哥',
    },
    {
      img: 'https://img.zcool.cn/community/01a2a35906dec9a801214550412547.jpg@1280w_1l_2o_100sh.jpg',
      id: 2,
      name: '辣鸡',
    },
    {
      img: 'https://img.zcool.cn/community/01a2a35906dec9a801214550412547.jpg@1280w_1l_2o_100sh.jpg',
      id: 3,
      name: '辣3',
    },
    {
      img: 'https://img.zcool.cn/community/01a2a35906dec9a801214550412547.jpg@1280w_1l_2o_100sh.jpg',
      id: 4,
      name: '辣4',
    }
   ], // 回答人列表
   current: 0,
  },
  /**
   * 登录加载数据
   */
  onLoad: function (e) {
    var that = this;
    that.setData({
      famImg: e.img,
      famName: e.name,
      userInfo: app.globalData.userInfo
    })
    console.log(e)
  },
  
  // 轮播向左
  swiperLeft() {
    this.setData({
      current: this.data.current === 0 ? this.data.answerList.length - 1 : this.data.current - 1
    })
  },

  // 轮播向右
  swiperRight() {
    this.setData({
      current: this.data.current === this.data.answerList.length - 1 ? 0 : this.data.current + 1
    })
  },
  bindFormSubmit: function (e) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        wx.request({
          url: 'https://stupidant.cn/queswerServer/addQuest',
          data: {
             ques_userName: res.userInfo.nickName,
             is_free: that.data.is_free,
            'question.content': e.detail.value.question,
            'question.quesd_username': that.data.famName,
            'question.is_free': that.data.is_free,
          },
          header: {
            "Content-Type": "applciation/json"
          },
          method: "GET",
          success: function (e) {
            that.setData({
              hiddenToast: false
            })
          },
        })
      }
    })
  },
  /**
   * 免费与付费之间切换（支持重复操作）
   */
  checkChange: function (e) {
    var that = this;
    if (that.data.ischange % 2 == 0) {
      that.setData({
        isFree: '￥0.00',
        is_free: 1,
        ischange: that.data.ischange + 1
      })
    } else {
      that.setData({
        isFree: '￥1.00',
        is_free: 0,
        ischange: that.data.ischange + 1
      })
    }
  },
  toastHidden: function () {
    wx.switchTab({
      url: '../mine/mine',
    })
  },

})
