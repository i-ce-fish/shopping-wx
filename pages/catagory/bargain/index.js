Page({
    data: {
        // 讨价还价col
        activeColl_bargain: ['1', '2', '3', '4'],

        // 还价
        collect_order: {
            title: "凑单能再优惠",
            rules: [{
                title: "整单购满800元，立减/再送100元"
            }, {
                title: "满减能再优惠最多30元"
            }]
        },
        charge_discount: {
            title: "充值有赠送现金",
            rules: [{
                title: "充值会员卡：充2000元，送200元"
            },
                {
                    title: "充值2000元，升级为三级会员享受尊享价"
                },
            ]
        },

        redeem: {
            title: "积分可以换现金",
            rules: [{
                title: "100积分可兑换1元现金使用"
            },
                {
                    title: "本单最能能用500积分"
                }
            ]
        },

        copon: {
            title: " 使用优惠券",
            rules: [{
                title: "抵用券可以直接抵现金使用"
            },
                {
                    title: "满减券一次只能使用一张"
                }
            ]
        },


        //赚钱
        share: {
            title: "分享能赚钱： ¥19.12",
            rules: [
                {title: "介绍给亲友，亲友购买后，店铺给你红包。"}
                , {title: "一级分享佣金8%，239×8%=19.12"}
                , {title: "二级分享佣金2.5%，239×2.5%=5.96"}
            ]
        },

        forward: {
            title: "转发能赚积分",
            rules: [
                {title: "100积分可兑换1元现金使用"}
                , {title: "本单最能能用500积分"}
            ]
        },

        push: {
            title: "我想成为推手",
            rules: [
                {title: "推手培训联系电话：1361160****"}
                , {title: "推手躺赚3000元"}
            ]
        },

        groub_by: {
            title: "我有团购资源",
            rules: [
                {title: "团购培训联系电话：1361160****"}
                , {title: "团购定制价格直达工厂"}
            ]
        },
    },
    onLoad: function (options) {

    }, setDetail(e) {
        this.setData({
            [e.currentTarget.dataset.prop]: e.detail
        })
    },
});
