// pages/catagory/index/main.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

        testImg: "https://www.uniqlo.cn/public/image/L3/men/special/polo/item1.jpg",
        menuHeight: "", //菜单高度

        mainActiveIndex: 0,
        activeId: null,
        categories: [
            {text: '男装'},
            {text: '女装'},
            {text: '童装'},
            {text: '男装'},
            {text: '男装'},
            {text: '男装'},
            {text: '男装'},
            {text: '男装'},
            {text: '男装'},
            {text: '男装'},
            {text: '男装'},
            {text: '男装'},
            {text: '男装'},
            {text: '男装'},
            {text: '男装'},
            {text: '男装'},
            {text: '男装'},
            {text: '男装'},
            {text: '男装'},
            {text: '男装0'}
        ],

        products: [
            {name: "新款T恤", price: "9.99"},
            {name: "新款T恤", price: "9.99"},
            {name: "新款T恤", price: "9.99"},
            {name: "新款T恤", price: "9.99"},
            {name: "新款T恤", price: "9.99"},
            {name: "新款T恤", price: "9.99"},
            {name: "新款T恤", price: "9.99"},
            {name: "新款T恤", price: "9.99"},
            {name: "新款T恤", price: "9.99"},
            {name: "新款T恤", price: "9.99"},
            {name: "新款T恤", price: "9.99"},
            {name: "新款T恤", price: "9.99"},
            {name: "新款T恤", price: "9.99"},
            {name: "新款T恤", price: "9.99"},
            {name: "新款T恤", price: "9.99"},
            {name: "新款T恤", price: "9.99"}
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    //菜单高度计算公式：（窗口高度px - 底部栏50px）rpx  -  搜索栏 112 rpx
                    menuHeight: wx.$rpx(res.windowHeight - 50) - 112 + 'rpx'
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
    }
    ,
    onClickNav({detail = {}}) {
        this.setData({
            mainActiveIndex: detail.index || 0
        });
    },

    onClickItem({detail = {}}) {
        const activeId = this.data.activeId === detail.id ? null : detail.id;

        this.setData({activeId});
    }

})
