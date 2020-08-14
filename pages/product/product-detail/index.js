// pages/rule/integral/main.js


import {getGood} from "../../../api/goods";
import {getGoodsize} from "../../../api/goodsize";
import _ from '../../../utils/lodash.min'

const app = getApp()

App.Page({
    useStore: true,
    /**
     * 页面的初始数据
     */
    data: {
        topSticky: [
            {title: "商品细节", icon: 'apps-o', url: '1'},
            {title: "穿法搭配", icon: 'apps-o', url: '2'},
            {title: "我能穿吗", icon: 'apps-o', url: '2'},
            {title: "我想还价", icon: 'apps-o', url: '2'}
        ],
        //fade
        id: "130",
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
            category: "女装",
            detail: [{
                url: "https://www.uniqlo.cn/hmall/test/u0000000015484/detail/393/1.jpg"
            }, {
                url: "https://www.uniqlo.cn/hmall/test/u0000000015484/detail/393/2.jpg"
            }, {
                url: "https://www.uniqlo.cn/hmall/test/u0000000015484/detail/393/3.jpg"
            }, {
                url: "https://www.uniqlo.cn/hmall/test/u0000000015484/detail/393/4.jpg"
            },],
        },
        //近似商品
        similarProducts: [{
            img: "https://www.uniqlo.cn/hmall/test/u0000000016501/main/first/561/1.jpg",
            name: "麻混纺宽腿裤 (附腰带)(老爹裤)",
            code: "424932",
            category: "女装",


            original_price: "199.0",
            onsale_price: "179.1",
            vip_price: "159.2",
            intro: "商品简介简介简介简介",
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
            original_price: "199.0",
            onsale_price: "179.1",
            vip_price: "159.2",
            intro: "商品简介简介简介简介",
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
            original_price: "199.0",
            onsale_price: "179.1",
            vip_price: "159.2",
            intro: "商品简介简介简介简介",
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
            original_price: "199.0",
            onsale_price: "179.1",
            vip_price: "159.2",
            intro: "商品简介简介简介简介",
            colors: [
                {url: "https://www.uniqlo.cn/hmall/test/u0000000016501/chip/22/COL31.jpg"},
                {url: "https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL00.jpg"},
                {url: "https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL09.jpg"},
            ]
        }
        ],

        //穿法推荐
        wearList: [

            {
                img: 'https://www.uniqlo.cn/hmall/test/u0000000015482/model/rank1/first/591-822/1.jpg',
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
                img: 'https://www.uniqlo.cn/hmall/test/u0000000015482/main/other3/1000/4.jpg',
                code: 'CFA216541',
                title: '夏日都市养眼大气清纯气质财运商务通勤装',
                subtitle: ''
            }
        ],

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
        activeColl: ['2'],

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        //    todo get data from api

        //可能从分享页进来, 需要通过url传参
        let id = _.get(app, '$router.params.id', options.id || 72)

        this.setData({
            id
        })


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
    onShow: function (options) {

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
    //页面滚动执行方式
    onPageScroll(e) {
        this.setData({
            scrollTop: e.scrollTop
        })
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        //todo set id
        //todo add  color and size parameter
        return {
            title: 'TEST',
            imageUrl: 'https://www.uniqlo.cn/hmall/test/u0000000016285/main/first/1000/1.jpg',// 图片 URL
            path: 'product/product-detail?id=' + 123
        };
    },

    go(e) {
        let dataset = e.currentTarget.dataset;
        app.$router.push(dataset.url, {id: dataset.id})
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
            //设置tabbar徽标提示 与全局num
            let {cart} = app.store.getState()
            cart.totalNum = cart.totalNum + 1
            app.store.setState({
                cart
            });
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
        app.$router.push('shopping/order/item')
        // let that = this
        // wx.navigateTo({
        //     url: '/pages/shopping/order/item/index',
        //     success: function (res) {
        //         // 数组格式pro，统一格式
        //         res.eventChannel.emit('orderItems', {orderItems: [that.data.checkedProduct]})
        //     }
        // })
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
    async getProduct() {
        let res = await getGood(this.data.id)
        //todo add fade data
        let fadeData = {
            label: ["欧洲最新轻薄高科技", "纽约时装周爆品", "纽约时装周爆品2"],
            parm: {
                code: '41870900345',
                marketSeason: '2020夏季',
                styles: ['少淑', '简约', '北欧', '碎花', '拼接', '自定义'],
                details: ['高腰', '彼得潘领', '泡泡袖', 'H型裙', '拼接'],
                washInfo: "机洗，水温60°C以下",
                templateType: ['超级紧身', '紧身', '修身', '合体', '宽松'],
                material: [
                    {key: '大身', value: '棉80%  聚酯纤维20%  铜氨纤维12%'},
                    {key: "填充物", value: "70%白鸭绒"},
                    {key: "内衬", value: "10%粘胶纤维"}],

                others: [{title: '自定义', content: '自定义参数'}]
            },
            // material: '[{"key":"大身","value":"棉80%  聚酯纤维20%  铜氨纤维12%"},{"key":"填充物","value":"70%白鸭绒"},{"key":"内衬","value":"10%粘胶纤维"}]',
            introduction: {
                style: {
                    type: "这款是经典的北欧简约风，线条简单，看起来就清爽，没有多余的口袋和细节",
                    fashion: "这款是今年开始流行的。去年开始在纽约和巴黎街头出现。某某大明星出街同款他非常适合穿这个款，显得很酷，网红某某在最爱。",
                    origin: "这是日本本土工匠亲自制作，亲切亲自亲自亲自其子女，这是日本本土工匠亲自制作，亲切亲自亲自亲自其子女，这是日本本土工匠亲自制作，亲切亲自亲自亲自其子女",
                    detail: "从商品每一个部位特征开始找话题。袖子是什么类型，如何好，显得很酷，裤长如何贴心。",
                    carousels: [{url: 'https://www.uniqlo.cn/hmall/test/u0000000017942/main/first/561/1.jpg'},
                        {url: 'https://www.uniqlo.cn/hmall/test/u0000000017945/main/first/561/1.jpg'},
                        {url: 'https://www.uniqlo.cn/hmall/test/u0000000017887/main/first/561/1.jpg'},
                        {url: 'https://www.uniqlo.cn/hmall/test/u0000000013930/main/first/561/1.jpg'},
                        {url: 'https://www.uniqlo.cn/hmall/test/u0000000017562/main/first/561/1.jpg'}
                    ],
                    detailImgs: ['https://www.uniqlo.cn/hmall/test/u0000000013680/main/first/561/1.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000013683/main/first/561/1.jpg'],
                    others: [
                        {title: '自定义', content: "自定义内容"},
                        {title: '自定义', content: "自定义内容"}
                    ]
                },
                fabric: "由阿玛尼同厂加工\n,中国衬衫十大工厂中的前5名。以做出口外单为主的。工厂有优衣库日本的验厂报告单 ,莱卡面料弹性非常好，\n一般是用在高档衣服上。本商品莱卡是版权授权方,面料独家高科技,特殊的斜纹布，纱线支数为60支，一般为40支。\n" +
                    "支数越高，手感越好，穿着越贴身舒适。面料颜色为植物染料，通过植物染色方法。植物染料和植\n物染色，比化学染料及化学染色成本高了10倍，一般用于婴幼儿服装和各种内衣。",
                people: "中性款，男女都可以穿\n单件适合青少年，也合适中年\n休闲场合，居家、旅游等\n不适宜正装要求场所请慎重。\n合适低调内敛型的角色打造",
                wearEffect: "整体比较显瘦。视觉上拉伸颈部。\n手臂粗壮的人，特别合适\n有效遮挡腹部赘肉",
                others: [
                    {title: '自定义', content: "自定义内容"},
                    {title: '自定义', content: "自定义内容"}
                ]
            },
            // introduction:[
            //     {
            //         name:'关于款式/风格',
            //         style: {
            //             type: "这款是经典的北欧简约风，线条简单，看起来就清爽，没有多余的口袋和细节",
            //             fashion: "这款是今年开始流行的。去年开始在纽约和巴黎街头出现。某某大明星出街同款他非常适合穿这个款，显得很酷，网红某某在最爱。",
            //             origin: "这是日本本土工匠亲自制作，亲切亲自亲自亲自其子女，这是日本本土工匠亲自制作，亲切亲自亲自亲自其子女，这是日本本土工匠亲自制作，亲切亲自亲自亲自其子女",
            //             detail: "从商品每一个部位特征开始找话题。袖子是什么类型，如何好，显得很酷，裤长如何贴心。",
            //             carousels: [{url: 'https://www.uniqlo.cn/hmall/test/u0000000017942/main/first/561/1.jpg'},
            //                 {url: 'https://www.uniqlo.cn/hmall/test/u0000000017945/main/first/561/1.jpg'},
            //                 {url: 'https://www.uniqlo.cn/hmall/test/u0000000017887/main/first/561/1.jpg'},
            //                 {url: 'https://www.uniqlo.cn/hmall/test/u0000000013930/main/first/561/1.jpg'},
            //                 {url: 'https://www.uniqlo.cn/hmall/test/u0000000017562/main/first/561/1.jpg'}
            //             ],
            //             detailImgs: ['https://www.uniqlo.cn/hmall/test/u0000000013680/main/first/561/1.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000013683/main/first/561/1.jpg']
            //         }
            //     }
            // ]

        }
        res = {...res, ...fadeData}
        res = this.preProduct(res)
        this.setData({
            product: res
        })


    },


    /**
     * 商品数据预处理
     * 反序列化部分字段
     * @param pro
     * @returns {*}
     */
    preProduct(pro) {
        let props = ["material", "colors", "carousels", "produt_parameter", "sizes"]
        props.forEach(item => {
            pro[item] = JSON.parse(pro[item])
        })
        return pro
    },
    async getInventory() {
        let inventoryMap = new Map()
        let colors = []
        let sizes = []

        let res = await getGoodsize(this.data.id)
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
    },
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
    },
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
    },
//    点击顶部的导航条，滚到指定位置
    tapTopSticky(e) {
        console.log(e)
        if (e.currentTarget.dataset.index === 0) {
        }
        if (e.currentTarget.dataset.index === 1) {
            wx.pageScrollTo({selector: "#wear-recommend"})
        }
        if (e.currentTarget.dataset.index === 2) {
            app.$router.push('product/can-wear')
        }
        if (e.currentTarget.dataset.index === 3) {
            app.$router.push('product/bargain')
        }
    },
    tapFeedback(e) {
        wx.$go("/pages/home/design/design-for-me/index", {id: 1, type: 'pro'})
    }
})
