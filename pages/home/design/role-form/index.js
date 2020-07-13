Component({
    properties: {},
    data: {
        form: {
            height: 160,
            weight: 55
        }
    },
    methods: {
        onLoad: function (options) {

        },
        set(e) {
            let prop = e.currentTarget.dataset.prop
            this.setData({
                [`${prop}`]: e.detail
            })
        },

        dragHeight(e) {
            this.setData({
                'form.height': e.detail.value,
            });
        },
        dragWeight(e) {
            this.setData({
                'form.weight': e.detail.value,
            });
        },
        tapSex(e) {
            this.setData({
                'form.sex': e.detail
            })
        }
    }

});
