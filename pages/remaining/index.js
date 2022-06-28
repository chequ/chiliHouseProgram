// pages/remaining/index.js
// 获取应用实例
const app = getApp();
import Toast from '@vant/weapp/toast/toast';
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
      floor: [1, 2],
    },
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    floorHouseNum: 0, // 楼层房号最多的数量
    activeTab: 0, //楼栋切换
    openDetailIdx: null, //房号详情展示
    result: ['1', '3'], //已选过滤条件
    conditionArr: [
      {
        title: '选择楼栋',
        type: 'checkbox',
        checked: false,
        key: 'floor',
        value: [],
        conditionData: {
          list: [
            {
              label: '1栋',
              name: '1',
            },
            {
              label: '2栋',
              name: '2',
            },
          ],
        },
      },
      {
        title: '选择户型',
        type: 'checkbox',
        checked: false,
        key: 'household',
        value: [],
        conditionData: {
          list: [
            {
              label: 'A户·1号位',
              name: '1',
            },
            {
              label: 'B户·2号位',
              name: '2',
            },
          ],
        },
      },
      {
        title: '选择建筑面积',
        type: 'checkbox',
        checked: false,
        key: 'area',
        value: [],
        conditionData: {
          list: [
            {
              label: '138平',
              name: '1',
            },
            {
              label: '99平',
              name: '2',
            },
          ],
        },
      },
      {
        title: '选择房屋属性',
        type: 'checkbox',
        checked: false,
        key: 'houseType',
        value: [],
        conditionData: {
          list: [
            {
              label: '住宅',
              name: '1',
            },
            {
              label: '公寓',
              name: '2',
            },
          ],
        },
      },
      {
        title: '选择朝向',
        type: 'checkbox',
        checked: false,
        key: 'towards',
        value: [],
        conditionData: {
          list: [
            {
              label: '东北',
              name: '1',
            },
            {
              label: '南向',
              name: '2',
            },
          ],
        },
      },
      {
        title: '输入均价范围',
        type: 'input',
        checked: false,
        key: 'avePrice',
        value: [],
        conditionData: {
          list: [
            {
              label: '最低单价',
              name: '1',
            },
            {
              label: '最高单价',
              name: '2',
            },
          ],
        },
      },
      {
        title: '输入总价范围',
        type: 'input',
        checked: false,
        key: 'totalPrice',
        value: [],
        conditionData: {
          list: [
            {
              label: '最低总价',
              name: '1',
            },
            {
              label: '最高总价',
              name: '2',
            },
          ],
        },
      },
    ], // 过滤条件
    compareData: [], // 对比数量
    compareDetailStatus: false, //对比弹窗
  },
  onLoad(options) {
    let that = this;
    let backTableData = [
      {
        floorData: [
          {
            floor: 1,
          },
          {
            houseNum: '三室一厅一卫',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false,
            isCompare: false,
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: true,
          },
        ],
      },
      {
        floorData: [
          {
            floor: 2,
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false,
            isCompare: false,
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false,
            isCompare: false,
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false,
            isCompare: false,
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false,
            isCompare: false,
          },
        ],
      },
      {
        floorData: [
          {
            floor: 3,
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false,
            isCompare: false,
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false,
            isCompare: false,
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false,
            isCompare: false,
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false,
            isCompare: false,
          },
        ],
      },
      {
        floorData: [
          {
            floor: 4,
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false,
            isCompare: false,
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false,
            isCompare: false,
          },
          {
            houseNum: '三室一厅',
            houseType: '住宅',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false,
            isCompare: false,
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false,
          },
        ],
      },
    ];
    this.setData({
      title: options.name,
      buildId: options.buildid,
      tableData: backTableData,
      floorHouseNum: that.mostHouseFloor(backTableData),
      listData: [
        {
          houseId: 1,
          buildNo: '100',
          buildFloor: '500',
          houseNo: '4000',
          houseArea: '125',
          houseNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice: '2357.77万',
          renovated: false,
          saled: false,
          isCompare: false,
        },
        {
          houseId: 2,
          buildNo: '1',
          buildFloor: '5',
          houseNo: '4',
          houseArea: '125',
          houseNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice: '2357776',
          renovated: true,
          saled: true,
          isCompare: false,
        },
        {
          houseId: 3,
          buildNo: '1',
          buildFloor: '5',
          houseNo: '4',
          houseArea: '125',
          houseNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice: '2357776',
          renovated: true,
          saled: false,
          isCompare: false,
        },
        {
          houseId: 4,
          buildNo: '1',
          buildFloor: '5',
          houseNo: '4',
          houseArea: '125',
          houseNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice: '2357776',
          renovated: true,
          saled: false,
          isCompare: false,
        },
        {
          houseId: 5,
          buildNo: '1',
          buildFloor: '5',
          houseNo: '4',
          houseArea: '125',
          houseNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice: '2357776',
          renovated: true,
          saled: false,
          isCompare: false,
        },
        {
          houseId: 6,
          buildNo: '1',
          buildFloor: '5',
          houseNo: '4',
          houseArea: '125',
          houseNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice: '2357776',
          renovated: true,
          saled: false,
          isCompare: false,
        },
        {
          houseId: 7,
          buildNo: '1',
          buildFloor: '5',
          houseNo: '4',
          houseArea: '125',
          houseNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice: '2357776',
          renovated: true,
          saled: false,
          isCompare: false,
        },
      ],
    });
  },
  // 收起过滤条件
  toggle(event) {
    const { index } = event.currentTarget.dataset;
    const checkbox = this.selectComponent(`.checkboxes-${index}`);
    checkbox.toggle();
  },
  noop() {},
  onCheckChange(event) {
    this.data.conditionArr.forEach((el, idx) => {
      if (el.key === event.target.dataset.key) {
        const _k1 = `conditionArr[${idx}].value`;
        this.setData({
          [_k1]: event.detail,
        });
      }
    });
  },
  // 找出最多房号的楼层
  mostHouseFloor(data) {
    let len = 0;
    data.forEach((el) => {
      if (el.floorData && el.floorData.length && len < el.floorData.length) {
        len = el.floorData.length - 1;
      }
    });
    return len;
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
  // 列表房源详情显示
  showDetail(e) {
    this.setData({
      openDetailIdx: e.target.dataset.idx,
    });
  },
  // 列表房源详情关闭
  hideDetail(e) {
    this.setData({
      openDetailIdx: null,
    });
  },
  // 条件过滤变化
  onConditionChange(event) {
    this.setData({
      result: event.detail,
    });
    this.data.conditionArr.forEach((origin, idx) => {
      let exg = event.detail.find((i) => {
        return i == idx;
      });
      let _key = `conditionArr[${idx}].checked`;
      let _val = `conditionArr[${idx}].value`;
      if (exg) {
        this.setData({
          [_key]: true,
        });
      } else {
        this.setData({
          [_key]: false,
          [_val]: [],
        });
      }
    });
  },
  // 加入对比
  addCompared(e) {
    let addObj = e.target.dataset.item;
    let index = e.target.dataset.idx;
    let temp = this.data.compareData.findIndex((el) => {
      return el.houseId === addObj.houseId;
    });
    if (temp === -1) {
      if (this.data.compareData.length > 4) {
        Toast('暂时不支持两个房源以的上对比');
        return;
      }
      let _key = `listData[${index}].isCompare`;
      this.setData({
        compareData: this.data.compareData.concat(addObj),
        [_key]: true,
      });
    } else {
      let _key = `listData[${index}].isCompare`;
      this.data.compareData.splice(temp, 1);
      this.setData({
        compareData: this.data.compareData,
        [_key]: false,
      });
    }
  },
  // 对比弹窗打开
  compareDetailShow() {
    if (this.data.compareData.length < 1) {
      Toast('必须选择两个或两个以上的房源');
      return;
    }
    this.setData({
      compareDetailStatus: true,
    });
  },
  // 对比弹窗关闭
  onCompareClose() {
    this.setData({
      compareDetailStatus: false,
    });
  },
});
