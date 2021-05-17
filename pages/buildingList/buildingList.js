// index.js
// 获取应用实例
const app = getApp();

Page({
  data: {
    title: '一房一价',
    listOrTable: '表格',
    isList: true,
    show: false,
    buildId: '',
    activeNames: ['1'],
    checked: [],
    tableData: [],
    listData: [],
    condtionObj: {
      buildNoList: [1, 2],
    },
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  onLoad(options) {
    this.setData({
      title: options.name,
      buildId: options.buildid,
      tableData: [
        {
          floorData: [
            {
              floor: 1,
            },
            {
              houseRoomNum: '三室一厅一卫',
              houseType: '公寓',
              housePrice: '2353347',
            },
            {
              houseRoomNum: '三室一厅',
              houseType: '公寓',
              housePrice: '2353347',
            },
            {
              houseRoomNum: '三室一厅',
              houseType: '公寓',
              housePrice: '2353347',
            },
            {
              houseRoomNum: '三室一厅',
              houseType: '公寓',
              housePrice: '2353347',
            },
          ],
        },
        {
          floorData: [
            {
              floor: 2,
            },
            {
              houseRoomNum: '三室一厅',
              houseType: '公寓',
              housePrice: '2353347',
            },
            {
              houseRoomNum: '三室一厅',
              houseType: '公寓',
              housePrice: '2353347',
            },
            {
              houseRoomNum: '三室一厅',
              houseType: '公寓',
              housePrice: '2353347',
            },
            {
              houseRoomNum: '三室一厅',
              houseType: '公寓',
              housePrice: '2353347',
            },
          ],
        },
        {
          floorData: [
            {
              floor: 3,
            },
            {
              houseRoomNum: '三室一厅',
              houseType: '公寓',
              housePrice: '2353347',
            },
            {
              houseRoomNum: '三室一厅',
              houseType: '公寓',
              housePrice: '2353347',
            },
            {
              houseRoomNum: '三室一厅',
              houseType: '公寓',
              housePrice: '2353347',
            },
            {
              houseRoomNum: '三室一厅',
              houseType: '公寓',
              housePrice: '2353347',
            },
          ],
        },
        {
          floorData: [
            {
              floor: 4,
            },
            {
              houseRoomNum: '三室一厅',
              houseType: '公寓',
              housePrice: '2353347',
            },
            {
              houseRoomNum: '三室一厅',
              houseType: '公寓',
              housePrice: '2353347',
            },
            {
              houseRoomNum: '三室一厅',
              houseType: '公寓',
              housePrice: '2353347',
            },
            {
              houseRoomNum: '三室一厅',
              houseType: '公寓',
              housePrice: '2353347',
            },
          ],
        },
      ],
      listData: [
        {
          buildNo: '1',
          buildFloor: '5',
          houseNo: '4',
          houseArea: '125',
          houseRoomNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice: '2357776',
        },
        {
          buildNo: '1',
          buildFloor: '5',
          houseNo: '4',
          houseArea: '125',
          houseRoomNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice: '2357776',
        },
        {
          buildNo: '1',
          buildFloor: '5',
          houseNo: '4',
          houseArea: '125',
          houseRoomNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice: '2357776',
        },
        {
          buildNo: '1',
          buildFloor: '5',
          houseNo: '4',
          houseArea: '125',
          houseRoomNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice: '2357776',
        },
        {
          buildNo: '1',
          buildFloor: '5',
          houseNo: '4',
          houseArea: '125',
          houseRoomNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice: '2357776',
        },
        {
          buildNo: '1',
          buildFloor: '5',
          houseNo: '4',
          houseArea: '125',
          houseRoomNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice: '2357776',
        },
        {
          buildNo: '1',
          buildFloor: '5',
          houseNo: '4',
          houseArea: '125',
          houseRoomNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice: '2357776',
        },
      ],
    });
    this.setWatermark();
  },
  setWatermark() {
    var name_xx = '麻辣选房' + this.buildId;
    var ctx = wx.createCanvasContext('watermark');

    ctx.rotate((45 * Math.PI) / 180); //设置文字的旋转角度，角度为45°；

    //对斜对角线以左部分进行文字的填充
    for (let j = 1; j < 10; j++) {
      //用for循环达到重复输出文字的效果，这个for循环代表纵向循环
      ctx.beginPath();
      ctx.setFontSize(14);
      ctx.setFillStyle('rgba(169,169,169,.2)');

      ctx.fillText(name_xx, 0, 50 * j);
      for (let i = 1; i < 10; i++) {
        //这个for循环代表横向循环，
        ctx.beginPath();
        ctx.setFontSize(14);
        ctx.setFillStyle('rgba(169,169,169,.2)');
        ctx.fillText(name_xx, 80 * i, 50 * j);
      }
    } //两个for循环的配合，使得文字充满斜对角线的左下部分

    //对斜对角线以右部分进行文字的填充逻辑同上
    for (let j = 0; j < 10; j++) {
      ctx.beginPath();
      ctx.setFontSize(14);
      ctx.setFillStyle('rgba(169,169,169,.2)');

      ctx.fillText(name_xx, 0, -50 * j);
      for (let i = 1; i < 10; i++) {
        ctx.beginPath();
        ctx.setFontSize(14);
        ctx.setFillStyle('rgba(169,169,169,.2)');
        ctx.fillText(name_xx, 80 * i, -50 * j);
      }
    }
    ctx.draw()
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
  onCoditionChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  onFloorChange(event) {
    const _k1 = `condtionObj.name`;
    this.setData({
      [_k1]: event.detail,
    });
  },
  getHouseList() {
    this.closePopup();
  },
});
