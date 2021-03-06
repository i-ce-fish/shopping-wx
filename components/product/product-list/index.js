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
        products: {
            type: Array,
            value: []
        },
        title: {
            type: String,
            value: ""
        },
        showMore: {
            type: Boolean,
            value: false
        },
        categoryId: {
            type: String,
            value: ""
        },
        listView: {
            type: Boolean,
            value: true
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
        getMore() {
            getApp().$router.push('product/category-b')
        }
    }
})
