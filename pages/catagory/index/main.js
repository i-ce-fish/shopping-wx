// pages/catagory/index/main.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

        testImg: "https://source.unsplash.com/random",
        tabbar: ["推荐分类", "进口超市", "国际名牌", "奢侈品", "海囤全球", "男装", "女装", "男鞋", "女鞋", "钟表珠宝", "手机数码", "电脑办公", "家用电器", "玩具乐器", "运动户外", "宠物生活", "特产馆"],
        menuHeight: "", //菜单高度
        currentTab: 0, //预设当前项的值
        scrollTop: 0 //tab标题的滚动条位置

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    menuHeight: res.windowHeight - res.windowWidth / 750 * 92
                });

            }
        });
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
        this.getTabBar().setData({
            activeTab: 1
          });
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

    // 点击标题切换当前页时改变样式
    swichNav: function (e) {
        let cur = e.currentTarget.dataset.current;
        if (this.data.currentTab == cur) {
            return false;
        } else {
            wx.pageScrollTo({
                scrollTop: 0
            })
            this.setData({
                currentTab: cur
            })
            this.checkCor();
        }
    },
    //判断当前滚动超过一屏时，设置tab标题滚动条。
    checkCor: function () {
        let that = this;
        //这里计算按照实际情况进行修改，动态数据要进行动态分析
        //思路：窗体高度/单个分类高度 200rpx 转px计算 =>得到一屏幕所显示的个数，结合后台传回分类总数进行计算
        //数据很多可以多次if判断然后进行滚动距离计算即可
        if (that.data.currentTab > 7) {
            that.setData({
                scrollTop: 500
            })
        } else {
            that.setData({
                scrollTop: 0
            })
        }
    },
    detail(e) {
        // wx.navigateTo({
        //   url: 'pages/catagory/product-list/main'
        // })
        wx.$go('/pages/catagory/product-list/main')

    },
    productList(e) {
        let key = e.currentTarget.dataset.key;
        // wx.navigateTo({
        //   // url: '../extend-view/productList/productList?searchKey=' + key
        // })
        wx.$go('/pages/catagory/product-list/main')
    },
    search: function () {
        wx.$go('/pages/catagory/search/main')
    }
    ,
    go: function (e) {
        wx.$go(e.currentTarget.dataset.url)
    }


})
