export default [
    //尽量添加注释

    /**
     * visitor: 未登录
     * member: 已登录
     */

    //首页
    {
        url: 'pages/home/index/index',
        name: 'home',
        role: ['visitor', 'memeber']
    },
    //对老板娘说
    {
        url: 'pages/home/customer-said/index',
        name: 'home/customer-said',
        role: ['visitor', 'memeber']
    },
    //听老板娘说
    {
        url: 'pages/home/boss-said/index',
        name: 'home/boss-said',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/article/detail/index',
        name: 'article/detail',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/article/list/index',
        name: 'article/list',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/design/role-list/index',
        name: 'design/role-list',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/design/role-form/index',
        name: 'design/role-form',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/design/post-success/index',
        name: 'design/post-success',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/design/design-for-me/index',
        name: 'design/design-for-me',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/wear/index/index',
        name: 'wear/index',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/wear/detail/index',
        name: 'wear/detail',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/product/bargain/index',
        name: 'product/bargain',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/product/can-wear/index',
        name: 'product/can-wear',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/product/new-product/index',
        name: 'product/new-product',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/product/product-detail/index',
        name: 'product/product-detail',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/product/type-a/index',
        name: 'product/category-a',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/product/type-b/index',
        name: 'product/category-b',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/product/sizes/index',
        name: 'product/sizes',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/product/colors/index',
        name: 'product/colors',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/shopping/search/index',
        name: 'shopping/search',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/shopping/order/item/index',
        name: 'shopping/order/item',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/shopping/order/success/index',
        name: 'shopping/order/success',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/shopping/cart/index',
        name: 'shopping/cart',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/shopping/order/list/index',
        name: 'shopping/order/list',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/shopping/order/order-detail/index',
        name: 'shopping/order/order-detail',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/shopping/order/paid-order/index',
        name: 'shopping/order/paid-order',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/shopping/order/submit-order/index',
        name: 'shopping/order/submit-order',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/user/login/phone/index',
        name: 'user/login/phone',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/user/login/index/index',
        name: 'user/login/index',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/my/index/index',
        name: 'my/index',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/my/qrcode/index',
        name: 'my/qrcode',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/my/copon/index',
        name: 'my/copon',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/my/money/index',
        name: 'my/money',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/my/friend/index',
        name: 'my/friend',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/my/info/index',
        name: 'my/info',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/my/integral/index',
        name: 'my/integral',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/my/wear-data/list/index',
        name: 'my/wear-data/list',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/my/wear-data/add/index',
        name: 'my/wear-data/add',
        role: ['visitor', 'memeber']
    },
    //zhushi
    {
        url: '/pages/rule/integral/index',
        name: 'rule/integral',
        role: ['visitor', 'memeber']
    },

    //zhushi
    {
        url: '/pages/test/index',
        name: 'test',
        role: ['visitor', 'memeber']
    },

    //登录页
    // {
    //     url: "pages/user/login/index/index",
    //     name: 'login',
    //     role: ['visitor', 'memeber']
    // },
    // 手机登录页
    // {
    //     url: "pages/user/login/phone/index",
    //     name: 'login/phone',
    //     role: ['visitor', 'memeber']
    // }
]
