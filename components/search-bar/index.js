Component({
    //启用aap.wxss全局样式
    options: {
        addGlobalClass: true,
    },
    properties: {
        // 是否显示扫一扫icon
        scanable: {
            type: Boolean,
            value: false
        }
    },
    data: {
        // 这里是一些组件内部数据
        show: false,
        keyword: "",
        hot_search: ['男装', '羽绒服', '秋裤', '卫衣', '男装', '男装'],
        recent_search: ['男装', '羽绒服', '秋裤', '卫衣', '男装', '男装', '羽绒服', '秋裤', '卫衣', '男装', '男装', '羽绒服', '秋裤', '卫衣', '男装', '男装']
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
        },
        search() {
            //todo add data
            wx.$go('/pages/shopping/search/index')
        },
        tapScan() {
            wx.scanCode({
                success(res) {
                    wx.$go('/pages/shopping/search/index', {keyword: res.result})
                }
            })
        }
    }
})
