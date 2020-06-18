// pages/rule/integral/main.js
let goods = require("../../../api/goods")
let goodsize = require("../../../api/goodsize")

const filter = require('../../../utils/filter');
const app = getApp()

App.Page(filter.loginCheck({

    /**
     * 页面的初始数据
     */
    data: {
        //fade
        id: "123",
        //当前选中的商品
        checkedProduct: {
            productCode: "123",
            sizeCode: "",
            size: "",
            color: "",
            num: 1,
        },
        //区分加入购车还是选择参数  select/addCart
        confirmType: "select",
        //只保存库存信息，格式：Map<color_id,Map<size_id,inventory> >
        inventory: {},
        colors: [],
        sizes: [],
        //    data

        product: {
            // product_name: "麻混纺宽腿裤 (附腰带)(老爹裤)",
            // product_sn: "424932",
            // type_sn: "",
            category: "女装",
            // origin_price: "499.00",
            // onsale_price: "299.00",
            // vip_price: "199.00",
            // main_pic: '',

            produt_parameter: [],


            detail: [{
                url: "https://www.uniqlo.cn/hmall/test/u0000000015484/detail/393/1.jpg"
            }, {
                url: "https://www.uniqlo.cn/hmall/test/u0000000015484/detail/393/2.jpg"
            }, {
                url: "https://www.uniqlo.cn/hmall/test/u0000000015484/detail/393/3.jpg"
            }, {
                url: "https://www.uniqlo.cn/hmall/test/u0000000015484/detail/393/4.jpg"
            },],

            // colors: [{
            //     color_thumbnail: "https://www.uniqlo.cn/hmall/test/u0000000016501/chip/22/COL31.jpg",
            //     product_thumbnail: "https://www.uniqlo.cn/hmall/test/u0000000016501/main/first/561/1.jpg",
            //     name: "黄色",
            //     code: "10",
            //     showType:"color-checked"
            // },
            //     {
            //         color_thumbnail: "https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL00.jpg",
            //         product_thumbnail: "https://www.uniqlo.cn/hmall/test/u0000000016502/main/first/561/1.jpg",
            //         name: "黄色",
            //         code: "11",
            //     },
            //     {
            //         color_thumbnail: "https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL09.jpg",
            //         product_thumbnail: "https://www.uniqlo.cn/hmall/test/u0000000013572/main/first/561/1.jpg",
            //         name: "黄色",
            //         code: "12",
            //         showType:"color-checked"
            //
            //     },
            // ],
            // sizes: [{
            //     name: "S",
            //     show_name: "150/76A"
            // },
            //     {
            //         name: "M",
            //         show_name: "150/76A/M"
            //     },
            //     {
            //         name: "L",
            //         show_name: "150/76A/M"
            //     },
            //     {
            //         name: 'XL',
            //         show_name: "150/76A/M"
            //     }
            // ],
            // carousels: [{
            //     url: "https://www.uniqlo.cn/hmall/test/u0000000015484/main/first/1000/1.jpg"
            // },
            //     {
            //         url: "https://www.uniqlo.cn/hmall/test/u0000000015484/main/other1/1000/2.jpg"
            //     },
            //     {
            //         url: "https://www.uniqlo.cn/hmall/test/u0000000015484/main/other2/1000/3.jpg"
            //     },
            //     {
            //         url: "https://www.uniqlo.cn/hmall/test/u0000000015484/main/other3/1000/4.jpg"
            //     }
            //
            // ],
            // code: "427516000",
            // year: "2020",
            // season: "春季",
            // fabric: "棉50% 聚酯纤维50%",
            // explan: "http://shop.cdb99.com/uploads/20200423/080919352649.png",
            // inner_activities: [{
            //     title: "已打6折，共优惠 ¥160"
            // },
            //     {
            //         title: "38女神节活动：会员春装新款6折"
            //     }
            // ],
            // vip_activities: [{
            //     title: "已打5折，共优惠¥199"
            // }, {
            //     title: "三级及以上会员专享"
            // }
            //
            // ],

        },


        // 还价
        collect_order: {
            title: "凑单能再优惠",
            rules: [{
                title: "整单购满800元，立减/再送100元"
            }, {
                title: "满减能再优惠最多30元"
            }]
        },
        charge_discount: {
            title: "充值有赠送现金",
            rules: [{
                title: "充值会员卡：充2000元，送200元"
            },
                {
                    title: "充值2000元，升级为三级会员享受尊享价"
                },
            ]
        },

        redeem: {
            title: "积分可以换现金",
            rules: [{
                title: "100积分可兑换1元现金使用"
            },
                {
                    title: "本单最能能用500积分"
                }
            ]
        },

        copon: {
            title: " 使用优惠券",
            rules: [{
                title: "抵用券可以直接抵现金使用"
            },
                {
                    title: "满减券一次只能使用一张"
                }
            ]
        },

        //赚钱
        share: {
            title: "分享能赚钱： ¥19.12",
            rules: [
                {title: "介绍给亲友，亲友购买后，店铺给你红包。"}
                , {title: "一级分享佣金8%，239×8%=19.12"}
                , {title: "二级分享佣金2.5%，239×2.5%=5.96"}
            ]
        },

        forward: {
            title: "转发能赚积分",
            rules: [
                {title: "100积分可兑换1元现金使用"}
                , {title: "本单最能能用500积分"}
            ]
        },

        push: {
            title: "我想成为推手",
            rules: [
                {title: "推手培训联系电话：1361160****"}
                , {title: "推手躺赚3000元"}
            ]
        },

        groub_by: {
            title: "我有团购资源",
            rules: [
                {title: "团购培训联系电话：1361160****"}
                , {title: "团购定制价格直达工厂"}
            ]
        },


        // 尺码表


        // card
        card: {
            text: "衣服有弹性吗?"
        },
        // 回到顶部
        scrollTop: 0,
        // 弹出层
        showPopup: false,

        // 标签页
        activeTap: 0,
        // 配送方式
        delivery: "1",
        // 折叠面板
        collapseSize: 5,
        activeColl: ['1', '2', '3', '4'],

        // 讨价还价col
        activeColl_bargain: ['1', '2', '3', '4'],

        //赚钱
        activeColl_earn: ['1', '2', '3', '4'],

        //    我要咨询
        advisory: {
            text: "我要咨询"
        },

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
        this.getProduct()
        this.getInventory()
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // this.init()

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
    go: function (e) {
        wx.$go(e.currentTarget.dataset.url)
    },
    goTabBar(e) {
        wx.switchTab({
            url: e.currentTarget.dataset.url
        })
    },
    // onChange(event) {
    //   this.setData({
    //     activeNames: event.detail
    //   })
    // },

    /**
     * 通过递归，【同步】执行自动打开折叠面板
     */
    // init() {
    //   //结束递归的条件
    //   if (this.data.activeNames.length < this.data.collapseSize) {
    //     setTimeout(() => {
    //       //业务代码
    //       let list = this.data.activeNames
    //       list.push((list.length + 1).toString())
    //       this.setData({
    //         activeNames: list
    //       })

    //       //递归
    //       this.init()
    //     }, 600)
    //   }
    // },

    onSelect() {
        this.setData({
            confirmType: "select",
        })
        this.onShowPopup()
    },
    // 弹出层
    onShowPopup() {
        this.setData({
            showPopup: true
        })
    },
    onClosePopup() {
        this.setData({
            showPopup: false
        })
    },
    // 导航栏
    onAddCart() {

        this.setData({
            confirmType: "addCart",
            showPopup: !this.data.showPopup
        })
    },
    //确认添加进购物车
    onConfirmCart() {
        //只选择，不加入购物车
        if (this.data.confirmType === 'select') {
            this.onClosePopup()
            return;
        }

        if (!this.data.checkedProduct.color) {
            wx.$toast("请选择颜色");
            return;
        }
        if (!this.data.checkedProduct.size) {
            wx.$toast("请选择尺码");
            return;
        }
        //todo productCode ：商品唯一码
        let cart_ = wx.getStorageSync('cart') || [];
        // 判断是否已经包含该商品，是则修改数量，否则加入购物车,并修改tabbarNum
        let isContain = false;
        // 包含的话，当前已加入购物车的商品索引
        let currentProductIndex = undefined
        for (let i = 0; i < cart_.length; i++) {
            if (cart_[i].productCode === this.data.checkedProduct.productCode) {
                isContain = true
                currentProductIndex = i
                break
            }
        }

        if (!isContain) {
            cart_.push(this.data.checkedProduct);
            //设置tabbar徽标提示 与全局num  todo 清缓存后首次执行耗时5s+ 需要优化
            console.time('num')
            let {cart} = app.store.getState()
            cart.totalNum = cart.totalNum + 1
            app.store.setState({
                cart
            });
            console.timeEnd("num")

        } else {
            cart_[currentProductIndex].num += this.data.checkedProduct.num
        }

        wx.setStorageSync('cart', cart_);
        wx.$toast("添加成功")

        this.onClosePopup()
    },
    onBuyNow() {
        if (!this.data.checkedProduct.color) {
            wx.$toast("请选择颜色")
            return
        }
        if (!this.data.checkedProduct.size) {
            wx.$toast("请选择尺码");
            return;
        }
        let that = this
        wx.navigateTo({
            url: '/pages/shopping/order/item/index',
            success: function (res) {
                // 数组格式pro，统一格式
                res.eventChannel.emit('orderItems', {orderItems: [that.data.checkedProduct]})
            }
        })
    },
    onTabs() {
    },
    setDetail(e) {
        this.setData({
            [e.currentTarget.dataset.prop]: e.detail
        })
    },
    onRdioDelivery(e) {
        this.setData({
            delivery: e.detail
        })
    },
    onStepper() {
    }
    ,
//    initdata
    getProduct() {
        goods.get(this.data.id).then(res => {
            //res 反序列化部分字段
            let props = ["material", "colors", "carousels", "produt_parameter", "sizes"]
            props.forEach(item => {
                res[item] = JSON.parse(res[item])
            })
            this.setData({
                product: res
            })
        })
    },
    getInventory() {
        let inventoryMap = new Map()
        let colors = []
        let sizes = []

        goodsize.get(this.data.id).then(res => {
            res = [
                {
                    size_id: "1",
                    size_name: "S",
                    display_name: "160/80A/S",
                    inventory: "10",
                    color_id: "1",
                    color_name: "黄色",
                    color_thumbnail: "https://www.uniqlo.cn/public/Image/L1/nav/nav-logo/LOGO.gif",
                    good_thumbnail: "https://www.uniqlo.cn/public/Image/L1/nav/nav-logo/LOGO.gif",
                }, {
                    size_id: "2",
                    size_name: "L",
                    display_name: "180/90A/L",
                    inventory: "0",
                    color_id: "1",
                    color_name: "黄色",
                    color_thumbnail: "https://www.uniqlo.cn/public/Image/L1/nav/nav-logo/LOGO.gif",
                    good_thumbnail: "https://www.uniqlo.cn/public/Image/L1/nav/nav-logo/LOGO.gif",
                }, {
                    size_id: "3",
                    size_name: "M",
                    display_name: "170/90A/M",
                    inventory: "0",
                    color_id: "2",
                    color_name: "白色",
                    color_thumbnail: "https://www.uniqlo.cn/public/Image/L1/nav/nav-logo/LOGO.gif",
                    good_thumbnail: "https://www.uniqlo.cn/public/Image/L1/nav/nav-logo/LOGO.gif",
                }, {
                    size_id: "4",
                    size_name: "L",
                    display_name: "180/90A/L",
                    inventory: "0",
                    color_id: "2",
                    color_name: "白色",
                    color_thumbnail: "https://www.uniqlo.cn/public/Image/L1/nav/nav-logo/LOGO.gif",
                    good_thumbnail: "https://www.uniqlo.cn/public/Image/L1/nav/nav-logo/LOGO.gif",
                },
            ]

            /**
             * 数据预处理
             * [{sizeInfo,colorInfo,inventory}]转化为
             *
             * Map<color_id,  Map<size_id,inventory> >
             *     以及
             *     colors、sizes
             *
             */
            res.forEach(item => {
                // 设置id , 以便setCheckedList调用
                let colorTemp = {
                    id: item.color_id,
                    color_id: item.color_id,
                    color_name: item.color_name,
                    color_thumbnail: item.color_thumbnail,
                    good_thumbnail: item.good_thumbnail,
                }

                let sizeTemp = {
                    id: item.size_id,
                    size_id: item.size_id,
                    size_name: item.size_name,
                    display_name: item.display_name,
                    inventory: item.inventory,
                }

                //set inventory
                if (!inventoryMap.has(colorTemp.color_id)) {
                    inventoryMap.set(colorTemp.color_id, new Map().set(sizeTemp.size_id, sizeTemp.inventory))

                    //set colors
                    colors.push(colorTemp)
                } else {
                    inventoryMap.get(colorTemp.color_id).set(sizeTemp.size_id, sizeTemp.inventory)
                }

                //    set sizes
                sizes.push(sizeTemp)
            })


            /**
             *将所有颜色都没有库存的尺码设置为disabled
             * 逻辑：将size_name相同的库存作为累计， 根据累计库存，每次将size.disabled小于0则设置为true，大于0则false
             * @type {Map<any, any>}
             */
            let temp = new Map()
            sizes.forEach(size => {
                temp.set(size.size_name, (temp.get(size.size_name) || 0) + parseInt(size.inventory))
                size.disabled = temp.get(size.size_name) <= 0;
            })


            /**
             *reduce 去重  去掉size_name相同的项
             *
             *
             */
            let obj = {}
            sizes = sizes.reduce((pre, cur) => {
                !obj[cur.size_name] ? obj[cur.size_name] = pre.push(cur) : "";
                return pre
            }, [])

            //设置所有尺码都没有库存的颜色为disabled
            inventoryMap.forEach(
                (v, k) => {
                    const list = [...v]
                    // 通过累加计算该颜色总库存
                    const inventorySum = list.reduce((pre, cur) => {
                        return parseInt(pre[1]) + parseInt(cur[1])
                    })
                    if (inventorySum <= 0) {
                        colors.map(item => {
                            item.color_id === k ? item.disabled = true : ""
                        })

                    }
                }
            )

            this.setData({
                inventory: [...inventoryMap.values()],
                colors: colors,
                sizes: sizes
            })

        })

    },
//   点击颜色
    onColor(e) {
        if (e.target.dataset.item.disabled) {
            return
        }
        let colorCode = e.target.dataset.item.color_id;
        let item = this.setCheckedList(this.data.colors, colorCode);

        let checkedColor = item.checked ? item.color_name : ""

        this.setData({
            [`colors`]: this.data.colors,
            ['checkedProduct.color']: checkedColor,
            ['checkedProduct.colorCode']: colorCode
        })

    }
    ,
//    点击尺码
    onSize(e) {
        if (e.target.dataset.item.disabled) {
            return
        }

        let sizeCode = e.target.dataset.item.size_id;
        let item = this.setCheckedList(this.data.sizes, sizeCode)
        let checkedSize = item.checked ? item.display_name : ""
        this.setData({
            [`sizes`]: this.data.sizes,
            ['checkedProduct.size']: checkedSize,
            ['checkedProduct.sizeCode']: sizeCode
        })

    }
    ,
    /**
     *点击颜色、尺码后的，该项设置为点击，其余设置为点击
     *
     * @param list
     * @param index
     * @return 返回被设置的对象
     */
    setCheckedList(list, index) {
        let result = undefined
        list.forEach(item => {
            if (item.id === index) {
                item.checked = !item.checked;
                result = item
            } else {
                item.checked = false;
            }
        })
        return result
    },
//    编辑数量
    onSetNum(e) {
        this.setData({
            [`checkedProduct.num`]: e.detail
        })
    }


}))
