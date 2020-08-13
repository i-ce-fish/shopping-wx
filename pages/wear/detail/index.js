import tool from "../../../utils/tool";

let utils = require('../../../utils/index')
let app = getApp()
Component({
    data: {
        height: 750,
        virtualPostion: 750,
        scrollTop: 0,
        activeColl: ['1'],
        carousels: [
            {url: "https://www.uniqlo.cn/hmall/test/u0000000015347/model/rank1/first/591-822/1.jpg"},
            {url: "https://www.uniqlo.cn/hmall/test/u0000000015347/model/rank1/first/591-822/1.jpg"},
            {url: "https://www.uniqlo.cn/hmall/test/u0000000015347/model/rank1/first/591-822/1.jpg"},
            {url: "https://www.uniqlo.cn/hmall/test/u0000000015347/model/rank1/first/591-822/1.jpg"}
        ],
        wear: {
            title: '范爷范冰冰小海星牛仔外套童趣',
            intro: '穿法介绍：夏日都市养眼大气清纯气质财运商务通勤装\n' +
                '穿法介绍：夏日都市养眼大气清纯气质财运商务通勤装\n' +
                '穿法介绍：夏日都市养眼大气清纯气质财运商务通勤装'
        },
        products: [{
            intro: '搭配原因：黑色显瘦, 风格百搭, 细节特征和穿法的关联',
            minPrice: '99.99',
            maxPrice: '299.99',
            list: [
                {
                    id: '2',
                    name: "麻混纺半开领上衣1",
                    onsale_price: '99.00',
                    url: 'https://www.uniqlo.cn/hmall/test/u0000000015867/model/rank1/other1/196-273/2.jpg',
                    showFirst: true
                },
                {
                    id: '3',
                    name: "麻混纺半开领上衣2",
                    onsale_price: '199.00',
                    url: 'https://www.uniqlo.cn/hmall/test/u0000000015867/model/rank1/first/591-822/1.jpg'
                },
                {
                    id: '4',
                    name: "麻混纺半开领上衣3",
                    onsale_price: '299.00',
                    url: 'https://www.uniqlo.cn/hmall/test/u0000000015867/main/other4/1000/5.jpg'
                }
            ]
        }, {

            intro: '搭配原因：黑色显瘦, 风格百搭, 细节特征和穿法的关联',
            minPrice: '99.99',
            maxPrice: '299.99',
            list: [
                {
                    id: '1',
                    name: '雪纺打褶裙裤1',
                    onsale_price: '99.00',
                    url: 'https://www.uniqlo.cn/hmall/test/u0000000014626/model/rank2/other1/196-273/2.jpg',
                    showFirst: true

                },
                {
                    id: '2',
                    name: '雪纺打褶裙裤2',

                    onsale_price: '199.00',
                    url: 'https://www.uniqlo.cn/hmall/test/u0000000014626/model/rank1/other1/196-273/2.jpg'
                },
                {
                    id: '3',
                    name: '雪纺打褶裙裤3',
                    onsale_price: '299.00',
                    url: 'https://www.uniqlo.cn/hmall/test/u0000000013233/color/196-273/4.jpg'
                }
            ]
        }, {

            minPrice: '99.99',
            maxPrice: '299.99',
            list: [
                {
                    id: '1',
                    name: '平底拖鞋1',
                    onsale_price: '99.00',
                    url: 'https://www.uniqlo.cn/hmall/test/u0000000015347/main/other4/1000/5.jpg',
                    showFirst: true

                },
                {
                    id: '2',
                    name: '平底拖鞋2',
                    onsale_price: '199.00',
                    url: 'https://www.uniqlo.cn/hmall/test/u0000000015347/main/first/1000/1.jpg'
                },
                {
                    id: '3',
                    name: '平底拖鞋3',
                    onsale_price: '299.00',
                    url: 'https://www.uniqlo.cn/hmall/test/u0000000015347/model/rank3/other1/196-273/2.jpg'
                }
            ]

        }],
        topStickyList: [
            {
                id: '1',
                name: "麻混纺半开领上衣1",
                onsale_price: '99.00',
                url: 'https://www.uniqlo.cn/hmall/test/u0000000015867/model/rank1/other1/196-273/2.jpg'
            },
            {
                id: '1',
                name: '雪纺打褶裙裤1',
                onsale_price: '99.00',
                url: 'https://www.uniqlo.cn/hmall/test/u0000000014626/model/rank2/other1/196-273/2.jpg'
            }, {
                id: '1',
                name: '平底拖鞋1',
                onsale_price: '99.00',
                url: 'https://www.uniqlo.cn/hmall/test/u0000000015347/main/other4/1000/5.jpg'
            },
        ]

    },


    //{{height}}+150+20

    methods: {

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

        //页面滚动执行方式, 单位px, todo 这种方式无法执行？
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
         *
         * todo  fixed元素抖动、官方bug
         * https://developers.weixin.qq.com/community/develop/doc/0000aab3a04f706b7e38e19bc5b400?highLine=fixed%25E5%2585%2583%25E7%25B4%25A0%25E6%258A%2596%25E5%258A%25A8
         */
        onPageScroll: tool.throttle(function (e) {
            this.obsImgHeight(e[0])
        }, 50),

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
            let minHeight = 300

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
                height_ = minHeight
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
            height_ = wHeight - position > minHeight ? wHeight - position : this.data.height
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
        go(e) {
            let dataset = e.currentTarget.dataset;
            app.$router.push(dataset.url, {id: dataset.id})
        },

        //大图预览图片列表
        tapImgs(e) {
            let urls = this.data.carousels.map(item => (item.url))
            wx.previewImage({
                current: this.data.carousels[e.currentTarget.dataset.index].url, // 当前显示图片的http链接
                urls: urls // 需要预览的图片http链接列表
            })
        },

        /**
         *    点击中部商品导航栏, 滚动到虚拟位置（偏移：顶部固定栏+外边距）
         *
         * @param e
         */
        tapSticky(e) {
            this.setData({
                // {{height}}（图片Height:[375,750]） + 150（商品导航） + 20 （外边距）+todo 穿法介绍节点的高度（计算得出）
                virtualPostion: this.data.height + 150 + 20
            })

            wx.pageScrollTo({selector: ".product-item-" + e.detail.index, duration: 500})

            //todo 计算实际节点高度的方法

            // const query = wx.createSelectorQuery()
            // query.select('#the-id').boundingClientRect()
            // query.selectViewport().scrollOffset()
            // query.exec(function(res){
            //     res[0].top       // #the-id节点的上边界坐标
            //     res[1].scrollTop // 显示区域的竖直滚动位置
            // })
        },
        tapFeedback(e) {
            app.$router().push('home/design/design-for-me')
        }
    }
})
