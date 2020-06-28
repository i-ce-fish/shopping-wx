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
