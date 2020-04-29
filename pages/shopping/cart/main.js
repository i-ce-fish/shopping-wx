// pages/shopping/cart/main.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        radio: '0',
        orders: [{
                order: {
                    products: [{
                            product: {
                                img:"https://www.uniqlo.cn/hmall/test/u0000000014067/main/first/1000/1.jpg",
                                category: "男装/女装/亲子装",
                                name: " (UT) ULTRAMAN 印花T恤",
                                code: "428160",
                                price: "79.00",
                                remark:"支持30天无理由退换货",
                                color: {
                                    code: "09",
                                    name: "黑色"
                                },
                                size: {
                                    name: "S",
                                    all_name: "150/76A"
                                },
                                num: "1",
                            }
                        },
                        {
                            product: {
                                img:"https://www.uniqlo.cn/hmall/test/u0000000014067/main/first/1000/1.jpg",
                                category: "男装/女装/亲子装",
                                name: " (UT) ULTRAMAN 印花T恤(短袖) (奥特曼)2 ",
                                code: "428160",
                                remark:"支持30天无理由退换货",

                                price: "79.00",
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
                        }
                    ],
                    delivery_type: {
                        name: "快递配送",
                        store: {
                            name: "",
                            detail_address: ""
                        },
                        address: {
                            name: "xxx",
                            phone: "1324561231",
                            detail_address: "广东省广州市"
                        }
                    },
                    copon: "满300-100"
                }
            },
            {
                order: {
                    products: [{
                            product: {
                                img:"https://www.uniqlo.cn/hmall/test/u0000000014067/main/first/1000/1.jpg",
                                category: "男装/女装/亲子装",
                                name: " (UT) ULTRAMAN 印花T恤(短袖) (奥特曼) 3",
                                code: "428160",
                                price: "79.00",
                                color: {
                                    code: "09",
                                    name: "黑色"
                                },
                                size: {
                                    name: "S",
                                    all_name: "150/76A"
                                },
                                num: "1",
                            }
                        },
                        {
                            product: {
                                img:"https://www.uniqlo.cn/hmall/test/u0000000014067/main/first/1000/1.jpg",
                                category: "男装/女装/亲子装",
                                name: " (UT) ULTRAMAN 印花T恤(短袖) (奥特曼)4",
                                code: "428160",
                                price: "79.00",
                                remark:"支持30天无理由退换货",

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
                        }
                    ],
                    delivery_type: {
                        name: "门店自提",
                        store: {
                            name: "广州市XX店",
                            detail_address: "广东省广州市XX路"
                        },
                        address: {
                            name: "xxx",
                            phone: "1324561231",
                            detail_address: "广东省广州市"
                        }
                    },
                    copon: "满300-100"
                }
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
    onShow: function () {},

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

    go: function (e) {
        wx.$go(e.currentTarget.dataset.url)
    },
    onClickLeft() {
        // 点击全选
        this.setData({
            radio: this.data.radio === '1' ? '0' : '1'
        });
    },
    onClickRight() {
        wx.showToast({
            title: '点击按钮',
            icon: 'none'
        });
    },
    // onChange(event) {
    //     this.setData({
    //       radio: event.detail
    //     });
    //   }
})
