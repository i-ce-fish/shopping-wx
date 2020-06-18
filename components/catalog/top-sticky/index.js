// components/test.js
Component({
    //启用aap.wxss全局样式
    // options: {
    //     addGlobalClass: true,
    // },
    /**
     * 组件的属性列表
     */
    properties: {
        catalogs: {
            type: Array,
            value: []
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

        upper(e) {
        },

        lower(e) {
        },

        scroll(e) {
        },

        scrollToTop() {
            this.setAction({
                scrollTop: 0
            })
        },

        tap() {
            for (let i = 0; i < order.length; ++i) {
                if (order[i] === this.data.toView) {
                    this.setData({
                        toView: order[i + 1],
                        scrollTop: (i + 1) * 200
                    })
                    break
                }
            }
        },

        tapMove() {
            this.setData({
                scrollTop: this.data.scrollTop + 10
            })
        },
        onTap(e) {
            this.triggerEvent('click', {index: e.currentTarget.dataset.index})
        }

    }
})
