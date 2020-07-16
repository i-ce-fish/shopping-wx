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
        wear: {
            type: Object,
            value: {}
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
        go: function (e) {
            //todo set   code
            wx.$go(e.currentTarget.dataset.url)
        },
    }
})
