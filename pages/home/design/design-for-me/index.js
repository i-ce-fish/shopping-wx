Page({
    data: {
        questions: [

            {
                item: ["中性", '帅哥', '美女'],
                title: "希望着装性别"
            },
            {
                item: [
                    "幼童",
                    "小童",
                    "大童",
                    "小学生",
                    "初高中",
                    "少女",
                    "少淑",
                    "中青年",
                    "中年",
                    "中老年",
                    "老年",
                    "自定义"

                ],
                title: "穿着者的实际年龄段位"
            },
            {
                item: [
                    "幼童",
                    "小童",
                    "大童",
                    "小学生",
                    "初高中",
                    "少女",
                    "少淑",
                    "中青年",
                    "中年",
                    "中老年",
                    "老年",
                    "自定义"

                ],
                title: "穿着者的希望穿着成的年龄段位"
            }, {
                item: [
                    "较胖",
                    "偏胖",
                    "标准身型",
                    "偏瘦",
                    "较瘦"
                ],
                title: "穿着者的体型廓形"
            },
            {
                item: [
                    "肚子大",
                    "皮肤黑",
                    "腿粗",
                    "平胸",
                    "脖子短",
                    "自定义"
                ],
                title: "穿着者的特殊体型特征"
            },
            {
                item: [
                    "芸芸众生",
                    "有点个性",
                    "非常个性"
                ],
                title: "对着装个性程度要求"
            },
            {
                item: [
                    "港台",
                    "中心城市",
                    "上海中学生",
                    "巴黎街头",
                    "娱乐圈",
                    "剑桥哈佛",
                    "娱乐圈",
                    "日韩"
                ],
                title: "穿着时尚目标流行地区"
            },
            {
                item: [
                    "正式商务",
                    "通勤上班",
                    "居家舒适",
                    "户外休闲",
                    "活力运动",
                    "性感夜店",
                    "礼服场合",
                    "旅游度假",
                    "其他场合"
                ],
                title: "穿着场合"
            },
            {
                item: [
                    "全年",
                    "春季",
                    "夏季",
                    "秋季",
                    "冬季",
                    "春秋季",
                    "初冬季",
                    "寒冬",
                    "自定义"
                ],
                title: "穿着季节"
            },
            {
                item: [
                    "简约",
                    "森女",
                    "商务",
                    "少淑",
                    "呆萌",
                    "民族",
                    "学院",
                    "瑞丽",
                    "洛丽塔",
                    "军旅",
                    "轻奢",
                    "自定义"
                ],
                title: "期望穿着风格"
            },
            {
                item: [
                    "阳光帅气",
                    "妩媚动人",
                    "沉稳老练",
                    "性感风骚",
                    "冷酷肃杀",
                    "浪漫多情",
                    "小清新",
                    "富贵大气",
                    "睿智聪慧",
                    "憨厚老实",
                    "年轻活力",
                    "健美有型",
                    "循规蹈矩",
                    "善良和蔼",
                    "清净无欲",
                    "干练敏捷",
                    "超凡脱俗",
                    "自定义"
                ],
                title: "穿着气质"
            },
            {
                title: "面料要求",
                item: [
                    "棉",
                    "麻",
                    "羊毛",
                    "化纤"
                ]
            },
            {
                title: "价格区间要求",
                item: [
                    "100以下",
                    "100-200",
                    "200-500",
                    "500以上"


                ]
            }

        ]
    },
    onLoad: function (options) {

    },
    go: function (e) {
        wx.$go(e.currentTarget.dataset.url)
    }
});