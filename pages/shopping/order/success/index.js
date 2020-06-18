// pages/shopping/order/success/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderId: "",
        bossWxId: "wxid_34567890"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        this.setData({
            orderId: "345t6567"
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
    onCopy() {
        wx.setClipboardData({
            data: this.data.bossWxId,
            success(res) {
                wx.$toast('复制成功')
            }
        })
    },
    onConfirm() {
        wx.switchTab({url: '/pages/home/index/index'});
    }
})