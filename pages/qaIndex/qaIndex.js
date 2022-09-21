var util = require('../../utils/util.js');
var app = getApp();
Page({
  data: {
    feed: [],
    navTab: ['筛选排序：', '免费优先', '获赞数'], // 提供排序模式
    currentNavtab: 0, //默认选择的模式index
    isanswer: 0, //是否已经回答
    feed_length: 0,
  },
  /**
   * 初次加载页面数据
   */
  onLoad: function () {
    console.log('onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    this.refresh();
  },
  /**
   * 自主选择标签栏
   */
  switchTab: function (e) {
    var that = this;
    var idx = e.currentTarget.dataset.idx;
    console.log(idx);
    if (idx == 2) {
      wx.request({
        url: 'https://stupidant.cn/queswerServer/listQuestionsByLike',
        data: {},
        header: {
          'Content-Type': 'applciation/json',
        },
        method: 'GET',
        success: function (e) {
          that.setData({
            feed: e.data,
            feed_length: e.data.length,
          });
          console.log(e);
        },
      });
    } else if (idx == 1) {
      wx.request({
        url: 'https://stupidant.cn/queswerServer/listQuestionsByTime',
        data: {},
        header: {
          'Content-Type': 'applciation/json',
        },
        method: 'GET',
        success: function (e) {
          that.setData({
            feed: e.data,
            feed_length: e.data.length,
          });
          console.log(e);
        },
      });
    } else if (idx == 0) {
      that.refresh();
    }
    that.setData({
      currentNavtab: e.currentTarget.dataset.idx,
    });
  },
  /**
   * 搜索栏，可进行模糊化查询
   */
  search: function () {
    var that = this;
    console.log('...' + this.data.topic);
    wx.request({
      url: 'https://stupidant.cn/queswerServer/searchQuestions',
      data: {
        topic: this.data.topic,
      },
      header: {
        'Content-Type': 'applciation/json',
      },
      method: 'GET',
      success: function (e) {
        that.setData({
          feed: e.data,
          feed_length: e.data.length,
        });
        console.log(e);
      },
    });
  },
  searchInput: function (e) {
    this.setData({
      topic: e.detail.value,
    });
  },
  /**
   * 用户完成选择后，小程序进行刷新显示
   */
  refresh: function () {
    var that = this;
    // wx.request({
    //   url: 'https://stupidant.cn/queswerServer/listQuestions',
    //   data: {},
    //   header: {
    //     'Content-Type': 'applciation/json',
    //   },
    //   method: 'GET',
    //   success: function (e) {
    //     console.log(e);
    //     that.setData({
    //       feed: e.data,
    //       feed_length: e.data.length,
    //     });
    //     console.log(e);
    //   },
    // });
    this.setData({
      feed: [
        {
          ans_img:
            'https://img.zcool.cn/community/01a2a35906dec9a801214550412547.jpg@1280w_1l_2o_100sh.jpg',
          ans_username: '辣哥',
          ans_content: '不怎么样',
          ques_username: '咸鱼',
          ques_img:
            'https://img.zcool.cn/community/01a2a35906dec9a801214550412547.jpg@1280w_1l_2o_100sh.jpg',
          ques_content: '老师，请问最新的未来城三期怎么样',
          ans_time: '2022-9-22 10:00:02',
          is_answer: 1,
          ans_liked: 5,
          ques_is_free: 0,
        },
        {
          ans_img:
            'https://img.zcool.cn/community/01a2a35906dec9a801214550412547.jpg@1280w_1l_2o_100sh.jpg',
          ans_username: '辣哥',
          ans_content:
            '还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好还好',
          ques_username: '咸鱼',
          ques_img:
            'https://img.zcool.cn/community/01a2a35906dec9a801214550412547.jpg@1280w_1l_2o_100sh.jpg',
          ques_content: '老师，请问最新的观澜三期怎么样',
          ans_time: '2022-9-22 10:00:02',
          is_answer: 1,
          ans_liked: 4,
          ques_is_free: 1,
        },
        {
          ans_img:
            'https://img.zcool.cn/community/01a2a35906dec9a801214550412547.jpg@1280w_1l_2o_100sh.jpg',
          ans_username: '辣哥',
          ans_content: '还好',
          ques_username: '咸鱼',
          ques_img:
            'https://img.zcool.cn/community/01a2a35906dec9a801214550412547.jpg@1280w_1l_2o_100sh.jpg',
          ques_content: '老师，请问最新的未来城三期怎么样',
          ans_time: '2022-9-22 10:00:02',
          is_answer: 1,
          ans_liked: 2,
          ques_is_free: 2,
        },
        {
          ans_img:
            'https://img.zcool.cn/community/01a2a35906dec9a801214550412547.jpg@1280w_1l_2o_100sh.jpg',
          ans_username: '辣哥',
          ans_content: '一般',
          ans_time: '2022-9-22 10:00:02',
          ques_username: '咸鱼',
          ques_img:
            'https://img.zcool.cn/community/01a2a35906dec9a801214550412547.jpg@1280w_1l_2o_100sh.jpg',
          ques_content: '老师，请问最新的未来城三期怎么样',
          is_answer: 1,
          ans_liked: 1,
          ques_is_free: 3,
        },
        {
          ans_img: '',
          ans_username: '',
          ans_content: '',
          ans_time: '',
          ques_username: '咸鱼',
          ques_img:
            'https://img.zcool.cn/community/01a2a35906dec9a801214550412547.jpg@1280w_1l_2o_100sh.jpg',
          ques_content: '老师，请问最新的未来城三期怎么样',
          is_answer: 0,
          ans_liked: 1,
          ques_is_free: 4,
        },
      ],
      feed_length: 5,
    });
  },
  /**
   * 跳转页面并传递相关参数
   */
  bindStory: function (e) {
    var $data = e.currentTarget.dataset;
    let that = this;
    if (app.globalData.userInfo) {
      that.navToDetail($data);
    } else {
      wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          app.globalData.userInfo = res;
          that.navToDetail($data);
        },
      });
    }
  },
  navToDetail(data) {
    wx.navigateTo({
      url:
        '../inform/inform?ansname=' +
        data.ansname +
        '&ansimg=' +
        data.ansimg +
        '&anscontent=' +
        data.anscontent +
        '&anstime=' +
        data.anstime +
        '&quesname=' +
        data.quesname +
        '&quesimg=' +
        data.quesimg +
        '&quescontent=' +
        data.quescontent +
        '&ques_is_free=' +
        data.ques_is_free +
        '&is_answer=' +
        data.isanswer +
        '&ans_liked=' +
        data.ans_liked,
    });
  },
});
