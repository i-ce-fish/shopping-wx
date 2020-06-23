Component({
    options: {
        addGlobalClass: true
    },
    properties: {
        list: {
            type: Array,
            value: []
        },
        //设置激活状态的索引
        activeIndex: {
            type: String,
            value: ''
        }
    },
    data: {},
    methods: {
        go(e) {
            wx.$go(e.currentTarget.dataset.url)

        }
    }
});
