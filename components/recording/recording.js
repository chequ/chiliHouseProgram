// components/recording/recording.js
const recorderManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext()
var init

import {
  postRecording,
  deleteRecording
} from '../../../../../config/api/cardUrl'    
import {
  uploadAudio
} from '../../../../../config/basicConfig' //语音保存地址

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
