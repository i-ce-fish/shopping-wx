Component({
    options: {addGlobalClass: true},

    lifetimes: {
        ready() {
            // this.iconAni = wx.createAnimation()
            this.data.filterData.forEach(item => {
                item.collapse = true
            })
        }
    },
    properties: {

        filterData: {
            type: Array,
            value: []
        },



    },
    data: {
        //显示条件筛选弹窗
        showFilter: false,
    },
    methods: {


        showFilter() {
            this.setData({
                showFilter: true
            })
        },
        closeFilter() {
            this.setData({
                showFilter: false
            })
        },
        setDetail(e) {
            this.setData({
                [e.currentTarget.dataset.prop]: e.detail
            })
        },
        resetFilter() {
            this.data.filterData.map(item => {
                item.checked = ""
            })
            this.setData({
                filterData: this.data.filterData,
            })
        },
        tapConfirm() {
            //todo set product data
            this.triggerEvent('success', {})
            this.closeFilter()
        },


    }
});
