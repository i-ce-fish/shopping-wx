// pages/home/index/main.js

let articles = require("../../../api/articles")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: [
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582049975121&di=09124e52fb2d9c56f849f4fa5fa2a2a1&imgtype=0&src=http%3A%2F%2Fimg.hkwb.net%2Fatt%2Fsite2%2F20171228%2Fe6805aee9afd115c2b948f9b12528964.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582049975121&di=09124e52fb2d9c56f849f4fa5fa2a2a1&imgtype=0&src=http%3A%2F%2Fimg.hkwb.net%2Fatt%2Fsite2%2F20171228%2Fe6805aee9afd115c2b948f9b12528964.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582049975121&di=09124e52fb2d9c56f849f4fa5fa2a2a1&imgtype=0&src=http%3A%2F%2Fimg.hkwb.net%2Fatt%2Fsite2%2F20171228%2Fe6805aee9afd115c2b948f9b12528964.jpg"
    ],
    activity: {},
    wear: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getWear()
    this.getAct()
  },

  /**
   * 生命周期函数--监听页面显示
   * 
   */
  onShow: function () {
    // 设置tabbar状态
    this.getTabBar().setData({
      activeTab: 0
    });
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
  go: function (e) {
    wx.$go(e.currentTarget.dataset.url)
  },
  getWear() {
    articles.getList({
      catalog_id: "2"
    }).then(res => {
      this.setData({
        wear: res.list
      })
    })
  },
  getAct() {
    articles.getList({
      catalog_id: "1"
    }).then(res => {
      this.setData({
        activity: res.list
      })
    })
  },
  onTapDetail(e) {
    wx.$go('/pages/home/detail/main', e.currentTarget.dataset)
  }
})