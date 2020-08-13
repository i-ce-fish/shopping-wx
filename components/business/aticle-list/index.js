let app = getApp()
Component({
    options: {
        addGlobalClass: true
    },
    properties: {
        list: {
            type: Array,
            value: []
        }

    },
    data: {},
    methods: {
        go(e) {
            let dataset = e.currentTarget.dataset;
            app.$router.push(dataset.url, {id: dataset.id})
        },
    }
});
