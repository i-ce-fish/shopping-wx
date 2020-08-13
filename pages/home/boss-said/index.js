let app = getApp()
let article = require('../../../api/article')
let catalog = require('../../../api/catalog')
const _ = require('../../../utils/lodash.min');

Page({
    data: {},
    onLoad(options) {
        this.init()
    },
    async init() {
        //todo 查询参数无效
        let {list: articleList} = await article.getList({is_header: true})
        let {list: catalogList} = await catalog.getList()

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
