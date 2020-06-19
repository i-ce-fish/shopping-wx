//logs.js
const util = require('../../utils/index.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }  ,
  go:function(e){
    wx.$go(e.currentTarget.dataset.url)
  }
})
