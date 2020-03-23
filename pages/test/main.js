// pages/test/main.js


let blog = require('../../api/blog')
let user = require('../../api/user')
let globalData = getApp().globalData;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    item: {
      email: "maxazure@gmail.com",
      password: "11111111"
    }
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
    // this.getlist()
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

  get() {},
  login() {
    user.login(this.data.item).then(res => {
      wx.setStorageSync('token', res.data.token),
        globalData.userinfo = "test info"
    })
  },
  getToken() {
    wx.$toast(wx.getStorageSync('token'));
    setTimeout((() => {
        wx.$toast(globalData.userinfo)
      }),
      2000)
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