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

        show: function (e) {
            //原点是指渲染完成的位置
            // this.setData({iconRotate: this.iconAni.export(), collapse: false})
            // this.iconAni.rotate(180).step()
            this.setData({
                [`filterData[${e.currentTarget.dataset.index}].collapse`]: true
            })
        },
        hide(e) {
            // this.iconAni.rotate(0).step()
            // this.setData({iconRotate: this.iconAni.export(), collapse: true})
            this.setData({
                [`filterData[${e.currentTarget.dataset.index}].collapse`]: false
            })

        },

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
        tapCheckbox(e) {
            this.setData({
                [e.currentTarget.dataset.prop]: e.detail
            })

        }

    }
});
