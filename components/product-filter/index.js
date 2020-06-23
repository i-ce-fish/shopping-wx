Component({
    options: {addGlobalClass: true},

    observers: {
        //**监听所有子字段，显示已经勾选的条件数量
        'filterData.**': function () {
            let index = 0
            for (const prop in this.data.filterData) {
                //价格需要单独监听，不然数据会错乱
                if (prop === 'price') {
                    continue
                }
                //计算数量总和
                let sum = 0;
                this.data.filterData[prop].item.forEach(item => {
                    // 数字0时会自动转型
                    if (item.checked || item.checked === 0) {
                        sum++
                    }
                })
                this.setData({
                    [`tabs[${index}].sum`]: sum
                })
                //遍历用的索引
                index++
            }
        },
        //    单独监听价格，数据格式不一样，勾选价格也显示sum的数字，因为wxml是遍历的，不能设置checked
        'filterData.price.**': function () {
            let checked = 0
            let price = this.data.filterData.price.checked;
            // 数字0时会自动转型
            if (price || price === 0) {
                checked = '1'
            }
            this.setData({
                [`tabs[3].sum`]: checked
            })

        }
    }
    ,
    properties: {
        //ps:分开数组格式和对象格式，因为分别需要这两种格式数据来做处理
        tabs: {
            type: Array,
            value: [],
        },
        filterData: {
            type: Object,
            value: {}
        },
        //自定义筛选弹窗的触发的样式
        useSlot: {
            type: Boolean,
            value: false
        },

    },
    data: {
        //当前选中的筛选条件tabs
        filterActive: 0,
        //显示条件筛选弹窗
        showFilter: false,
        //条件筛选tab标签页，api获取的数据和用来显示的tab分开
        // filterTabs: [
        //     {icon: 'apps-o', title: '风格'},
        //     {icon: 'apps-o', title: '尺码'},
        //     {icon: 'apps-o', title: '颜色'},
        //     {icon: 'apps-o', title: '价格'}
        // ],
        //todo get 可筛选条件from api ， 每次点击都重新请求可筛选条件和总件数，和商品
        //todo 分类加入筛选条件
        // 几个tab的数据格式保持一致，方便监听、重置等操作的遍历
        // filter: {
        //     style: {
        //         item: [
        //             {
        //                 item: ["二级分类1", '二级分类2', '二级分类3'],
        //                 name: "二级分类"
        //             },
        //             {
        //                 item: [
        //                     "锦纶",
        //                     "氨纶",
        //                     "棉",
        //                     "聚酯纤维"
        //                 ],
        //                 name: "材质"
        //             }, {
        //                 item: [
        //                     "2020年春季",
        //                     "2019年春季",
        //                     "2019年秋季",
        //                     "2020年夏季",
        //                     "2019年夏季"
        //                 ],
        //                 name: "上市季节"
        //             },
        //             {
        //                 item: [
        //                     "促销活动",
        //                     "限时特优",
        //                     "支持门店自提",
        //                 ],
        //                 name: "其他条件"
        //             },
        //             {
        //                 item: [
        //                     "男装",
        //                     "女装"
        //                 ],
        //                 name: "适用性别"
        //             }],
        //         name: '风格'
        //     },
        //     size: {
        //         item: [
        //             {
        //                 "sizeValue": "XS",
        //                 "sizeCode": "SMA002",
        //             },
        //             {
        //                 "sizeValue": "S",
        //                 "sizeCode": "SMA003",
        //             },
        //             {
        //                 "sizeValue": "M",
        //                 "sizeCode": "SMA004",
        //             },
        //             {
        //                 "sizeValue": "L",
        //                 "sizeCode": "SMA005",
        //             },
        //             {
        //                 "sizeValue": "XL",
        //                 "sizeCode": "SMA006",
        //             },
        //             {
        //                 "sizeValue": "XXL",
        //                 "sizeCode": "SMA007",
        //             },
        //             {
        //                 "sizeValue": "3XL",
        //                 "sizeCode": "SMA008",
        //             },
        //             {
        //                 "sizeValue": "4XL",
        //                 "sizeCode": "SMA009",
        //             }
        //         ],
        //         name: "尺码"
        //     },
        //     color: {
        //         item: [
        //             {
        //                 "colorName": "白色系",
        //                 "background": "#FFFFFF",
        //                 "colorNo": "COL00",
        //                 "fontColor": "#000000"
        //             },
        //             {
        //                 "colorName": "灰色系",
        //
        //                 "background": "#D4D4D4",
        //                 "colorNo": "COL06",
        //                 "fontColor": "#000000"
        //             },
        //             {
        //                 "colorName": "黑色系",
        //
        //                 "background": "#262626",
        //                 "colorNo": "COL09",
        //                 "fontColor": "#FFFFFF"
        //             },
        //             {
        //                 "colorName": "粉色系",
        //
        //                 "background": "#F5BCC1",
        //                 "colorNo": "COL11",
        //                 "fontColor": "#000000"
        //             },
        //             {
        //                 "colorName": "红色系",
        //
        //                 "background": "#E82525",
        //                 "colorNo": "COL14",
        //                 "fontColor": "#000000"
        //             },
        //             {
        //                 "colorName": "橙色系",
        //
        //                 "background": "#F2A427",
        //                 "colorNo": "COL28",
        //                 "fontColor": "#000000"
        //             },
        //             {
        //                 "colorName": "米色系",
        //
        //                 "background": "#E6E2CC",
        //                 "colorNo": "COL32",
        //                 "fontColor": "#000000"
        //             },
        //             {
        //                 "colorName": "棕色系",
        //
        //                 "background": "#714E38",
        //                 "colorNo": "COL38",
        //                 "fontColor": "#FFFFFF"
        //             },
        //             {
        //                 "colorName": "黄色系",
        //
        //                 "background": "#FFFD53",
        //                 "colorNo": "COL43",
        //                 "fontColor": "#000000"
        //             },
        //             {
        //                 "colorName": "绿色系",
        //
        //                 "background": "#2F8C2A",
        //                 "colorNo": "COL50",
        //                 "fontColor": "#FFFFFF"
        //             },
        //             {
        //                 "colorName": "蓝色系",
        //
        //                 "background": "#2D58CF",
        //                 "colorNo": "COL69",
        //                 "fontColor": "#FFFFFF"
        //             },
        //             {
        //                 "colorName": "紫色系",
        //                 "background": "#6D2B7A",
        //                 "colorNo": "COL77",
        //                 "fontColor": "#FFFFFF"
        //             }
        //         ],
        //         name: "颜色"
        //     },
        //     price: {
        //         item: [
        //             {title: "￥100以下", value: "<100"}, {title: "￥100-￥200", value: "<=100"},
        //             {title: "￥200-￥300", value: "200-300"},
        //             {title: "￥300以上", value: ">=300"}
        //         ],
        //         name: "价格",
        //         //todo 设置价格区间
        //         max: '',
        //         min: ''
        //     },
        // },
    },
    methods: {
        tapFilter() {
            this.setData({
                showFilter: true
            })
        },
        closeFilter() {
            this.setData({
                showFilter: false
            })
        },
        tapFilterTab(e) {
            this.setData({
                filterActive: e.currentTarget.dataset.id
            })
        }
        ,
        setDetail(e) {
            this.setData({
                [e.currentTarget.dataset.prop]: e.detail
            })
        },
        selectStyle(e) {
            const index = e.currentTarget.dataset.index
            //取消重复勾选
            if (e.detail === this.data.filterData.style.item[index].checked) {
                e.detail = "";
            }

            this.setDetail(e);
            //    todo get data from api  and update filter condition
        },
        selectSize(e) {
            let index = e.currentTarget.dataset.index
            this.setData({
                [`filterData.size.item[${index}].checked`]: !this.data.filterData.size.item[index].checked
            })
            //    todo  update
        },
        selectColor(e) {
            let index = e.currentTarget.dataset.index
            this.setData({
                [`filterData.color.item[${index}].checked`]: !this.data.filterData.color.item[index].checked
            })
            //    todo update
        },
        selectPrice(e) {
            //取消重复勾选
            if (e.detail === this.data.filterData.price.checked) {
                e.detail = ""
            }

            this.setData({
                'filterData.price.checked': e.detail
            })
            //    todo update
        },
        resetFilter() {
            for (const prop in this.data.filterData) {
                this.data.filterData[prop].item.map(item => {
                    item.checked = ""
                })
            }
            this.data.filterData.price.checked = ""
            //todo 重置价格区间
            this.setData({
                filterData: this.data.filterData,
            })
        },
        tapConfirm() {
            //todo set product data
            this.triggerEvent('success', {})
            this.closeFilter()
        }
    }
});
