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
        product:{
            type:Object,
            value: {}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        go: function (e) {
            //todo set product code
            wx.$go(e.currentTarget.dataset.url)
        },
    }
})
