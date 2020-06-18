// pages/catagory/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history: [
      "羽绒",
      "T恤",
      "男",
      "牛仔裤",
      "毛衣",
      "衬衫",
      "夹克"
    ],
    hot: [
      "德利赫特",
      "托雷斯",
      "早安D站",
      "D站观点",
      "德利赫特",
      "美洲杯",
      "华为手机",
      "C罗",
      "自热火锅",
    ],
    key: "",
    showActionSheet: false,
    tips: "确认清空搜索历史吗？"
    ,
    actions: [
      { name: '选项1', color: '07c160' },
      { name: '选项2', color: '07c160' },
      { name: '禁用选项', disabled: true }]

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

  back: function() {
    wx.navigateBack();
  },
  input: function(e) {
    let key = e.detail.value;
    this.setData({key:key})
  },
  cleanKey: function() {

    this.setData({key:""})

  },
  closeActionSheet: function() {

    this.setData({showActionSheet :false })

  },
  openActionSheet: function() {

    this.setData({ showActionSheet:true })

  },
  itemClick: function(e) {
    console.log(e)
    let index = e.detail.index;
    if (index == 0) {
      this.setData({ showActionSheet: false,history:[]})
    }
  }  ,
  go:function(e){
    wx.$go(e.currentTarget.dataset.url)
  }

})
