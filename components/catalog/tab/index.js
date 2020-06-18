// components/test.js
Component({
    //启用aap.wxss全局样式
    options: {
        addGlobalClass: true,
    },
    /**
     * 组件的属性列表
     */
    properties: {

        catalogs: {
            type: Array,
            value: [{title: "WOMEN"}, {title: "MEN"}, {title: "KID"}, {title: "BABY"}]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        ontap(e) {
            this.data.catalogs.map((item, index) => {
                item.active = (e.currentTarget.dataset.index === index)
            })
            this.setData({
                catalogs: this.data.catalogs
            })

            this.triggerEvent('click',this.data.catalogs[e.currentTarget.dataset.index])
        }
    }
})
