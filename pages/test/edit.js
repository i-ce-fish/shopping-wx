// pages/test/edit.js

let blog = require('../../api/blog')

Page({

  /**
   * 页面的初始数据
   */

  data: {
    // id: 0,
    // title: "",
    // body: ""
    item: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    blog.get(options.id).then(
      (res) => {
        this.setData({
          item: res
        })
      }
    )
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
  set(e) {
    let prop = e.currentTarget.dataset.prop
    this.setData({
      [`item.${prop}`]: e.detail.value
    })
  },

  put() {
    blog.put(this.data.item.id,
      this.data.item
    ).then(
      (res) => {
        wx.$go("/pages/test/main")
      }
    )
  },
  del() {
    const res = blog.del(this.data.id).then(
      res => {
        wx.$go("/pages/test/main")
      }
    )
  },
})