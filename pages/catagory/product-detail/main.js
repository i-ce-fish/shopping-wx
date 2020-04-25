// pages/rule/integral/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkedSize: "",
    checkedColor: "",
    product: {
      name: "麻混纺宽腿裤 (附腰带)(老爹裤)",
      code: "424932",
      category: "女装",
      origin_price: "499.00",
      inner_price: "299.00",
      vip_price: "199.00",
      inner_activities: [{
          title: "已打6折，共优惠 ¥160"
        },
        {
          title: "38女神节活动：会员春装新款6折"
        }
      ],
      vip_activities: [{
          title: "已打5折，共优惠¥199"
        }, {
          title: "三级及以上会员专享"
        }

      ],
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
      sizes: [{
          name: "S",
          all_name: "150/76A"
        },
        {
          name: "M",
          all_name: "150/76A"
        },
        {
          name: "L",
          all_name: "150/76A"
        },
        {
          name: 'XL',
          all_name: "150/76A"
        }
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

      code: "427516000",
      year: "2020",
      season: "春季",
      fabric: "棉50% 聚酯纤维50%",
      explan: "http://shop.cdb99.com/uploads/20200423/080919352649.png",
      details: [{
        url: "https://www.uniqlo.cn/hmall/test/u0000000015484/detail/393/1.jpg"
      }, {
        url: "https://www.uniqlo.cn/hmall/test/u0000000015484/detail/393/2.jpg"
      }, {
        url: "https://www.uniqlo.cn/hmall/test/u0000000015484/detail/393/3.jpg"
      }, {
        url: "https://www.uniqlo.cn/hmall/test/u0000000015484/detail/393/4.jpg"
      }, ]

    },


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
    activeColl: ['1', '2', '3', '4']
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
      showPopup: !this.data.showPopup
    })
  },
  onBuyNow() {},
  onTabs() {},
  onCollapse(e) {
    this.setData({
      activeColl: e.detail
    })
  },
  onRdioDelivery(e) {
    this.setData({
      delivery: e.detail
    })
  },
  onStepper() {}

})