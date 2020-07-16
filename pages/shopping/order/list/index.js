// pages/shopping/order/list/main.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        activeNames: [0, 1],
        orders: [
            {
                delivery: {
                    //门店自提，门店配送，快递配送
                    type: '门店自提',
                    store: {
                        name: '广州xx店',
                        address: "广东省广州市越秀区中山五路70号捷登都会1F",
                        tel: "020-1234567",
                        work_time: "周一至周日 10:00-22:00"

                    },
                    user: {
                        name: "提货人",
                        mobile: "1321234567"
                    },

                    //快递配送
                    receipt: {
                        receiver: "收件人",
                        mobile: "13212345678",
                        address: "广东省广州市越秀区中山五路70号捷登都会",
                    }
                },
                products: [
                    {
                        img: "https://www.uniqlo.cn/hmall/test/u0000000014067/main/first/1000/1.jpg",
                        category: "男装/女装/亲子装",
                        name: " (UT) ULTRAMAN 印花T恤(短袖) (奥特曼) 3",
                        code: "428160",
                        original_price: "199.0",
                        onsale_price: "179.1",
                        vip_price: "159.2",
                        intro: "商品简介简介简介简介",
                        color: {
                            code: "09",
                            name: "黑色"
                        },
                        size: {
                            name: "S",
                            all_name: "150/76A"
                        },
                        num: "1",
                    },
                    {
                        img: "https://www.uniqlo.cn/hmall/test/u0000000014067/main/first/1000/1.jpg",
                        category: "男装/女装/亲子装",
                        name: " (UT) ULTRAMAN 印花T恤(短袖) (奥特曼)4",
                        code: "428160",
                        original_price: "199.0",
                        onsale_price: "179.1",
                        vip_price: "159.2",
                        intro: "商品简介简介简介简介",
                        remark: "支持30天无理由退换货",

                        color: {
                            code: "09",
                            name: "黑色"
                        },
                        size: {
                            name: "S",
                            all_name: "150/76A"
                        },
                        num: "2",
                    }
                ],

                //    促销信息
                promotion: [
                    {name: "五一包邮五一包邮五一包邮五一包邮五一包邮五一包邮五一包邮五一包邮五一包邮五一包邮五一包邮五一包邮"},
                    {name: "六一包邮"},
                    {name: "不使用促销优惠"}
                ],

                //    优惠券
                copon: "-100元",
                delivery_fee: 9,
                goods_amount: 990.00,
                total_amount: 999


            },
            {

                delivery: {
                    //门店自提，门店配送，快递配送
                    type: '快递配送',
                    //快递配送
                    receipt: {
                        receiver: "收件人",
                        mobile: "13212345678",
                        address: "广东省广州市越秀区中山五路70号捷登都会",
                    }
                },
                products: [
                    {
                        img: "https://www.uniqlo.cn/hmall/test/u0000000014067/main/first/1000/1.jpg",
                        category: "男装/女装/亲子装",
                        name: " (UT) ULTRAMAN 印花T恤(短袖) (奥特曼) 3",
                        code: "428160",
                        original_price: "199.0",
                        onsale_price: "179.1",
                        vip_price: "159.2",
                        intro: "商品简介简介简介简介",
                        color: {
                            code: "09",
                            name: "黑色"
                        },
                        size: {
                            name: "S",
                            all_name: "150/76A"
                        },
                        num: "1",
                    },
                    {
                        img: "https://www.uniqlo.cn/hmall/test/u0000000014067/main/first/1000/1.jpg",
                        category: "男装/女装/亲子装",
                        name: " (UT) ULTRAMAN 印花T恤(短袖) (奥特曼)4",
                        code: "428160",
                        original_price: "199.0",
                        onsale_price: "179.1",
                        vip_price: "159.2",
                        intro: "商品简介简介简介简介",
                        remark: "支持30天无理由退换货",

                        color: {
                            code: "09",
                            name: "黑色"
                        },
                        size: {
                            name: "S",
                            all_name: "150/76A"
                        },
                        num: "2",
                    }
                ],

                //    促销信息
                promotion: [
                    {name: "五一包邮五一包邮五一包邮五一包邮五一包邮五一包邮五一包邮五一包邮五一包邮五一包邮五一包邮五一包邮"},
                    {name: "六一包邮"},
                    {name: "不使用促销优惠"}
                ],

                //    优惠券
                copon: "-100元",
                delivery_fee: 9,
                goods_amount: 990.00,
                total_amount: 999


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
    onChange(event) {
        this.setData({
            activeNames: event.detail
        })
    },
    go(e) {
        wx.$go(e.currentTarget.dataset.url)
    }
})
