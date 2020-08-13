// pages/rule/integral/main.js
let app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {

        collapseSize: 4,
        activeNames: [],
        integralWay: [
            "1、购物1元，赠送1分。",
            "2、促销时，购物1元，可能获得双倍积分。",
            "3、给店铺帮忙（介绍顾客、提建议等等），也能获得积分赠送。",
            "4、本店积分能兑换现金。",
            "5、详情请关注店铺公告。"
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
        this.init()

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

    onChange(event) {
        console.log(event)
        this.setData({
            activeNames: event.detail
        })
    },

    /**
     * 通过递归，【同步】执行自动打开折叠面板
     */
    init() {

        //结束递归的条件
        if (this.data.activeNames.length < this.data.collapseSize) {
            setTimeout(() => {
                //业务代码
                let list = this.data.activeNames
                list.push((list.length + 1).toString())
                this.setData({
                    activeNames: list
                })

                //递归
                this.init()
            }, 600)
        }
    }


})
