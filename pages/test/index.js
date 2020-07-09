// pages/home/index/main.js

// let article = require("../../../api/article")
// let customer = require("../../../api/customer")
// let catalog = require("../../../api/catalog")
//
// const filter = require('../../../utils/filter');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        //回到顶部
        scrollTop: 0,
        //顶部导航栏
        topList: [
            {title: '今日特惠', icon: "bag-o"},
            {title: '最新穿法', icon: "bag-o"},
            {title: '新品上架', icon: "bag-o"},
            {title: '老板娘说', icon: "bag-o"}
        ],
        //新品上架的筛选
        newProductsFilter: {
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
        //新品上架的筛选tab
        newProductsTabs: [
            {icon: 'apps-o', title: '风格'},
            {icon: 'apps-o', title: '尺码'},
            {icon: 'apps-o', title: '颜色'},
            {icon: 'apps-o', title: '价格'}
        ],
        //首页轮播图
        imgs: [
            {url: "https://www.uniqlo.cn/hmall/test/u0000000009932/detail/393/10.jpg"},
            {url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582049975121&di=09124e52fb2d9c56f849f4fa5fa2a2a1&imgtype=0&src=http%3A%2F%2Fimg.hkwb.net%2Fatt%2Fsite2%2F20171228%2Fe6805aee9afd115c2b948f9b12528964.jpg"},
            {url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582049975121&di=09124e52fb2d9c56f849f4fa5fa2a2a1&imgtype=0&src=http%3A%2F%2Fimg.hkwb.net%2Fatt%2Fsite2%2F20171228%2Fe6805aee9afd115c2b948f9b12528964.jpg"}
        ],
        allArticle: [],
        headerLines: [],
        user: {},
        catalogs: [],
        //店铺活动
        activity: [
            {title: '满500元立减100元', subtitle: '全场货品'},
            {title: '低至 1 折起', subtitle: '三楼女装，SALE'},
            {title: '特价速秒  售完即止', subtitle: '今日必入'},
            {title: '无印良品工厂直供', subtitle: '拼团直播'}
        ],
        //新品上架的商品
        newProducts: [{
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
            category: "女装",
            min_size: "S",
            max_size: "XL",
            price: "499.00",
            colors: [
                {url: "https://www.uniqlo.cn/hmall/test/u0000000016501/chip/22/COL31.jpg"},
                {url: "https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL00.jpg"},
                {url: "https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL09.jpg"},
            ]
        }
        ],
        wears: [{
            img: "https://www.uniqlo.cn/hmall/test/u0000000016501/main/first/561/1.jpg",
            title: "夏日穿搭",
            subtitle: "开启夏日穿搭新灵感"
        }, {
            img: "https://www.uniqlo.cn/hmall/test/u0000000016501/main/first/561/1.jpg",
            title: "夏日穿搭",
            subtitle: "开启夏日穿搭新灵感"
        }, {
            img: "https://www.uniqlo.cn/hmall/test/u0000000016501/main/first/561/1.jpg",
            title: "夏日穿搭",
            subtitle: "开启夏日穿搭新灵感"
        }, {
            img: "https://www.uniqlo.cn/hmall/test/u0000000016501/main/first/561/1.jpg",
            title: "夏日穿搭",
            subtitle: "开启夏日穿搭新灵感"
        }],
        //穿法分类的一级筛选
        wearFilter: [
            {name: '全部'},
            {name: '男装'},
            {name: '女装'},
            {name: '童装'},
            {name: '家居'}
        ],
        //    穿法容器
        wearContainer: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        //穿法容器
        this.setData({
            wearContainer: () => wx.createSelectorQuery().select('#wear-container'),
        });

        this.getHeadline()
        this.getUserInfo()
        this.getCatalogs()
    },

    /**
     * 生命周期函数--监听页面显示
     *
     */
    onShow: function () {
        // 设置tabbar状态
        this.getTabBar().setData({
            activeTab: 0
        });
    },

    //页面滚动执行方式
    onPageScroll(e) {
        this.setData({
            scrollTop: e.scrollTop
        })
    },

    go: function (e) {
        wx.$go(e.currentTarget.dataset.url)
    },

    onTapDetail(e) {
        wx.$go('/pages/home/detail/index', e.currentTarget.dataset)
    },

//  init data
    //todo 登录成功需要获取用户id
    getUserInfo() {
        customer.get(2).then(res => {
            this.setData({user: res})
        })
    },

//    获取头条
    getHeadline: function () {

        article.getList({is_header: false}).then(res => {
            this.setData({
                allArticle: res.list
            })
            const list = res.list.filter((item) => {
                //手动过滤数据
                if (item.is_header === true) {
                    return item
                }
            })
            this.setData({headerLines: list})

        });

    },
//    获取栏目
    getCatalogs() {
        catalog.getList({parent_id: 0}).then(res => {
            this.setData({
                catalogs: res.list
            })
            //遍历再遍历，将文章放入目录中作为子数组
            res.list.forEach((item, index) => {
                item.childList = []
                article.getList({catalog_id: item.id, is_col_header: true}).then(res => {
                    //opti 可以考虑同步执行后setData
                    this.setData({
                        [`catalogs[${index}].childList`]: res.list
                    })
                })
            })
        })
    },
//
    tapTop(e) {
        wx.pageScrollTo({selector: ".scroll-item-" + e.currentTarget.dataset.index})

    },
    tapWearFilter(e) {
        console.log(e.detail)
        //    todo  update date
    },
    tapMoreWear() {
        wx.$go('/pages/wear/index/index')
    }


})
