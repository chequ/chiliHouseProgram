// index.js
// 获取应用实例
const app = getApp();

Page({
  data: {
    title: '一房一价',
    salespersonName: '',
    salespersonLevel: '',
    salespersonTitle: '',
    buildId: '',
    user: '',
    activeNames: ['1'],
    checked: [],
    tableData: [],
    listData: [],
    conditionObj: {
      buildNoList: [1, 2],
    },
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    backUrl: '#ffffff',
  },
  onLoad(options) {
    this.setData({
      title: options.name,
      user: app.globalData.userInfo.nickName,
      buildId: options.buildId,
      salespersonName: '泠大哥',
      salespersonLevel: '特级金牌置业专家',
      salespersonTitle: ['免费获取激活码', '一对一专业咨询', '麻辣选房至六折'],
      defualtChar: [
        {
          name: '楼栋',
          key: 'floor'
        },
        {
          name: '建面',
          key: 'area'
        },
        {
          name: '总价',
          key: 'total'
        },
        {
          name: '均价',
          key: 'price'
        },
        {
          name: '户型',
          key: 'houseType'
        },
        {
          name: '模拟日照',
          key: 'sun'
        }
      ],
      tableData: [
        {
          name: '楼栋',
          key: 'floor',
          value: '27'
        },
        {
          name: '建面',
          key: 'area',
          value: '128'
        },
        {
          name: '总价',
          key: 'total',
          value: '2734854'
        },
        {
          name: '均价',
          key: 'price',
          value: '23566'
        },
        {
          name: '户型',
          key: 'houseType',
          value: 'B·套三'
        },
        {
          name: '日照',
          key: 'sun',
          value: '2h'
        }
      ],
    });
    this.setWatermark();
  },
  setWatermark() {
    var name_xx = '麻辣选房' + this.data.user;
    var ctx = wx.createCanvasContext('watermark');

    ctx.rotate((45 * Math.PI) / 180); //设置文字的旋转角度，角度为45°；

    //对斜对角线以左部分进行文字的填充
    for (let j = 1; j < 10; j++) {
      //用for循环达到重复输出文字的效果，这个for循环代表纵向循环
      ctx.beginPath();
      ctx.setFontSize(12);
      ctx.setFillStyle('rgba(169,169,169,.2)');

      ctx.fillText(name_xx, 0, 50 * j);
      for (let i = 1; i < 10; i++) {
        //这个for循环代表横向循环，
        ctx.beginPath();
        ctx.setFontSize(12);
        ctx.setFillStyle('rgba(169,169,169,.2)');
        ctx.fillText(name_xx, 100 * i, 50 * j);
      }
    } //两个for循环的配合，使得文字充满斜对角线的左下部分

    //对斜对角线以右部分进行文字的填充逻辑同上
    for (let j = 0; j < 10; j++) {
      ctx.beginPath();
      ctx.setFontSize(12);
      ctx.setFillStyle('rgba(169,169,169,.2)');

      ctx.fillText(name_xx, 0, -50 * j);
      for (let i = 1; i < 10; i++) {
        ctx.beginPath();
        ctx.setFontSize(12);
        ctx.setFillStyle('rgba(169,169,169,.2)');
        ctx.fillText(name_xx, 100 * i, -50 * j);
      }
    }
    ctx.draw();
  },
  sendMessage() {
    console.log('发送消息给销售')
  },
  closePopup() {
    this.setData({
      show: false,
    });
  },
  showChange() {
    let temp = this.data.isList;
    this.setData({
      isList: !temp,
      listOrTable: temp ? '列表' : '表格',
    });
  },
  showPopup() {
    this.setData({
      show: true,
    });
  },
  onListChange(event) {
    this.setData({
      listActiveNames: event.detail,
    });
  },
  onConditionChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  onFloorChange(event) {
    const _k1 = `conditionObj.name`;
    this.setData({
      [_k1]: event.detail,
    });
  },
  getHouseList() {
    this.closePopup();
  },
});
