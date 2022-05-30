// index.js
// 获取应用实例
const app = getApp();
import Toast from '@vant/weapp/toast/toast';
Page({
  data: {
    title: '一房一价',
    payType: '预览',
    showShare: false,
    salespersonName: '',
    salespersonLevel: '',
    salespersonTitle: '',
    buildId: '',
    user: '',
    payStatus: false,
    // activeNames: ['1'],
    checked: [],
    tableData: [],
    listData: [],
    result: ['1', '3'],
    conditionArr: [
      {
        title:'选择楼栋',
        type:'checkbox',
        checked: false,
        key: 'floor',
        value: [],
        conditionData: {
          list: [
            {
              label: '1栋',
              name: '1'
            },
            {
              label: '2栋',
              name: '2'
            }
          ]
        }
      },
      {
        title:'选择户型',
        type:'checkbox',
        checked: false,
        key: 'household',
        value: [],
        conditionData: {
          list: [
            {
              label: 'A户·1号位',
              name: '1'
            },
            {
              label: 'B户·2号位',
              name: '2'
            }
          ]
        }
      },
      {
        title:'选择建筑面积',
        type:'checkbox',
        checked: false,
        key: 'area',
        value: [],
        conditionData: {
          list: [
            {
              label: '138平',
              name: '1'
            },
            {
              label: '99平',
              name: '2'
            }
          ]
        }
      },
      {
        title:'选择房屋属性',
        type:'checkbox',
        checked: false,
        key: 'houseType',
        value: [],
        conditionData: {
          list: [
            {
              label: '住宅',
              name: '1'
            },
            {
              label: '公寓',
              name: '2'
            }
          ]
        }
      },
      {
        title:'选择朝向',
        type:'checkbox',
        checked: false,
        key: 'towards',
        value: [],
        conditionData: {
          list: [
            {
              label: '东北',
              name: '1'
            },
            {
              label: '南向',
              name: '2'
            }
          ]
        }
      },
      {
        title:'输入均价范围',
        type:'input',
        checked: false,
        key: 'avePrice',
        value: [],
        conditionData: {
          list: [
            {
              label: '最低单价',
              name: '1'
            },
            {
              label: '最高单价',
              name: '2'
            }
          ]
        }
      },
      {
        title:'输入总价范围',
        type:'input',
        checked: false,
        key: 'totalPrice',
        value: [],
        conditionData: {
          list: [
            {
              label: '最低总价',
              name: '1'
            },
            {
              label: '最高总价',
              name: '2'
            }
          ]
        }
      }
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    backUrl: '#ffffff',
    tapChar: 0,
    sortUp: true,
    firstSort: true,
    loading: false,
    noMore: false,
    loadingFailed: false,
    pageNo: 1,
    noPay: false,
    options: [
      { name: '微信', icon: 'wechat', openType: 'share' },
      { name: '复制链接', icon: 'link' },
      { name: '分享海报', icon: 'poster' },
    ],
  },
  onLoad(options) {
    this.data.conditionArr.forEach((origin,idx) => {
      let exg = this.data.result.find(i => {
        return i == idx
      })
      let _key = `conditionArr[${idx}].checked`;
      if(exg){
        this.setData({
          [_key]: true
        });
      }else{
        this.setData({
          [_key]: false
        });
      }
    })
    this.setData({
      title: options.name,
      user: app.globalData.userInfo.nickName,
      payStatus: options.payStatus,
      payType: options.payStatus === 'true' ? '激活' : '预览',
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
          key: 'totalPrice'
        },
        {
          name: '均价',
          key: 'avePrice'
        },
        {
          name: '户型',
          key: 'household'
        },
        {
          name: '日照',
          key: 'sun'
        }
      ],
      tableData: [
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
        },
        {
          floor: '27',
          area: '128',
          total: '2734854',
          price: '23566',
          houseType: 'B·套三',
          sun: '2h'
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
  onConditionChange(event) {
    this.setData({
      result: event.detail
    });
    this.data.conditionArr.forEach((origin,idx) => {
      let exg = event.detail.find(i => {
        return i == idx
      })
      let _key = `conditionArr[${idx}].checked`;
      if(exg){
        this.setData({
          [_key]: true
        });
      }else{
        this.setData({
          [_key]: false
        });
      }
    })
  },

  toggle(event) {
    const { index } = event.currentTarget.dataset;
    const checkbox = this.selectComponent(`.checkboxes-${index}`);
    checkbox.toggle();
  },

  noop() {},
  onShare() {
    this.setData({ showShare: true });
  },

  onClose() {
    this.setData({ showShare: false });
  },

  onSelect(e) {
    Toast(e.detail.name);
    this.onClose();
  },
  sendMessage() {
    Toast.success('发送消息给销售');
  },
  sortChar(e) {
    if (this.data.tapChar !== undefined && e.target.dataset.idx !== undefined && this.data.tapChar !== e.target.dataset.idx){
      this.setData({
        tapChar: e.target.dataset.idx,
        sortUp: true
      })
    } else {
      this.setData({
        sortUp: !this.data.sortUp
      })
    }
  },
  scrollToLower: function () {
    if (!this.data.loading && this.data.pageNo <=5) {
      this.setData({
        loading: true,
        loadingFailed: false,
        pageNo: this.data.pageNo + 1,
      });
      this.getData(true);
    }
  },
  //请求数据
  getData(isPage) {
    let params = {
      pageNum: this.data.pageNo,
      pageSize: 30,
    };
    //请求
    if (this.data.payStatus === 'true'){
      setTimeout(() => {
        let round = Math.round(Math.random());
        let addData = round
          ? [{
              floor: '28',
              area: '128',
              total: '2734854',
              price: '23566',
              houseType: 'B·套三',
              sun: '2h'
            },
            {
              floor: '28',
              area: '128',
              total: '2734854',
              price: '23566',
              houseType: 'B·套三',
              sun: '2h'
            },
            {
              floor: '28',
              area: '128',
              total: '2734854',
              price: '23566',
              houseType: 'B·套三',
              sun: '2h'
            }] : [];
        this.setData({
          loading: false,
        });
        if (!round) {
          //返回失败
          this.setData({
            loadingFailed: true,
          });
          return false;
        }
        if (round) {
          if (isPage) {
            //下一页的数据拼接在原有数据后面
            this.setData({
              tableData: this.data.tableData.concat(addData),
            });
          } else {
            //第一页数据直接赋值
            this.setData({
              tableData: addData,
            });
          }
          //如果返回的数据为空，那么就没有下一页了
          if (this.data.pageNo > 5 ) {
            this.setData({
              noMore: true,
              loadingFailed: false,
            });
          }
        }
        // } else {
        //   //返回失败
        //   this.setData({
        //     loadingFailed: true,
        //   });
        // }
      }, 1000);
    } else {
      this.setData({
        noPay: true
      })
    }
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
  // onListChange(event) {
  //   this.setData({
  //     listActiveNames: event.detail,
  //   });
  // },
  onInputChange (event) {
    this.data.conditionArr.forEach((el,idx) => {
      if (el.key === event.target.dataset.key) {
        const _k1 = `conditionArr[${idx}].value[${event.target.dataset.idx}]`;
        this.setData({
          [_k1]: event.detail,
        });
      }
    })
  },
  // onConditionChange(event) {
  //   this.setData({
  //     activeNames: event.detail,
  //   });
  // },
  onCheckChange(event) {
    this.data.conditionArr.forEach((el,idx) => {
      if (el.key === event.target.dataset.key) {
        const _k1 = `conditionArr[${idx}].value`;
        this.setData({
          [_k1]: event.detail,
        });
      }
    })
  },
  moveHandle () {},
  getHouseList() {
    this.closePopup();
  },
});
