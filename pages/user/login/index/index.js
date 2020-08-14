// pages/user/login/main.js


import {px2rpx} from "../../../../utils/wx-util";
import {login, wxLogin} from "../../../../api/user";

let app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userForm: {
            password: 'test',
            username: 'maxazure'
        },
        cardHeight: '',
        image: "/static/img/qrcode.jpg"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        // if (wx.getStorageSync('token')) {
        //     this.goHome()
        // }
        this.init()

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
    async login() {
        const res = await login(this.data.userForm)
        wx.setStorageSync('token', res.token)
        // globalData.userinfo = "test info"
        this.goHome()

    },
    goHome() {
        app.$router.switchTab('home')
    },
    init() {
        // card高度为整个视口
        let cardHeight = px2rpx(wx.getSystemInfoSync().windowHeight) - 200
        this.setData({
            cardHeight: cardHeight + 'rpx'
        })
        // let cardWidth = wx.$rpx(wx.getSystemInfoSync().windowWidth)-50
    },
    wxLogin() {
        wx.login({
            success: async (res) => {
                res = await wxLogin({code: res.code})
                wx.$toast(res)

            }
        })
    },
    getPhoneNumber(e) {
        console.log(e.detail.errMsg)
        console.log(e.detail.iv)
        console.log(e.detail.encryptedData)
    },
    phoneLogin() {
        app.$router.push('user/login/phone')
    },
    //test
    // onPopupImage(){
    //     wx.previewImage({
    //         current: this.data.image,
    //         urls: [this.data.image]
    //     })
    // },
    // onSetClip(){
    //     wx.setClipboardData({
    //         data: 'data',
    //         success (res) {
    //             wx.getClipboardData({
    //                 success (res) {
    //                     wx.$toast(res.data)
    //                 }
    //             })
    //         }
    //     })
    // },
    // onGetClip(){
    //     wx.getClipboardData({
    //         success (res){
    //            wx.$toast(res)
    //         }
    //     })
    // }

})
