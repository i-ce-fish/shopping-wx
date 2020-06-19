// pages/catagory/type-b/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrollTop: 0,
        catalogs: [
            {
                img: "https://www.uniqlo.cn/cms/3c41a70bccd3b1e95192da637796b463.jpg",
                title: "T恤1",
                products: [{
                    img: "https://www.uniqlo.cn/hmall/test/u0000000016501/main/first/561/1.jpg",
                    name: "麻混"
                    ,
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

            }, {
                img: "https://www.uniqlo.cn/cms/16220807be66fcdb08d3432c64fe7eb2.jpg",
                title: "裤子",
                products: [{
                    img: "https://www.uniqlo.cn/hmall/test/u0000000016501/main/first/561/1.jpg",
                    name: "麻混纺宽腿裤 (附腰带)(老爹裤)",
                    code: "424932",
                    category: "T恤15",
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
                    category: "T恤15",
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
                },


                ]

            }, {
                img: "https://www.uniqlo.cn/cms/ded2dbaccda12c1831ef6458fdda1fc0.jpg",
                title: "T恤1",
                products: [{
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
                },


                ]

            }, {
                img: "https://www.uniqlo.cn/cms/f6f0e3b3b1f611a3482f4eb3ab066b15.jpg",
                title: "T恤123",
                products: [{
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
                },


                ]

            }, {
                img: "https://www.uniqlo.cn/cms/d59ba9b83062713ff7efb84884ad9437.jpg",
                title: "T恤",
                products: [{
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
                },


                ]

            }, {
                img: "https://www.uniqlo.cn/cms/d59ba9b83062713ff7efb84884ad9437.jpg",
                title: "T恤",
                products: [{
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
                },


                ]

            }, {
                img: "https://www.uniqlo.cn/cms/d59ba9b83062713ff7efb84884ad9437.jpg",
                title: "T恤",
                products: [{
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
                },


                ]

            }, {
                img: "https://www.uniqlo.cn/cms/d59ba9b83062713ff7efb84884ad9437.jpg",
                title: "T恤",
                products: [{
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
                },


                ]

            }
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

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

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
    onTopSticky(e) {
        wx.pageScrollTo({selector: ".product-item-" + e.detail.index})
    }


})
