// pages/shopping/cart/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testImg: "https://source.unsplash.com/random",

    dataList: [{
      id: 1,
      buyNum: 2
    }, {
      id: 2,
      buyNum: 1
    }],
    isEdit: false,
    pageIndex: 1,
    loadding: false,
    pullUpOn: true

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
    this.getTabBar().setData({
      activeTab: 2
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

  changeNum: function(e) {
    console.log(e)
    let value = `dataList[${e.index}].buyNum`
      this[value]= e.value
  },
  handlerButton: function(e) {
    console.log(e)
    let index = e.detail.index;
    let item = e.detail.item;

    wx.showToast({
      title: `商品id：${item.id}，按钮index：${index}`,
      icon:"none"
    })
  },
  editGoods: function() {


    this.setData({isEdit : !isEdit})


  },
  detail: function() {
    wx.navigateTo({
      url: '../../productDetail/productDetail'
    })
  },
  btnPay() {
    wx.navigateTo({
      url: '../submitOrder/submitOrder'
    })
  },

  onCloseSwipe(e) {
    console.log(e)
    e.detail.instance.close()
  }
  ,
  go:function(e){
    wx.$go(e.currentTarget.dataset.url)
  }
})
