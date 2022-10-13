var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}, //用户信息
    hiddenToast: true, // 是否显示提示框
    price: 1, // 回答金额
    answerList: [
      {
        img:
          'https://img.zcool.cn/community/01a2a35906dec9a801214550412547.jpg@1280w_1l_2o_100sh.jpg',
        id: 1,
        name: '辣哥',
      },
      {
        img:
          'https://img.zcool.cn/community/01a2a35906dec9a801214550412547.jpg@1280w_1l_2o_100sh.jpg',
        id: 2,
        name: '辣鸡',
      },
      {
        img:
          'https://img.zcool.cn/community/01a2a35906dec9a801214550412547.jpg@1280w_1l_2o_100sh.jpg',
        id: 3,
        name: '辣3',
      },
      {
        img:
          'https://img.zcool.cn/community/01a2a35906dec9a801214550412547.jpg@1280w_1l_2o_100sh.jpg',
        id: 4,
        name: '辣4',
      },
    ], // 回答人列表
    currentIndex: 0, // 页面swiper的current索引
    index: 0, // 当前swiper的current索引
    flag: true, // swiper切换动画是否完成
  },
  /**
   * 登录加载数据
   */
  onLoad: function (e) {
    var that = this;
    that.setData({
      userInfo: app.globalData.userInfo,
    });
  },

  /**
   * 左滑选择回答人
   */
  toLeft: function (e) {

    if (!this.data.flag) {
      // 如果动画还未完成，不执行

      return;
    } else {
      // 修改按钮切换不可用状态

      this.setData({
        flag: false,
      });

      var index = this.data.index;

      if (index > 0) {
        this.setData({
          currentIndex: index - 1,
        });
      } else {
        this.setData({
          currentIndex: this.data.answerList.length - 1,
        });
      }
    }
  },

  /**
   * 右滑选择回答人
   */

  toRight: function (e) {

    if (!this.data.flag) {
      // 如果动画还未完成，不执行

      return;
    } else {
      // 修改按钮切换不可用状态

      this.setData({
        flag: false,
      });

      var index = this.data.index;

      if (index >= this.data.answerList.length - 1) {
        this.setData({
          currentIndex: 0,
        });
      } else {
        this.setData({
          currentIndex: index + 1,
        });
      }
    }
  },

  /**
   * 选择对应的回答人
   */
  changeIndex: function (e) {
    // 切换过程绑定

    this.setData({
      index: e.detail.current,
    });
  },

  /**
   * 动画是否完成
   */
  changeFinish: function (e) {
    // 动画完全完成

    // 修改按钮切换可用状态

    this.setData({
      flag: true,
    });
  },
  /**
   * 提交提问
   */
  bindFormSubmit: function (e) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        wx.request({
          url: 'https://stupidant.cn/queswerServer/addQuest',
          data: {
            ques_userName: res.userInfo.nickName,
            'question.content': e.detail.value.question,
            'question.quesd_username': that.data.answerList[that.data.currentIndex],
          },
          header: {
            'Content-Type': 'applciation/json',
          },
          method: 'GET',
          success: function (e) {
            that.setData({
              hiddenToast: false,
            });
          },
        });
      },
    });
  },
  /**
   * 完成提问
   */
  toastHidden: function () {
    wx.switchTab({
      url: '../mine/mine',
    });
  },
});
