// pages/my/user/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      img: "https://www.uniqlo.cn/hmall/test/u0000000016501/main/first/561/1.jpg",
      name:"麻混纺宽腿裤 (附腰带)(老爹裤)",
      code:"424932",
      category:"女装",
      min_size:"S",
      max_size:"XL",
      price:"499.00",
      colors:[
        {url:"https://www.uniqlo.cn/hmall/test/u0000000016501/chip/22/COL31.jpg"},
        {url:"https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL00.jpg"},
        {url:"https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL09.jpg"},
      ]
    },{
      img: "https://www.uniqlo.cn/hmall/test/u0000000016501/main/first/561/1.jpg",
      name:"麻混纺宽腿裤 (附腰带)(老爹裤)",
      code:"424932",
      category:"女装",
      min_size:"S",
      max_size:"XL",
      price:"499.00",
      colors:[
        {url:"https://www.uniqlo.cn/hmall/test/u0000000016501/chip/22/COL31.jpg"},
        {url:"https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL00.jpg"},
        {url:"https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL09.jpg"},
      ]
    },{
      img: "https://www.uniqlo.cn/hmall/test/u0000000016501/main/first/561/1.jpg",
      name:"麻混纺宽腿裤 (附腰带)(老爹裤)",
      code:"424932",
      category:"女装",
      min_size:"S",
      max_size:"XL",
      price:"499.00",
      colors:[
        {url:"https://www.uniqlo.cn/hmall/test/u0000000016501/chip/22/COL31.jpg"},
        {url:"https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL00.jpg"},
        {url:"https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL09.jpg"},
      ]
    },
  
  
  ]
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
  go: function (e) {
    wx.$go(e.currentTarget.dataset.url)
  }
})