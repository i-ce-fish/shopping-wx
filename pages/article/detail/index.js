// pages/home/detail/main.js

let articles = require("../../../api/article")
let _ = require('../../../utils/lodash.min')
let app = getApp()
//在使用的View中引入WxParse模块
// var WxParse = require('../../../components/wxParse/wxParse');
// let util = require('../../../utils')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // title: "",
        // body: "",
        scrollTop: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        this.init()

    },

    async init() {
        const res = await articles.get(app.$router.params.id)
        /**
         *  todo
         *  匹配的范围太大, 可能有bug
         *
         * 强行设置图片最大宽度, 防止图片溢出屏幕
         * @type {string}
         */
        res.body = _.replace(res.body, /<img src="/, '<img style="max-width:100%" src="')
        this.setData({
            ...res
        })
    },
    //页面滚动执行方式
    onPageScroll(e) {
        this.setData({
            scrollTop: e.scrollTop
        })
    },

})
