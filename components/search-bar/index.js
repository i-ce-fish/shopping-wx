Component({
    properties: {
        // 属性值可以在组件使用时指定
    },
    data: {
        // 这里是一些组件内部数据
        show: true
    },
    methods: {
        // 这里是一个自定义方法
        onClose(e) {
            console.log(e)
        }
        ,
        onTap() {
            console.log(this.data.show)
            this.setData({
                show: !this.data.show
            })
        }
    }
})
