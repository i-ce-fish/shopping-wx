// pages/shopping/order/item/main.js
let globalData = getApp().globalData;

let address = require('../../../../api/address')
let order = require('../../../../api/goodorder')
//Page不支持observers，区别在于方法放进method里
Component({
    //监听地址数组长度，控制显示地址/添加按钮
    observers: {
        'addresses': function () {
            this.setData({
                noAddress: this.data.addresses.length === 0
            })
        }
    },
    /**
     * 页面的初始数据
     */
    data: {
        //添加地址弹窗
        showAddAddress: false,
        showEditAddress: false,
        addressId: "",
        //是否激活编辑地址
        addressActive: false,
        //用于控制：没有创建地址时显示新增按钮
        noAddress: true,
        //getfromApi
        addresses: [],

        //提交的表单
        orderForm: {},
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

        //    促销信息  todo get from api
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
    methods: {
        onLoad: function (options) {
            const eventChannel = this.getOpenerEventChannel()
            // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
            eventChannel.on('orderItems', function (data) {
                data.orderItems.forEach(item => {
                    //todo get data from api
                    console.log(item.productCode)
                })
            })
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onShow: function () {
            this.getAddresses()
        },

        //address
        getAddresses() {
            address.getList({customer_id: globalData.userInfo.id}).then(res => {
                res.list.map(item => {
                    item.is_default = item.is_default === 1

                    //设置默认的收货信息
                    if (item.is_default) {
                        this.setData({
                            'form.receipt': item
                        })
                    }
                })
                this.setData({
                    addresses: res.list
                })
            })

        },
        selectAddress(e) {
            //    set default
            this.data.addresses.map(item => {
                item.is_default = item.id === e.currentTarget.dataset.item.id
            })
            this.setData({
                addresses: this.data.addresses
            })
        },
        confirmAddAddress(e) {
            this.closeAddAddress()
            this.getAddresses()
        },
        confirmEditAddress(e) {
            this.closeEditAddress()
            this.getAddresses()
        },
        //显示可编辑地址
        editAddress() {
            // ?get api
            this.setData({
                addressActive: true
            })
        },
        //编辑单条地址弹窗
        editAnAddress(e) {
            this.setData({
                showEditAddress: true,
                addressId: e.currentTarget.dataset.id
            })
        },
        delAddress(e) {
            address.del(e.currentTarget.dataset.id).then(res => {
                this.getAddresses()
            })
        },
        confirmAddress() {
            //set api
            this.data.addresses.map(item => {
                //数据转换
                item.is_default = item.is_default ? 1 : 0
                //todo 无法修改
                address.put(item.id, item).then(() => {

                    this.setData({
                        addressActive: false,
                        'form.receipt': item
                    })
                })
            })
        },
        showAddAddress() {
            this.setData({
                showAddAddress: true
            })
        },
        closeAddAddress() {
            this.setData({
                showAddAddress: false
            })
        }, closeEditAddress() {
            this.setData({
                showEditAddress: false
            })
        },
        //通用的setdata, 不需要额外处理的setdata,
        set(e) {
            let prop = e.currentTarget.dataset.prop
            let value = e.currentTarget.dataset.value
            console.log(`setData:{${prop}:${value}`)
            this.setData({
                [prop]: value
            })
        },
        //通用的setdetail, 不需要额外处理的setdata,
        setDetail(e) {
            let prop = e.currentTarget.dataset.prop
            let value = e.detail
            console.log(`setData:{${prop}:${value}`)
            this.setData({
                [prop]: value
            })
        },
        postOrder() {
            //todo add data
            order.add({id: new Date().getTime()}).then((res) => {
                //todo remove wxstorage
                wx.$go("/pages/shopping/order/success/index", {id: res.data.id});
            })
        },
        tapDelivery(e) {
            console.log(e)
            this.setData({
                ['orderForm.delivery']: e.detail
            })
        }
    }


})
