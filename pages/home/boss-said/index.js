Page({
    data: {
        //挑衣服
        chooseClothes: {
            head: {
                title: 'T恤，什么价位才是“一般”',
                img: 'https://www.uniqlo.cn/hmall/test/u0000000016088/main/first/561/1.jpg',
                introduction: "一个纯棉短袖T恤，一般最少20起，加上印花或者其他工艺，贵的会在60左右，如果是名牌的话还会有品牌溢价，可能就涨到100以上啦。那种9.9包邮的，工艺跟材料很伤心。"
            },
            list: [{
                title: 'T恤，什么价位才是“一般”',
                img: 'https://www.uniqlo.cn/hmall/test/u0000000017222/main/first/1000/1.jpg'
            }, {
                title: 'T恤，什么价位才是“一般”',
                img: 'https://www.uniqlo.cn/hmall/test/u0000000017222/main/first/1000/1.jpg'
            }, {
                title: 'T恤，什么价位才是“一般”',
                img: 'https://www.uniqlo.cn/hmall/test/u0000000017222/main/first/1000/1.jpg'
            }]

        },
        fashions: {
            head: {
                title: '夏天，胖不是你的错，胖还穿的怎么丑就是你不对了! ',
                img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=376060755,1821328537&fm=26&gp=0.jpg',
                introduction: "对胖胖的女生来bai说，夏天显得并不是du那么的友好~，胖胖的女生又想要遮肉，但肉肉总是不听话非要与大家“见面”，所以内心更是一种挣扎啊~"
            },
            list: [{
                title: 'T恤，什么价位才是“一般”',
                img: 'https://www.uniqlo.cn/hmall/test/u0000000017222/main/first/1000/1.jpg'
            }, {
                title: 'T恤，什么价位才是“一般”',
                img: 'https://www.uniqlo.cn/hmall/test/u0000000017222/main/first/1000/1.jpg'
            }, {
                title: 'T恤，什么价位才是“一般”',
                img: 'https://www.uniqlo.cn/hmall/test/u0000000017222/main/first/1000/1.jpg'
            }]

        },
    },
    onLoad: function (options) {

    },
    go: function (e) {
        wx.$go(e.currentTarget.dataset.url)
    },
});
