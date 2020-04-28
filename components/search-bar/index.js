Component({
    properties: {
        // 属性值可以在组件使用时指定
    },
    data: {
        // 这里是一些组件内部数据
        show: false,
        keyword:"",
        hot_search:['男装','羽绒服','秋裤','卫衣','男装','男装'],
        recent_search:['男装','羽绒服','秋裤','卫衣','男装','男装','羽绒服','秋裤','卫衣','男装','男装','羽绒服','秋裤','卫衣','男装','男装']
    },
    methods: {
        // 这里是一个自定义方法
        onClose(e) {
            console.log(e)
        }
        ,
        onTap() {
            this.setData({
                show: !this.data.show
            })
        }
    }
})
