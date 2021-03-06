import * as catalog from "../../../api/catalog";

let app = getApp()
import _ from "../../../utils/lodash.min"
import {getArticles} from "../../../api/article";
import {getCatalogs} from "../../../api/catalog";

Page({
    data: {},
    onLoad(options) {
        this.init()
    },
    async init() {
        //todo 查询参数无效
        let {list: articleList} = await getArticles({is_header: true})
        let {list: catalogList} = await getCatalogs()

        catalogList = _.chain(catalogList)
            .forEach(o => {
                //根据catalog_id将articleList分类放入catalogList
                o.list = _.filter(articleList, ['catalog_id', o.id])
                //设置栏目头条
                //todo 该属性只能有一个的结果,现在是多个的数组类型
                o.head = _.filter(articleList, ['is_col_header', true])
            })
            .filter(o => {
                //过滤子list长度为0的栏目
                return o.list.length > 0
            })
            .value();

        this.setData({
            catalogList
        })
    },

    go(e) {
        let dataset = e.currentTarget.dataset;
        app.$router.push(dataset.url, {id: dataset.id})
    },
});
