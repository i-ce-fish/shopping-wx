// components/test.js
import {getAddress, putAddress} from "../../../api/address";
import area from "../../../utils/area";

Component({
    //启用aap.wxss全局样式
    options: {
        addGlobalClass: true,
    },
    /**
     * 组件的属性列表
     */
    properties: {
        value: {
            type: [String, Number],
            value: undefined
        }
    },

    observers: {
        'value': async function () {
            const res = await getAddress(this.data.value)
            this.setData({
                form: res
            })
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        //    地图数据
        areaList: area,
        showArea: false,
        //form
        form: {}
    },

    /**
     * 组件的方法列表
     */
    methods: {
        getData() {
            console.log(this.data.id)
            address.get(this.data.id).then(res => {
                console.log(res)
                this.setData({
                    form: res
                })
            })
        },
        //setData({prop:value})
        set(e) {
            let prop = e.currentTarget.dataset.value
            this.setData({[prop]: e.detail})
        },

        showArea() {
            this.setData({
                showArea: true
            })
        },
        closeArea() {
            this.setData({
                showArea: false
            })
        },
        confirmArea(e) {

            //todo 表单校验
            //todo  协调数据格式
            this.setData({
                'form.province': e.detail.values[0].name,
                'form.city': e.detail.values[1].name,
                'form.area': e.detail.values[2].name,
            })
            this.closeArea()
        },
        async confirm() {
            const res = await putAddress(this.data.value, this.data.form)
            this.triggerEvent("success", {receipt: res})

        },

    }
})
