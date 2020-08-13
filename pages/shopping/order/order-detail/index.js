// pages/shopping/order/order-detail/main.js
let app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        testImg: "https://source.unsplash.com/random",

        //1-待付款 2-付款成功 3-待收货 4-订单已完成 5-交易关闭
        status: 1
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

    getImg: function (status) {
        return this.webURL + ["img_order_payment3x.png", "img_order_send3x.png", "img_order_received3x.png",
            "img_order_signed3x.png", "img_order_closed3x.png"
        ][status - 1]
    },
    getStatusText: function (status) {
        return ["等待您付款", "付款成功", "待收货", "订单已完成", "交易关闭"][status - 1]
    },
    getReason: function (status) {
        return ["剩余时间", "等待卖家发货", "还剩X天XX小时自动确认", "", "超时未付款，订单自动取消"][status - 1]
    }

})
