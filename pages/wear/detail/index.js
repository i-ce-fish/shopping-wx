Page({
    data: {
        activeColl: ['1'],
        carousels: [
            {url: "https://www.uniqlo.cn/hmall/test/u0000000015853/model/rank1/first/591-822/1.jpg"},
            {url: 'https://www.uniqlo.cn/hmall/test/u0000000015853/model/rank2/first/591-822/1.jpg'},
            {url: "https://www.uniqlo.cn/hmall/test/u0000000015853/model/rank3/first/591-822/1.jpg"}
        ],
        wear: {
            title: '范爷范冰冰小海星牛仔外套童趣',
            content: ['穿法介绍：夏日都市养眼大气清纯气质财运商务通勤装', '穿法介绍：夏日都市养眼大气清纯气质财运商务通勤装', '穿法介绍：夏日都市养眼大气清纯气质财运商务通勤装',]
        },
        products: [{
            title: '高腰紧身喇叭牛仔九分裤(水洗产品)',
            img: 'https://www.uniqlo.cn/hmall/test/u0000000015128/main/first/1000/1.jpg',
            id: '123',
            intro: '搭配原因：黑色显瘦',
            price: '99.00'

        }, {
            title: '高腰紧身喇叭牛仔九分裤(水洗产品)',
            img: 'https://www.uniqlo.cn/hmall/test/u0000000015099/main/first/1000/1.jpg',
            id: '123',
            intro: '搭配原因：黑色显瘦',
            price: '99.00'

        }, {
            title: '高腰紧身喇叭牛仔九分裤(水洗产品)',
            img: 'https://www.uniqlo.cn/hmall/test/u0000000015100/sku/561/COL57.jpg',
            id: '123',
            intro: '搭配原因：黑色显瘦',
            price: '99.00'

        }, {
            title: '高腰紧身喇叭牛仔九分裤(水洗产品)',
            img: 'https://www.uniqlo.cn/hmall/test/u0000000017254/main/first/1000/1.jpg',
            id: '123',
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

    setDetail(e) {
        this.setData({
            [e.currentTarget.dataset.prop]: e.detail
        })
    },
    go: function (e) {
        wx.$go(e.currentTarget.dataset.url)
    }
});
