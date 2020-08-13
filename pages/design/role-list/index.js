let app = getApp()
Page({
    data: {
        roles: [
            {
                name: "我",
                height: '170',
                weight: "55",
                shoulderWidth: "50",
                bust: "60",
                waist: "30",
                hips: "50",
            }, {
                name: "伴侣",
                height: '165',
                weight: "50",
                shoulderWidth: "50",
                bust: "60",
                waist: "30",
                hips: "50",
            }
        ],
        selected: 0,
        showDel: false
    },
    onLoad: function (options) {

    },
    tapRole(e) {
        //不允许取消勾选，至少要选中一个
        this.setData({
            selected: e.detail
        })
    },
   go(e) {
        let dataset = e.currentTarget.dataset;
        app.$router.push(dataset.url, {id: dataset.id})
    },
    tapDel(e) {
        this.setData({
            showDel: true
        })
    }
    ,
    onCloseDel() {
        this.setData({
            showDel: false
        })
    },
    post() {
        wx.$go('/pages/home/design/post-success/index')
    }
});
