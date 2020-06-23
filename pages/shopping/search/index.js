Component({
    data: {
        scrollTop: 0,
        //当前点击的tab
        active: '0',
        //价格排序方向
        priceArrow: false,
        //列表视图切换
        listView: false,

        //条件筛选tab标签页，api获取的数据和用来显示的tab分开
        filterTabs: [
            {icon: 'apps-o', title: '风格'},
            {icon: 'apps-o', title: '尺码'},
            {icon: 'apps-o', title: '颜色'},
            {icon: 'apps-o', title: '价格'}
        ],
        //todo get 可筛选条件from api ， 每次点击都重新请求可筛选条件和总件数，和商品
        //todo 分类加入筛选条件
        // 几个tab的数据格式保持一致，方便监听、重置等操作的遍历
        filter: {
            style: {
                item: [
                    {
                        item: ["二级分类1", '二级分类2', '二级分类3'],
                        name: "二级分类"
                    },
                    {
                        item: [
                            "锦纶",
                            "氨纶",
                            "棉",
                            "聚酯纤维"
                        ],
                        name: "材质"
                    }, {
                        item: [
                            "2020年春季",
                            "2019年春季",
                            "2019年秋季",
                            "2020年夏季",
                            "2019年夏季"
                        ],
                        name: "上市季节"
                    },
                    {
                        item: [
                            "促销活动",
                            "限时特优",
                            "支持门店自提",
                        ],
                        name: "其他条件"
                    },
                    {
                        item: [
                            "男装",
                            "女装"
                        ],
                        name: "适用性别"
                    }],
                name: '风格'
            },
            size: {
                item: [
                    {
                        "sizeValue": "XS",
                        "sizeCode": "SMA002",
                    },
                    {
                        "sizeValue": "S",
                        "sizeCode": "SMA003",
                    },
                    {
                        "sizeValue": "M",
                        "sizeCode": "SMA004",
                    },
                    {
                        "sizeValue": "L",
                        "sizeCode": "SMA005",
                    },
                    {
                        "sizeValue": "XL",
                        "sizeCode": "SMA006",
                    },
                    {
                        "sizeValue": "XXL",
                        "sizeCode": "SMA007",
                    },
                    {
                        "sizeValue": "3XL",
                        "sizeCode": "SMA008",
                    },
                    {
                        "sizeValue": "4XL",
                        "sizeCode": "SMA009",
                    }
                ],
                name: "尺码"
            },
            color: {
                item: [
                    {
                        "colorName": "白色系",
                        "background": "#FFFFFF",
                        "colorNo": "COL00",
                        "fontColor": "#000000"
                    },
                    {
                        "colorName": "灰色系",

                        "background": "#D4D4D4",
                        "colorNo": "COL06",
                        "fontColor": "#000000"
                    },
                    {
                        "colorName": "黑色系",

                        "background": "#262626",
                        "colorNo": "COL09",
                        "fontColor": "#FFFFFF"
                    },
                    {
                        "colorName": "粉色系",

                        "background": "#F5BCC1",
                        "colorNo": "COL11",
                        "fontColor": "#000000"
                    },
                    {
                        "colorName": "红色系",

                        "background": "#E82525",
                        "colorNo": "COL14",
                        "fontColor": "#000000"
                    },
                    {
                        "colorName": "橙色系",

                        "background": "#F2A427",
                        "colorNo": "COL28",
                        "fontColor": "#000000"
                    },
                    {
                        "colorName": "米色系",

                        "background": "#E6E2CC",
                        "colorNo": "COL32",
                        "fontColor": "#000000"
                    },
                    {
                        "colorName": "棕色系",

                        "background": "#714E38",
                        "colorNo": "COL38",
                        "fontColor": "#FFFFFF"
                    },
                    {
                        "colorName": "黄色系",

                        "background": "#FFFD53",
                        "colorNo": "COL43",
                        "fontColor": "#000000"
                    },
                    {
                        "colorName": "绿色系",

                        "background": "#2F8C2A",
                        "colorNo": "COL50",
                        "fontColor": "#FFFFFF"
                    },
                    {
                        "colorName": "蓝色系",

                        "background": "#2D58CF",
                        "colorNo": "COL69",
                        "fontColor": "#FFFFFF"
                    },
                    {
                        "colorName": "紫色系",
                        "background": "#6D2B7A",
                        "colorNo": "COL77",
                        "fontColor": "#FFFFFF"
                    }
                ],
                name: "颜色"
            },
            price: {
                item: [
                    {title: "￥100以下", value: "<100"}, {title: "￥100-￥200", value: "<=100"},
                    {title: "￥200-￥300", value: "200-300"},
                    {title: "￥300以上", value: ">=300"}
                ],
                name: "价格",
                //todo 设置价格区间
                max: '',
                min: ''
            },
        },

        products: [{
            img: "https://www.uniqlo.cn/hmall/test/u0000000016501/main/first/561/1.jpg",
            name: "麻混",
            code: "424932",
            category: "女装",
            min_size: "S",
            max_size: "XL",
            price: "499.00",
            colors: [
                {url: "https://www.uniqlo.cn/hmall/test/u0000000016501/chip/22/COL31.jpg"},
                {url: "https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL00.jpg"},
                {url: "https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL09.jpg"},
            ]
        }, {
            img: "https://www.uniqlo.cn/hmall/test/u0000000016501/main/first/561/1.jpg",
            name: "麻混纺宽腿裤 (附腰带)(老爹裤)",
            code: "424932",
            category: "T恤2",
            min_size: "S",
            max_size: "XL",
            price: "499.00",
            colors: [
                {url: "https://www.uniqlo.cn/hmall/test/u0000000016501/chip/22/COL31.jpg"},
                {url: "https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL00.jpg"},
                {url: "https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL09.jpg"},
            ]
        }, {
            img: "https://www.uniqlo.cn/hmall/test/u0000000016501/main/first/561/1.jpg",
            name: "麻混纺宽腿裤 (附腰带)(老爹裤)",
            code: "424932",
            category: "T恤13",
            min_size: "S",
            max_size: "XL",
            price: "499.00",
            colors: [
                {url: "https://www.uniqlo.cn/hmall/test/u0000000016501/chip/22/COL31.jpg"},
                {url: "https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL00.jpg"},
                {url: "https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL09.jpg"},
            ]
        },
        ]
    },
    methods: {
        onLoad: function (options) {
            // todo 接受参数  get api
            console.log(options.keyword)

        },
        //页面滚动执行方式
        onPageScroll(e) {
            this.setData({
                scrollTop: e.scrollTop
            })
        },
        tapListView() {
            this.setData({
                listView: !this.data.listView
            })
        },
        setDetail(e) {
            this.setData({
                [e.currentTarget.dataset.prop]: e.detail
            })
        },
        tapTab(e) {
            //todo  set product from api
            this.setData({
                active: e.currentTarget.dataset.id
            })
            if (e.currentTarget.dataset.id === '3') {
                this.setData({
                    priceArrow: !this.data.priceArrow
                })
            }
        },
        tapListView() {
            this.setData({
                listView: !this.data.listView
            })
        },


    },


});
