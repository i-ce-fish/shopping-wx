// pages/catagory/colors/main.js
Page({

    /**
     * 页面的初始数据
     */
    data: {


        product: {
            name: "麻混纺宽腿裤 (附腰带)(老爹裤)",
            code: "424932",
            category: "女装",

            colors: [{
                color_thumbnail: "https://www.uniqlo.cn/hmall/test/u0000000016501/chip/22/COL31.jpg",
                product_thumbnail: "https://www.uniqlo.cn/hmall/test/u0000000016501/main/first/561/1.jpg",
                name: "黄色",
                code: "10"
            },
                {
                    color_thumbnail: "https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL00.jpg",
                    product_thumbnail: "https://www.uniqlo.cn/hmall/test/u0000000016502/main/first/561/1.jpg",
                    name: "黄色",
                    code: "11",
                },
                {
                    color_thumbnail: "https://www.uniqlo.cn/hmall/test/u0000000016503/chip/22/COL09.jpg",
                    product_thumbnail: "https://www.uniqlo.cn/hmall/test/u0000000013572/main/first/561/1.jpg",
                    name: "黄色",
                    code: "12"
                },
            ],


            carousels: [{
                url: "https://www.uniqlo.cn/hmall/test/u0000000015484/main/first/1000/1.jpg"
            },
                {
                    url: "https://www.uniqlo.cn/hmall/test/u0000000015484/main/other1/1000/2.jpg"
                },
                {
                    url: "https://www.uniqlo.cn/hmall/test/u0000000015484/main/other2/1000/3.jpg"
                },
                {
                    url: "https://www.uniqlo.cn/hmall/test/u0000000015484/main/other3/1000/4.jpg"
                }

            ],
        },
        color_intro: [
            {
                title: "店长说色",
                contents: [
                    {title: "本款共6个颜色，本店只进货4个颜色。"},
                    {title: "全部颜色均为采用植物活性染料制作，对皮肤无伤害。"},
                    {title: "色牢度符合国家标准和欧盟标准，正常使用不掉色"},
                    {title: "图案为转印工艺，和阿玛尼、爱马仕等奢侈品同样的工艺技术。"}
                ]
            },
            {
                title: "店长提示",
                contents: [
                    {title: "1、本款为纯棉制品，正常情况下会有4%的缩水。本款为修身版型，考虑洗水后缩小，因此：正常体型者，建议选购加大一码！"},
                    {title: "2、本款对身型瘦削者特别合适。"},
                    {title: "3、腰围偏大者慎选。"},
                    {title: "4、若对尺码存疑，建议试穿时不要剪掉衣服吊牌，保管好货品和包装物。店铺规定，若不影响第二次销售，7天之内可以退换。"},
                    {title: "5、门店免费剪裤脚。裤脚裁剪后不能退换。"},
                    {title: "6、门店为会员提供本店售出货品特殊改装，特殊修改收费。"}
                ]
            }

        ],
        activeColl: ['1', '2']


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
    setDetail(e) {
        this.setData({
            [e.currentTarget.dataset.prop]: e.detail
        })
    }

})
