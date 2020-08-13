let app = getApp()
const article = require('../../../api/article')
Page({
    data: {},
    onLoad: function (options) {
        this.init()
    },
    async init() {
        const {list} = await article.getList({catalog_id: app.$router.params.id})
        this.setData({
            list
        })
    }
});
