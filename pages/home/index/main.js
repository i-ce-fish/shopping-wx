// pages/home/index/main.js

let article = require("../../../api/article")
let customer = require("../../../api/customer")
let catalog = require("../../../api/catalog")

const filter = require('../../../utils/filter');


Page(filter.loginCheck({

    /**
     * 页面的初始数据
     */
    data: {
        imgs: [
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582049975121&di=09124e52fb2d9c56f849f4fa5fa2a2a1&imgtype=0&src=http%3A%2F%2Fimg.hkwb.net%2Fatt%2Fsite2%2F20171228%2Fe6805aee9afd115c2b948f9b12528964.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582049975121&di=09124e52fb2d9c56f849f4fa5fa2a2a1&imgtype=0&src=http%3A%2F%2Fimg.hkwb.net%2Fatt%2Fsite2%2F20171228%2Fe6805aee9afd115c2b948f9b12528964.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582049975121&di=09124e52fb2d9c56f849f4fa5fa2a2a1&imgtype=0&src=http%3A%2F%2Fimg.hkwb.net%2Fatt%2Fsite2%2F20171228%2Fe6805aee9afd115c2b948f9b12528964.jpg"
        ],
        allArticle: [],
        headerLines: [],
        user: {},
        catalogs: []
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
        this.getHeadline()
        this.getUserInfo()
        this.getCatalogs()
    },

    /**
     * 生命周期函数--监听页面显示
     *
     */
    onShow: function () {
        // 设置tabbar状态
        this.getTabBar().setData({
            activeTab: 0
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
    go: function (e) {
        wx.$go(e.currentTarget.dataset.url)
    },

    onTapDetail(e) {
        wx.$go('/pages/home/detail/main', e.currentTarget.dataset)
    },

//  init data
    //todo 登录成功需要获取用户id
    getUserInfo() {
        customer.get(2).then(res => {
            this.setData({user: res})
        })
    },

//    获取头条
    getHeadline() {
        //todo 搜索条件无效
        article.getList({is_header: true}).then(res => {
            this.setData({
                allArticle: res.list
            })
            const list = res.list.filter((item) => {
                //手动过滤数据
                if (item.is_header = true) {
                    return item
                }

            })
            this.setData({headerLines: list})

        });

    },
//    获取栏目
    getCatalogs() {
        catalog.getList({parent_id: 0}).then(res => {
            //遍历再遍历，将文章放入目录中作为子数组
            res.list.forEach(item => {
                item.childList = []
                this.data.allArticle.forEach(article => {
                    if (article.catalog_id === item.id && article.is_col_header) {
                        item.childList.push(article)
                    }
                })
            })
            this.setData({
                catalogs: res.list
            })
        })
    }

}))
