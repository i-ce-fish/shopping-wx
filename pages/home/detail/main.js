// pages/home/detail/main.js

let articles = require("../../../api/article")
//在使用的View中引入WxParse模块
var WxParse = require('../../../components/wxParse/wxParse');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    body: "",
    scrollTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    articles.get(options.id).then(res => {
      this.setData({
        ...res
      })
      // todo  15px => 30rpx
      WxParse.wxParse('article', 'html', res.body, this, wx.$px(30));

    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //页面滚动执行方式
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  }
})
