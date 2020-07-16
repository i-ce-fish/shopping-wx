Page({
    data: {
        filterData: [
            {
                item: ["全部", '帅哥', '美女', '中性'],
                title: "适穿性别"
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
                title: "适穿年龄"
            }, {
                item: [
                    "较胖",
                    "偏胖",
                    "标准身型",
                    "偏瘦",
                    "较瘦"
                ],
                title: "体型轮廓"
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
                title: "特殊修饰"
            },
            {
                item: [
                    "芸芸众生",
                    "有点个性",
                    "非常个性"
                ],
                title: "个性程度"
            },
            {
                item: [
                    "明星",
                    "卡通动漫",
                    "街头达人",
                    "其他来源"
                ],
                title: "穿法来源"
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
                title: "流行地区"
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
                title: "穿着场合"
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
                title: "特殊修饰"
            }],
        catalogs: [
            //穿法分类的一级筛选
            {name: '明星穿法'},
            {name: '显瘦穿法'},
            {name: '广州流行'},
            {name: '欧美校园'},
            {name: '日韩最新'},
            {name: '炫酷个性'},
            {name: '通勤达人'},
            {name: '轻奢简约'}
        ],
        wearList: [
            {
                img: 'https://img1.cache.netease.com/catchpic/4/44/447CDD5924DDF235067C7EAC5C25B11D.jpg',
                code: 'CFA216541',
                title: '夏日都市养眼大气清纯气质财运商务通勤装',
                subtitle: ''
            },
            {
                img: 'https://img1.cache.netease.com/catchpic/4/40/401595388FAC4B49D519336E83F5AA11.jpg',
                code: 'CFA216541',
                title: '夏日都市养眼大气清纯气质财运商务通勤装',
                subtitle: ''
            },
            {
                img: 'https://img1.cache.netease.com/catchpic/E/ED/ED4795F0EBF01DF790275D2FF7979485.jpg',
                code: 'CFA216541',
                title: '夏日都市养眼大气清纯气质财运商务通勤装',
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
        ],
        total: "1234"
    },
    onLoad: function (options) {

    },
    onShow() {
    }
    ,
    setDetail(e) {
        this.setData({
            [e.currentTarget.dataset.prop]: e.detail
        })
    },
    tapImg(e) {
        wx.previewImage({
            urls: [e.currentTarget.dataset.img]
        })
    },
    tapFilter() {
        this.selectComponent('#filter-single-page').showFilter()
    },
    tapDesign() {
        wx.$go('/pages/home/design/design-for-me/index')
    }

});
