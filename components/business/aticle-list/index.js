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
            wx.$go(e.currentTarget.dataset.url)
        }
    }
});
