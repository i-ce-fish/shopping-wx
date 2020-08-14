import {rpx2px} from "../../utils/wx-util";

const app = getApp()
const createRecycleContext = require('miniprogram-recycle-view')

Page({
    data: {
    },

    onReady: function () {
        let ctx = createRecycleContext({
            id: 'recycleId',
            dataKey: 'recycleList',
            page: this,
            itemSize: {
                width: rpx2px(750),
                height: rpx2px(300)
            }
        })
        let newList = []
        for (let i = 0; i < 200; i++) {
            newList.push({
                id: i,
                name: `xiaoman${i + 1}`
            })
        }
        ctx.append(newList)
    },
    onLoad: function () {
        console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    }
})


