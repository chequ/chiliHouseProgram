// pages/remaining/index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    title: '一房一价',
    listOrTable: '表格',
    isList: true,
    show: false,
    buildId:'',
    activeNames: ['1'],
    checked: [],
    tableData:[],
    listData:[],
    condtionObj:{
      floor:[1,2]
    },
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    floorHouseNum: 0, // 楼层房号最多的数量
    activeTab: 0, //楼栋切换
  },
  onLoad(options) {
    let that = this
    let backTableData = [
      {
        floorData:[
          {
            floor:1
          },
          {
            houseNum: '三室一厅一卫',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false,
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
        ]
      },
      {
        floorData:[
          {
            floor:2
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false
          }
        ]
      },
      {
        floorData:[
          {
            floor:3
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false
          }
        ]
      },
      {
        floorData:[
          {
            floor:4
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false
          },
          {
            houseNum: '三室一厅',
            houseType: '住宅',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false
          },
          {
            houseNum: '三室一厅',
            houseType: '公寓',
            houseTotal: '2353347',
            housePrice: '23000',
            houseArea: '99',
            renovated: true,
            saled: false
          }
        ]
      },
    ]
    this.setData({
      title:options.name,
      buildId:options.buildid,
      tableData:backTableData,
      floorHouseNum: that.mostHouseFloor(backTableData),
      listData:[
        {
          buildNo: '1',
          buildFloor:'5',
          houseNo: '4',
          houseArea: '125',
          houseNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice:'2357776'
        },
        {
          buildNo: '1',
          buildFloor:'5',
          houseNo: '4',
          houseArea: '125',
          houseNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice:'2357776'
        },
        {
          buildNo: '1',
          buildFloor:'5',
          houseNo: '4',
          houseArea: '125',
          houseNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice:'2357776'
        },
        {
          buildNo: '1',
          buildFloor:'5',
          houseNo: '4',
          houseArea: '125',
          houseNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice:'2357776'
        },
        {
          buildNo: '1',
          buildFloor:'5',
          houseNo: '4',
          houseArea: '125',
          houseNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice:'2357776'
        },
        {
          buildNo: '1',
          buildFloor:'5',
          houseNo: '4',
          houseArea: '125',
          houseNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice:'2357776'
        },
        {
          buildNo: '1',
          buildFloor:'5',
          houseNo: '4',
          houseArea: '125',
          houseNum: '三室一厅',
          houseType: '公寓',
          houseDirection: '西南',
          houseSunshineTime: '2小时',
          housePrice:'2357776'
        }
      ]
    })
  },
  // 找出最多房号的楼层
  mostHouseFloor (data) {
    let len = 0
    data.forEach(el => {
      if (el.floorData && el.floorData.length && len < el.floorData.length) {
        len = el.floorData.length-1
      }
    });
    return len
  },
  closePopup() {
    this.setData({
      show: false
    })
  },
  showChange(){
    let temp = this.data.isList
    this.setData({
      isList: !temp,
      listOrTable: temp ? "列表" : "表格"
    })
  },
  showPopup() {
    this.setData({
      show: true
    })
  },
  onListChange(event){
    this.setData({
      listActiveNames: event.detail
    });
  },
  onCoditionChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },
  onFloorChange(event) {
    const _k1 = `condtionObj.name`
    this.setData({
      [_k1]: event.detail
    })
  },
  getHouseList() {
    this.closePopup()
  }
})
