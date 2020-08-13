// pages/shopping/cart/main.js
const app = getApp()

Component({
    useStore: true,
    /**
     * 页面的初始数据
     */
    data: {
        //激活编辑状态
        activeEdit: false,
        //已勾选的商品索引数组
        selectedList: [],
        //全选按钮状态
        selectAllRadio: false,
        //总金额
        totalAmount: "",
        //显示的商品列表
        products: []
    },
    observers: {
        //监听勾选的变化、已勾选的数量变化
        'selectedList,products': function () {
            //products为空时计算会报错：item.price undefine
            if (this.data.products.length > 0) {
                //    总金额
                let sum = 0
                this.data.selectedList.forEach(item => {
                    let product = this.data.products[item];
                    sum = sum + parseFloat(product.price) * parseInt(product.num)
                })
                this.setData({
                    //始终保留两位小数
                    totalAmount: sum.toFixed(2)
                });
            }
        },
        //    单独监听商品种数变化，修改tabbar,
        'products': function () {
            //不显示0
            let num = this.data.products.length > 0 ? this.data.products.length : ''
            let {cart} = app.store.getState();
            cart.totalNum = num;
            // cart.products = this.data.products
            app.store.setState({
                cart
            });

        }
    },
    methods: {

        onShow() {
            this.getTabBar().setData({
                activeTab: 2
            });
            //todo get data from api/storage
            let cart = [{
                img: "https://www.uniqlo.cn/hmall/test/u0000000014067/main/first/1000/1.jpg",
                category: "男装/女装/亲子装",
                name: " 1(UT) ULTRAMAN 印花T恤",
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
                num: "1",
            }, {
                img: "https://www.uniqlo.cn/hmall/test/u0000000014067/main/first/1000/1.jpg",
                category: "男装/女装/亲子装",
                name: " 2(UT) ULTRAMAN 印花T恤",
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
                num: "1",
            }, {
                img: "https://www.uniqlo.cn/hmall/test/u0000000014067/main/first/1000/1.jpg",
                category: "男装/女装/亲子装",
                name: " 3(UT) ULTRAMAN 印花T恤",
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
                num: "1",
            },
                {
                    img: "https://www.uniqlo.cn/hmall/test/u0000000014067/main/first/1000/1.jpg",
                    category: "男装/女装/亲子装",
                    name: "4 (UT) ULTRAMAN 印花T恤(短袖) (奥特曼)2 ",
                    code: "428160",
                    remark: "支持30天无理由退换货",

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
                }
            ]
            // wx.setStorageSync('cart', cart)
            setTimeout(() => {
                this.updateCart(cart)
            }, 1000)
        },

        go(e) {
            let dataset = e.currentTarget.dataset;
            app.$router.push(dataset.url, {id: dataset.id})
        },

        activeEdit() {
            this.setData({
                activeEdit: !this.data.activeEdit
            })
        },
        onSelect(e) {
            this.setData({
                selectedList: e.detail
            })
        },
        onSelectAll() {
            let currentListLen = this.data.selectedList.length
            let productsLen = this.data.products.length;
            //只接受字符串类型的数组['0','1']，不接受数字类型
            let all_ = Array.from({length: productsLen}, (v, k) => k.toString());
            this.setData({
                selectedList: currentListLen === productsLen ? [] : all_
            })
            console.log(this.data.selectedList)
        },
        onAddNum(e) {
            // todo add api  add storage
            let index = e.currentTarget.dataset.index
            let cart = wx.getStorageSync('cart')
            cart[index].num = e.detail
            this.updateCart(cart)

        },
        //删除单个商品
        onDel(e) {
            // todo add api  add storage
            let index = e.currentTarget.dataset.index
            let cart = wx.getStorageSync('cart')
            cart.splice(index, 1)
            //已勾选的商品，被删除后，要同时反选
            this.data.selectedList.splice(this.data.selectedList.indexOf(index), 1)
            this.setData({
                selectedList: this.data.selectedList
            })

            this.updateCart(cart)
        },
        //删除全部商品
        onDelAll() {
            this.data.selectedList.map((item, index) => {
                //每次删除操作后，products的索引就会变化
                this.data.products.splice(item - index, 1)
            })

            this.setData({
                selectedList: []
            })
            this.updateCart(this.data.products)

        },
        //todo set cart 更新为set cart code、colorcode、sizecode、num
        updateCart(cart) {
            wx.setStorageSync('cart', cart)
            this.setData({
                products: wx.getStorageSync('cart')
            })
        },
        postOrder() {
            app.$router.push('shopping/order/item',{id:957})
            // wx.$go('pages/shopping/order/item/index?id=958')
        }
    }
})
