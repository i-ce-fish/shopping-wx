// pages/test/main.js


let blog = require('../../api/blog')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getlist()
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

  get() {
  },
  getlist() {
    blog.getList().then(res => {
      this.setData({
        list: res
      })
    })

  },
  add() {
    blog.add({
        title: "标题",
        body: `内容${new Date()}`
      })
      .then(
        res => {
          this.getlist()
        }
      )
  },
  put() {

    const res = blog.put(this.data.list.pop().id, {
      title: "标题",
      body: "修改内容"
    }).then(
      res => {
        this.getlist()
      }
    )
  },
  del() {
    const res = blog.del(this.data.list.pop().id).then(
      res => {
        this.getlist()
      }
    )
  },
  go(e) {
    let data = e.currentTarget.dataset
    let id = data.item ? data.item.id : null
    wx.$go(data.url, {
      id: id
    })
  }
})