// pages/shopping/order/paid-order/main.js
let app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        testImg: "https://source.unsplash.com/random",

        active: 0,

        tabs: [{
            name: "全部"
        }, {
            name: "待付款"
        }, {
            name: "待发货"
        }, {
            name: "待收货"
        }, {
            name: "待评价"
        }],
        currentTab: 0,
        pageIndex: 1,
        loadding: false,
        pullUpOn: true,
        scrollTop: 0

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
   go(e) {
        let dataset = e.currentTarget.dataset;
        app.$router.push(dataset.url, {id: dataset.id})
    },

    change(e) {
        this.currentTab = e.index
    },
    detail() {
       app.$router.push('shopping/order/order-detail')
    },
    onPullDownRefresh() {
        // setTimeout(() => {
        // 	uni.stopPullDownRefresh()
        // }, 200);
    },
    onReachBottom() {
        //只是测试效果，逻辑以实际数据为准
        // this.loadding = true
        // this.pullUpOn = true
        // setTimeout(() => {
        // 	this.loadding = false
        // 	this.pullUpOn = false
        // }, 1000)
    },
    onPageScroll(e) {
        this.scrollTop = e.scrollTop;
    }
})
