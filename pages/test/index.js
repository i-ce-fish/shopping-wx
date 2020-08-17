import {rpx2px} from "../../utils/wx-util";
import {getGoods} from "../../api/goods";

const app = getApp()
const createRecycleContext = require('miniprogram-recycle-view')
Component({
    data: {

        //SQL的起始页
        page: 1,
        //分页
        pagesize: 10,
        //列表总长
        total: 0,
        //已加载长度
        currentTotal: 0
    },


    methods: {
        async onReady() {
            this.initCtx()
            let res = await this.getList()
            this.ctx.append(res.list)
        },
        //初始化ctx对象
        initCtx() {
            let this_ = this
            this.ctx = createRecycleContext({
                id: 'recycleId',
                dataKey: 'recycleList',
                page: this_,
                itemSize: {
                    width: rpx2px(750),
                    height: rpx2px(300)
                }
            })
        },
        async getList() {
            let {page, pagesize} = this.data
            const res = await getGoods({page, pagesize,noLoading:true})
            this.setData({
                total: res.pagination.total,
                currentTotal: this.data.currentTotal + res.list.length
            })
            return res
        },
        async reachBottom() {

            //当已加载的列表长度小于数据库的长度,才继续发请求
            if (this.data.currentTotal < this.data.total) {
                this.setData({
                    page: this.data.page + 1
                });
                const res = await this.getList()
                this.ctx.append(res.list)
            }
        },

    }
})


