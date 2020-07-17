Component({
    data: {
        scrollTop: 0,
        //当前点击的tab
        active: '0',
        //价格排序方向
        priceArrow: false,
        //列表视图切换
        listView: true,

        //条件筛选tab标签页，api获取的数据和用来显示的tab分开
        // filterTabs: [
        //     {icon: 'apps-o', title: '风格'},
        //     {icon: 'apps-o', title: '尺码'},
        //     {icon: 'apps-o', title: '颜色'},
        //     {icon: 'apps-o', title: '价格'}
        // ],

        filterData: [
            {
                item: ['帅哥', '美女', '倾向'],
                title: "适穿性别",
                type: 'checkbox'
            },
            {
                item: [
                    "幼童",
                    "小童",
                    "大童",
                    "小学生",
                    "初高中",
                    "少女",
                    "少淑",
                    "中青年",
                    "中年",
                    "中老年",
                    "老年",
                    "自定义"

                ],
                title: "适穿年龄",
                type: "checkbox"
            }, {
                item: [
                    "较胖",
                    "偏胖",
                    "标准身型",
                    "偏瘦",
                    "较瘦"
                ],
                title: "体型轮廓",
                type: "checkbox"

            },
            {
                item: [
                    "肚子大",
                    "皮肤黑",
                    "腿粗",
                    "平胸",
                    "脖子短",
                    "自定义"
                ],
                title: "特殊修饰",
                type: "checkbox"

            },
            {
                item: [
                    "芸芸众生",
                    "有点个性",
                    "非常个性"
                ],
                title: "个性程度",
                type: "radio"

            },
            {
                item: [
                    "明星",
                    "卡通动漫",
                    "街头达人",
                    "其他来源"
                ],
                title: "穿法来源"
                , type: "checkbox"

            },
            {
                item: [
                    "港台",
                    "中心城市",
                    "上海中学生",
                    "巴黎街头",
                    "娱乐圈",
                    "剑桥哈佛",
                    "娱乐圈",
                    "日韩"
                ],
                title: "流行地区", type: "checkbox"

            },
            {
                item: [
                    "正式商务",
                    "通勤上班",
                    "居家舒适",
                    "户外休闲",
                    "活力运动",
                    "性感夜店",
                    "礼服场合",
                    "旅游度假",
                    "其他场合"
                ],
                title: "穿着场合", type: "checkbox"

            },
            {
                item: [
                    "简约",
                    "森女",
                    "商务",
                    "少淑",
                    "呆萌",
                    "民族",
                    "学院",
                    "瑞丽",
                    "洛丽塔",
                    "军旅",
                    "轻奢",
                    "自定义"
                ],
                title: "特殊修饰", type: "checkbox"

            }, {
                item: ['100以下', '100-200', '200-300', '500以上'],
                title: '价格', type: "checkbox"

            }
        ]
        ,

        //todo get 可筛选条件from api ， 每次点击都重新请求可筛选条件和总件数，和商品
        //todo 分类加入筛选条件
        // 几个tab的数据格式保持一致，方便监听、重置等操作的遍历

        // filter: {
        //     style: {
        //         item: [
        //             {
        //                 item: ["二级分类1", '二级分类2', '二级分类3'],
        //                 name: "二级分类"
        //             },
        //             {
        //                 item: [
        //                     "锦纶",
        //                     "氨纶",
        //                     "棉",
        //                     "聚酯纤维"
        //                 ],
        //                 name: "材质"
        //             }, {
        //                 item: [
        //                     "2020年春季",
        //                     "2019年春季",
        //                     "2019年秋季",
        //                     "2020年夏季",
        //                     "2019年夏季"
        //                 ],
        //                 name: "上市季节"
        //             },
        //             {
        //                 item: [
        //                     "促销活动",
        //                     "限时特优",
        //                     "支持门店自提",
        //                 ],
        //                 name: "其他条件"
        //             },
        //             {
        //                 item: [
        //                     "男装",
        //                     "女装"
        //                 ],
        //                 name: "适用性别"
        //             }],
        //         name: '风格'
        //     },
        //     size: {
        //         item: [
        //             {
        //                 "sizeValue": "XS",
        //                 "sizeCode": "SMA002",
        //             },
        //             {
        //                 "sizeValue": "S",
        //                 "sizeCode": "SMA003",
        //             },
        //             {
        //                 "sizeValue": "M",
        //                 "sizeCode": "SMA004",
        //             },
        //             {
        //                 "sizeValue": "L",
        //                 "sizeCode": "SMA005",
        //             },
        //             {
        //                 "sizeValue": "XL",
        //                 "sizeCode": "SMA006",
        //             },
        //             {
        //                 "sizeValue": "XXL",
        //                 "sizeCode": "SMA007",
        //             },
        //             {
        //                 "sizeValue": "3XL",
        //                 "sizeCode": "SMA008",
        //             },
        //             {
        //                 "sizeValue": "4XL",
        //                 "sizeCode": "SMA009",
        //             }
        //         ],
        //         name: "尺码"
        //     },
        //     color: {
        //         item: [
        //             {
        //                 "colorName": "白色系",
        //                 "background": "#FFFFFF",
        //                 "colorNo": "COL00",
        //                 "fontColor": "#000000"
        //             },
        //             {
        //                 "colorName": "灰色系",
        //
        //                 "background": "#D4D4D4",
        //                 "colorNo": "COL06",
        //                 "fontColor": "#000000"
        //             },
        //             {
        //                 "colorName": "黑色系",
        //
        //                 "background": "#262626",
        //                 "colorNo": "COL09",
        //                 "fontColor": "#FFFFFF"
        //             },
        //             {
        //                 "colorName": "粉色系",
        //
        //                 "background": "#F5BCC1",
        //                 "colorNo": "COL11",
        //                 "fontColor": "#000000"
        //             },
        //             {
        //                 "colorName": "红色系",
        //
        //                 "background": "#E82525",
        //                 "colorNo": "COL14",
        //                 "fontColor": "#000000"
        //             },
        //             {
        //                 "colorName": "橙色系",
        //
        //                 "background": "#F2A427",
        //                 "colorNo": "COL28",
        //                 "fontColor": "#000000"
        //             },
        //             {
        //                 "colorName": "米色系",
        //
        //                 "background": "#E6E2CC",
        //                 "colorNo": "COL32",
        //                 "fontColor": "#000000"
        //             },
        //             {
        //                 "colorName": "棕色系",
        //
        //                 "background": "#714E38",
        //                 "colorNo": "COL38",
        //                 "fontColor": "#FFFFFF"
        //             },
        //             {
        //                 "colorName": "黄色系",
        //
        //                 "background": "#FFFD53",
        //                 "colorNo": "COL43",
        //                 "fontColor": "#000000"
        //             },
        //             {
        //                 "colorName": "绿色系",
        //
        //                 "background": "#2F8C2A",
        //                 "colorNo": "COL50",
        //                 "fontColor": "#FFFFFF"
        //             },
        //             {
        //                 "colorName": "蓝色系",
        //
        //                 "background": "#2D58CF",
        //                 "colorNo": "COL69",
        //                 "fontColor": "#FFFFFF"
        //             },
        //             {
        //                 "colorName": "紫色系",
        //                 "background": "#6D2B7A",
        //                 "colorNo": "COL77",
        //                 "fontColor": "#FFFFFF"
        //             }
        //         ],
        //         name: "颜色"
        //     },
        //     price: {
        //         item: [
        //             {title: "￥100以下", value: "<100"}, {title: "￥100-￥200", value: "<=100"},
        //             {title: "￥200-￥300", value: "200-300"},
        //             {title: "￥300以上", value: ">=300"}
        //         ],
        //         name: "价格",
        //         //todo 设置价格区间
        //         max: '',
        //         min: ''
        //     },
        // },

        products: [{
            img: "https://www.uniqlo.cn/hmall/test/u0000000016501/main/first/561/1.jpg",
            name: "麻混",
            code: "424932",
            category: "女装",


            original_price: "199.0",
            onsale_price: "179.1",
            vip_price: "159.2",
            intro: "商品简介简介简介简介",
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


            original_price: "199.0",
            onsale_price: "179.1",
            vip_price: "159.2",
            intro: "商品简介简介简介简介",
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


            original_price: "199.0",
            onsale_price: "179.1",
            vip_price: "159.2",
            intro: "商品简介简介简介简介",
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

        tapFilter() {
            this.selectComponent('#filter-single-page').showFilter()
        }


    },


});
