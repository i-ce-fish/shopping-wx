// pages/catagory/sizes/main.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        size_chart: {
            talent: {
                title: "达人选码",
                rules: [
                    {title: "本款为修身版，凸显身材，显干练精神。"},
                    {title: "上衣（衬衫）是否合身："},
                    {title: "1、首先看肩宽。本款为修身版，不建议肩宽超过身体太多。"},
                    {title: "2、确定脖围尺寸。衬衫脖围比较重要，过大过小都不合适。一般以扣好后，轻松插进一根手指为宜。"}
                    , {title: "3、确定腰围。本款修身版，比合体版小3cm。本款为立体裁剪，有收腰设计，突显腰部曲线。"}
                    , {title: "4、确定衣长，衣长合体版一般到臀部中位。修身版会略短1-2cm。"}
                    , {title: "5、袖长超过腕关节，"}
                ]
            },
            manager: {
                title: "店长提示",
                rules: [
                    {title: "1、本款为纯棉制品，正常情况下会有4%的缩水。本款为修身版型，考虑洗水后缩小，因此：正常体型者，建议选购加大一码！"},
                    {title: "2、本款对身型瘦削者特别合适。"},
                    {title: "3、腰围偏大者慎选。"},
                    {title: "4、若对尺码存疑，建议试穿时不要剪掉衣服吊牌，保管好货品和包装物。店铺规定，若不影响第二次销售，7天之内可以退换。"},
                    {title: "5、门店免费剪裤脚。裤脚裁剪后不能退换。"},
                    {title: "6、门店为会员提供本店售出货品特殊改装，特殊修改收费。"}
                ]
            }
            , chart: {
                title: "尺码对照表",
                url: "http://shop.cdb99.com/uploads/20200425/074453005476.jpg"
            },
            desc: {
                title: "丈量方法说明",
                imgs: [
                    {
                        url: "https://www.uniqlo.cn/public/image/L3/special/hemup/dang/3.jpg"

                    }, {
                        url: "https://www.uniqlo.cn/public/image/L3/special/hemup/dang/4.jpg"

                    }]
            },
        },
        // 折叠面板
        activeColl: ['1', '2', '3', '4'],
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
    },
})
