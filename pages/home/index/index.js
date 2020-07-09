// pages/home/index/main.js

import tool from "../../../utils/tool";

let article = require("../../../api/article")
let customer = require("../../../api/customer")
let catalog = require("../../../api/catalog")
let app = getApp()
const filter = require('../../../utils/filter');

Page(filter.loginCheck({

    /**
     * 页面的初始数据
     */
    data: {
        //回到顶部
        scrollTop: 0,
        //最新穿法是否黏住顶部
        // stickyWear: false,
        //新品上架是否黏住顶部
        // stickyNew: false,
        //顶部导航栏
        topList: [
            {title: '今日特惠', icon: "bag-o", type: true},
            {title: '最新穿法', icon: "bag-o", type: false},
            {title: '新品上架', icon: "bag-o", type: false},
            {title: '老板娘说', icon: "bag-o", type: false}
        ],
        //店铺信息
        shop: {
            address: "丽水市中山街店522号(百货大楼旁)",
            qrcode: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593673011872&di=6e98e25a009f7ca0086899e8f015145d&imgtype=0&src=http%3A%2F%2Fefile.kaoyan.com%2Fimg%2F2020%2F05%2F25%2F193612_5ecbadac69b24.png',
            wxid: 'wxid_sdfkljdsfkl153',
            introduction: "我是店长王小丽，我做服装行业12年12年时间，\n我很直爽，开店很累，但我喜欢时尚",

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
            {title: '满500元立减100元', subtitle: '全场货品', bgc: '#f6c4ad'},
            {title: '低至 1 折起', subtitle: '三楼女装，SALE', bgc: '#fadca7'},
            {title: '特价速秒  售完即止', subtitle: '今日必入', bgc: '#f8f2b7'},
            {title: '无印良品工厂直供\n床上四件套\n今晚19:00', subtitle: '拼团直播', bgc: '#ffcf9b'}
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
        wears: [
            {
                img: 'https://img1.cache.netease.com/catchpic/4/44/447CDD5924DDF235067C7EAC5C25B11D.jpg',
                code: 'CFA216541',
                title: '杨幂牛仔外套内搭灰色针织衫+黑色瘦腿裤杨幂牛仔外套内搭灰色针织',
                subtitle: ''
            },
            {
                img: 'https://img1.cache.netease.com/catchpic/4/40/401595388FAC4B49D519336E83F5AA11.jpg',
                code: 'CFA216541',
                title: '范爷范冰冰小海星牛仔外套童趣',
                subtitle: ''
            },
            {
                img: 'https://img1.cache.netease.com/catchpic/E/ED/ED4795F0EBF01DF790275D2FF7979485.jpg',
                code: 'CFA216541',
                title: '秒变清纯身材单薄穿出',
                subtitle: ''
            },
            {
                img: 'https://gd3.alicdn.com/imgextra/i3/63764294/O1CN019fn7pj1hahFQQaezH_!!63764294.jpg_400x400.jpg',
                code: 'CFA216541',
                title: '夏日都市养眼大气清纯气质财运商务通勤装',
                subtitle: ''
            },
            {
                img: 'https://www.uniqlo.cn/hmall/test/u0000000013827/mobileDetail/3.jpg',
                code: 'CFA216541',
                title: '夏日都市养眼大气清纯气质财运商务通勤装',
                subtitle: ''
            },
            {
                img: 'https://www.uniqlo.cn/hmall/test/u0000000013827/model/rank1/first/765-1065/1.jpg',
                code: 'CFA216541',
                title: '夏日都市养眼大气清纯气质财运商务通勤装',
                subtitle: ''
            },
            {
                img: 'https://www.uniqlo.cn/cms/3d98fc35127b31778b998ad16f44243b.jpg',
                code: 'CFA216541',
                title: '夏日都市养眼大气清纯气质财运商务通勤装',
                subtitle: ''
            }
        ]
        ,
        //穿法分类的一级筛选
        wearFilter: [
            {name: '明星穿法'},
            {name: '显瘦穿法'},
            {name: '广州流行'},
            {name: '欧美校园'},
            {name: '日韩最新'},
            {name: '炫酷个性'},
            {name: '通勤达人'},
            {name: '轻奢简约'}
        ],
        newFilter: [
            {name: '新品预售'},
            {name: '新品上架'},
            {name: '广州流行'},
            {name: '日韩最新'},
            {name: '男装'},
            {name: '女装'},
            {name: '童装'},

            {name: '家居'}

        ]
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

    // onPageScroll: tool.throttle(async function (e) {
    //     //顶部导航条
    //     this.setData({
    //         scrollTop: e[0].scrollTop
    //     })
    //
    //     //计算当前节点 的位置
    //     let res = await app.getNodeViewport('#newWear')
    //     console.log(res[0].top)
    //
    // }, 50),


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
    },
    tapAddress() {

        wx.openLocation({        //所以这里会显示你当前的位置
            //     todo get latitude/longitude from api
            'latitude': 23.13,
            'longitude': 113.27,
            name: "永康美特斯邦威店",
            address: this.data.shop.address,
            scale: 28
        })

        //获取用户位置并导航
        // wx.getLocation({
        //     type: 'wgs84',
        //     success(res) {
        //         const latitude = res.latitude
        //         const longitude = res.longitude
        // let plugin = requirePlugin('routePlan');
        // let key = 'K4NBZ-6ZZK6-DYYSD-ESJKU-HML4O-5QBON'; //使用在腾讯位置服务申请的key
        // let referer = '门店导航';  //调用插件的小程序的名称
        // let startPoint = JSON.stringify({ //起点
        //     'name':'我的位置',
        //     'latitude': latitude,
        //     'longitude': longitude
        // });
        // let endPoint = JSON.stringify({ //终点
        //     // todo get latitude/longitude from api
        //     'name': '一家门店',
        //     'latitude': 23.13,
        //     'longitude': 113.27
        // });
        // wx.navigateTo({
        //     url: 'plugin://routePlan/route-plan?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
        // });
        //     }
        // })
    },
    tapBossQRCode(e) {
        wx.previewImage({
            current: this.data.shop.qrcode,
            urls: [this.data.shop.qrcode]
        })
    },
    tapWxid(e) {
        wx.setClipboardData({
            data: this.data.shop.wxid,
            success(res) {
                //    默认提示无法隐藏
            }
        })
    }
    ,
    bindSticky(e) {
        let index = e.currentTarget.dataset.index;
        if (e.detail.isFixed !== this.data.topList[index].type) {
            this.setData({
                [`topList[${index}].type`]: e.detail.isFixed
            });

        }

    },


}))
