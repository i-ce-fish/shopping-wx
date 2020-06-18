Component({

    //使用此组件需要在页面调用onPageScroll设置scrollTop
    properties: {
        //回顶部按钮距离底部距离 rpx
        bottom: {
            type: Number,
            value: 226
            //  160
        },
        //回顶部按钮距离右侧距离 rpx
        right: {
            type: Number,
            value: 0
        },
        //距离顶部多少距离显示 px
        top: {
            type: Number,
            value: -100
        },
        text:{
            type:String,
            value:"分享"
        }
    },
    observers: {

    },
    data: {

    },
    methods: {

    }
})
