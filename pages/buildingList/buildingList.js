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
