import {getArticles} from "../../../api/article";

let app = getApp()
Page({
    data: {},
    onLoad: function (options) {
        this.init()
    },
    async init() {
        const {list} = await getArticles({catalog_id: app.$router.params.id})
        this.setData({
            list
        })
    }
});
