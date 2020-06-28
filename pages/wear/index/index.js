Page({
    data: {
        filterData: [
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
            },
            {
                item: [
                    "男装",
                    "女装"
                ],
                name: "适用性别"
            },
            {
                item: [
                    "男装",
                    "女装"
                ],
                name: "适用性别"
            },
            {
                item: [
                    "男装",
                    "女装"
                ],
                name: "适用性别"
            },
            {
                item: [
                    "男装",
                    "女装"
                ],
                name: "适用性别"
            },
            {
                item: [
                    "男装",
                    "女装"
                ],
                name: "适用性别"
            },
            {
                item: [
                    "男装",
                    "女装"
                ],
                name: "适用性别"
            },
            {
                item: [
                    "男装",
                    "女装"
                ],
                name: "适用性别"
            },
            {
                item: [
                    "男装",
                    "女装"
                ],
                name: "适用性别"
            },
            {
                item: [
                    "男装",
                    "女装"
                ],
                name: "适用性别"
            },
            {
                item: [
                    "男装",
                    "女装"
                ],
                name: "适用性别"
            },
            {
                item: [
                    "男装",
                    "女装"
                ],
                name: "适用性别"
            }],
        catalogs: [
            //穿法分类的一级筛选
            {name: '全部'},
            {name: '男装'},
            {name: '女装'},
            {name: '童装'},
            {name: '家居'}
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
        ]
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
    }

});
