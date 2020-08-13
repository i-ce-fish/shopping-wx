Component({
    options: {addGlobalClass: true},
    properties: {
        list: {
            type: Array,
            value: []
        }
    },
    data: {
        active: ''
    },
    methods: {
        tap(e) {
            this.setData({
                active: e.currentTarget.dataset.index
            })
            this.triggerEvent('click', e.currentTarget.dataset.index)
        }
    }
});
