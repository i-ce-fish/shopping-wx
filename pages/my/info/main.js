// pages/my/info/main.js
let provinceList = require("../../../utils/area")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        lists: ["公司", "家", "学校", "其他"],

        radio: '1',
        checkbox: ['a'],
        currentDate: new Date().getTime(),
        minDate: new Date().getTime(),
        dateTime: "请选择日期",
        showDatetime: false,
        formatter(type, value) {
            if (type === 'year') {
                return `${value}年`;
            } else if (type === 'month') {
                return `${value}月`;
            }
            return value;
        },

        showArea: false,
        provinceList: provinceList,
        areaValue: "请选择城市",
        stepper: 1,
        showPicker: false,
        pickerValue: "请选择",
        pickerList: [1, 2, 2, 3, 5, 6, 5]


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    go: function (e) {
        wx.$go(e.currentTarget.dataset.url)
    },

    onChange(e) {
        this.setData({
            radio: this.data.radio === e.detail ? null : e.detail
        })

    },
    onCheckbox(e) {

        let str = "checkbox"
        this.setData({
            [str]: e.detail
        })
    },
    onDate(e) {
        this.setData({
            currentDate: e.detail
        })
    },
    onShowDate() {
        this.setData({
            showDatetime: false
        })
    },
    onConfirmDatetime(e) {
        this.setData({
            dateTime: e.detail,
            showDatetime: false
        })
    },
    onConfirmArea(e) {
        console.log(e.detail)
        this.setData({
            areaValue: e.detail.values[2].name,
            showArea: false
        })
    },
    onChangeStepper(e) {
        this.setData({
            stepper: e.detail
        })

    },
    onChangePicker(e) {
        console.log(e)
        this.setData({
            pickerValue: e.detail.value
        })
    }

})