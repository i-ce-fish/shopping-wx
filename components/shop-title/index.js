let app = getApp();
Component({
    options: {
        addGlobalClass: true
    },
    properties: {
        title: {
            type: String,
            value: app.globalData.shopName
        }
    },
    data: {},
    methods: {}
});
