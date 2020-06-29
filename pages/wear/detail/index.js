import tool from "../../../utils/tool";

let utils = require('../../../utils/index')

Page({
    data: {
        height: 750,
        scrollTop: 0,
        activeColl: ['1'],
        carousels: [
            {url: "https://www.uniqlo.cn/hmall/test/u0000000015853/model/rank1/first/591-822/1.jpg"},
            {url: 'https://www.uniqlo.cn/hmall/test/u0000000015853/model/rank2/first/591-822/1.jpg'},
            {url: 'https://www.uniqlo.cn/hmall/test/u0000000015853/model/rank2/first/591-822/1.jpg'},
            {url: "https://www.uniqlo.cn/hmall/test/u0000000015853/model/rank3/first/591-822/1.jpg"},
            {url: "https://www.uniqlo.cn/hmall/test/u0000000015853/model/rank3/first/591-822/1.jpg"}
        ],
        wear: {
            title: '范爷范冰冰小海星牛仔外套童趣',
            content: ['穿法介绍：夏日都市养眼大气清纯气质财运商务通勤装', '穿法介绍：夏日都市养眼大气清纯气质财运商务通勤装', '穿法介绍：夏日都市养眼大气清纯气质财运商务通勤装',]
        },
        products: [{
            title: '高腰紧身喇叭牛仔九分裤(水洗产品)',
            imgs: [
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000017254/main/first/1000/1.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000017254/main/other1/1000/2.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000017254/main/other4/1000/5.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000017254/main/other3/1000/4.jpg'}
            ],
            id: '123',
            intro: '搭配原因：黑色显瘦',
            price: '99.00',


        }, {
            title: '高腰紧身喇叭牛仔九分裤(水洗产品)',
            imgs: [
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000014267/main/first/1000/1.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000014267/main/other1/1000/2.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000014267/main/other3/1000/4.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000014267/main/other4/1000/5.jpg'}
            ],
            id: '123',
            intro: '搭配原因：黑色显瘦',
            imgs: [
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000017933/sku/561/COL47.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000017933/main/other1/1000/2.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000017933/main/other2/1000/3.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000017933/main/other3/1000/4.jpg'}
            ],
            price: '99.00'

        }, {
            title: '高腰紧身喇叭牛仔九分裤(水洗产品)',
            imgs: [
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000017950/main/first/1000/1.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000017950/main/other1/1000/2.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000017950/main/other2/1000/3.jpg'}
            ],
            id: '123',
            intro: '搭配原因：黑色显瘦',
            price: '99.00'

        }, {
            title: '高腰紧身喇叭牛仔九分裤(水洗产品)',
            imgs: [
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000017939/main/first/1000/1.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000017939/main/other1/1000/2.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000017939/main/other2/1000/3.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000017939/main/other3/1000/4.jpg'}
            ], id: '123',
            intro: '搭配原因：黑色显瘦',
            price: '99.00'

        }],

    },
    onLoad: function (options) {

    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        return {
            title: this.data.wear.title,
            //todo add id
            path: '/pages/wear/index?id=' + 123
        };
    },

    //页面滚动执行方式, 单位px, todo 这种方式无法执行？？？
    // onPageScroll(e) {
    //     tool.throttle(function (msg) {
    //         console.log('throttle')
    //     })
    //
    // },
    //

    /**
     * 节流，提高性能
     *
     * 实际上需要频繁setData的只有缩放时的一小段距离，因此可以设置较小的interval
     */
    onPageScroll: tool.throttle(function (e) {
        this.obsImgHeight(e[0])
    }, 10),

    /**
     * 动态设置主图高度
     *
     * todo 优化代码逻辑
     * @param e
     */
    obsImgHeight(e) {
        let position = utils.px2rpx(e.scrollTop)
        let wHeight = wx.getSystemInfoSync().windowHeight;
        //最小高度为 375，最大750rpx
        let height_ = 0

        // 超出一定的区间[0, 600)不需要setData
        if (position <= 0) {
            height_ = 750
            // height不变不需要setData
            if (height_ === this.data.height) {
                return;
            }
            this.setData({
                height: height_
            });
            return
        }
        if (position > 600) {
            height_ = 375
            //减少不必要的setData
            if (height_ === this.data.height) {
                return;
            }
            this.setData({
                height: height_
            })
            return;
        }
        //根据滚动距离计算图片尺寸
        height_ = wHeight - position > 375 ? wHeight - position : this.data.height
        this.setData({
            height: height_
        })

    },

    setDetail(e) {
        this.setData({
            [e.currentTarget.dataset.prop]: e.detail
        })
    }
    ,
    go: function (e) {
        wx.$go(e.currentTarget.dataset.url)
    }
})
;
