Page({
    data: {

        shop: {
            qrcode: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593673011872&di=6e98e25a009f7ca0086899e8f015145d&imgtype=0&src=http%3A%2F%2Fefile.kaoyan.com%2Fimg%2F2020%2F05%2F25%2F193612_5ecbadac69b24.png',
            wxid: 'wxid_sdfkljdsfkl153',
            introduction: "你好，我是美邦丽水店老板娘杨晴文，很开心能为您服务。 我知道，你能理我，是您看得起我的小店。",
            address: "丽水市中山街店522号(百货大楼旁)",
            img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594305355691&di=ebac83c8ed797f88cfbfd91a9fee736c&imgtype=0&src=http%3A%2F%2Fwww.runman.com.cn%2FUploadFiles%2F2015-11%2F2%2F2015111111095753652.jpg"
        },


    },
    onLoad: function (options) {

    },
    //    对老板娘说
//  拨打电话
    tapCall() {
        wx.makePhoneCall({
            phoneNumber: '13266897543',
            success: (res) => {
                console.log(res)
            }

        })
    },
    tapBossQRCode(e) {
        wx.previewImage({
            current: this.data.shop.qrcode,
            urls: [this.data.shop.qrcode]
        })
    },
    tapWxid(e) {
        wx.setClipboardData({
            data: this.data.shop.wxid,
            success(res) {
                //    默认提示无法隐藏
            }
        })
    },
    tapAddress() {
        wx.openLocation({
            //     todo get latitude/longitude from api
            'latitude': 23.13,
            'longitude': 113.27,
            name: "永康美特斯邦威店",
            address: this.data.shop.address,
            scale: 28
        })
    }
});
