import pages from 'pages'

/**
 *
 * 单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB
 * 数据过大, 考虑主动清缓存
 */

const symbol = {
    reLaunch: Symbol(),
    redirect: Symbol(),
    switchTab: Symbol(),
}

function _getPages_() {
    if (!pages || pages.constructor !== Array) {
        return []
    }

    pages.forEach(item => {
        if (item.url.slice(0, 1) !== '/') {
            item.url = '/' + item.url
        }
    })
    return pages
}


/**
 *
 * 判断当前用户是否包含页面权限
 *
 * @param  ./route/pages
 * @returns {boolean}  true:有权限 , false 没权限, 默认为无权限
 */
function permission(page) {
    //todo
    let role = wx.getStorageSync('role') || 'visitor'

    if (page.role && page.role.indexOf(role) > -1) {
        return true;
    } else {
        wx.$toast('您没有权限')
        return false
    }
}

 class Router {

    /**
     * constructor 🚀
     */
    constructor() {
        this.pages = _getPages_()

        // 当前页面携带的参数 (缓存在storage中)
        this.params = null

        // 所有的keys
        this.storageKeys = []

        this.currentPage = this.pages[0]
        if (!this.pages || !this.currentPage) {
            throw Error(` Error [pages.js not config]`)
            return
        }

        this.callbacks = {}

        this.success = function (onSuccess) {
            this.callbacks.onSuccess = onSuccess
            return this
        }
        this.fail = function (onFail) {
            this.callbacks.onFail = onFail
            return this
        }
        this.complete = function (onComplete) {
            this.callbacks.onComplete = onComplete
            return this
        }
    }

    /******** Public ********/

    /**
     * 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面
     * @param name
     * @param params
     * @returns {*}
     */
    push(name, params = null, type = 'params') {

        //序列化保证传参类型不改变


        // const page = _.cloneDeep(this.getPageFor(name))
        const page = JSON.parse(JSON.stringify(this.getPageFor(name)))

        //未登录
        // if (!wx.getStorageSync('token')) {
        //     wx.redirect({url:'path'})
        // }
        //没有权限
        if (!permission(page)) {
            return
        }

        //找不到页面
        if (!page) {
            throw Error(`!! Not found page ->：[${name}] !!`)
            return
        }

        this.currentPage = page

        if (params) {
            const key = `minirouter-${page.name}-params`
            this.storageKeys.push(key)
            wx.setStorageSync(key, params)
            this.params = this._getParams(key)
        } else {
            this.params = null
        }

        if (type === 'query') {
            this.params = {}
            page.url += "?"

            for (let key in params) {
                page.url += `${key}=${params[key]}&`
                this.params[key] = params[key]
            }
            page.url = page.url.slice(0, -1)
        }

        const [, , obj] = Array.from(arguments)
        const that = this
        let f = wx.navigateTo
        if (obj && Object.is(obj.fn, symbol.reLaunch)) {
            f = wx.reLaunch
        }
        if (obj && Object.is(obj.fn, symbol.redirect)) {
            f = wx.redirectTo
        }
        if (obj && Object.is(obj.fn, symbol.switchTab)) {
            f = wx.switchTab
        }
        f({
            url: page.url,
            ...that._getFunc()
        })
        return this
    }

    /**
     * 关闭所有页面，打开到应用内的某个页面 可传递参数 可跳转到Tabbar页面
     * @param name
     * @param params
     */
    reLaunch(name, params = null, type = 'params') {


        return this.push(name, params, {fn: symbol.reLaunch}, type)
    }

    /**
     * 关闭所有页面，打开到应用内的某个页面 可传递参数 不可重定向到Tabbar页面
     * @param name
     * @param params
     */
    redirect(name, params = null, type = 'params') {

        return this.push(name, params, {fn: symbol.redirect}, type)
    }

    /**
     * 跳转指定的tab页
     * @param name
     * @returns {*}
     */
    switchTab(name) {


        return this.push(name, null, {fn: symbol.switchTab})
    }

    /**
     * 关闭当前页面，返回上一页面或多级页面。 没有参数 代表返回上一页
     * @param delta
     * @param params
     */
    back(delta = 1, params = null) {

        if (params) {
            const key = `minirouter-${this.currentPage.name}-params`
            wx.setStorageSync(key, params)
            this.params = this._getParams(key)
        } else {
            this.params = null
        }
        wx.navigateBack({
            delta,
            ...this._getFunc()
        })

        return this
    }

    /**
     * 关闭所有页面返回到[首页](tab页)
     * @param params
     */
    backHome(params = null) {
        return this.back(999, params)
    }

    /**
     * 获取指定的Page
     * @param name
     */
    getPageFor(name) {
        const [page] = this.pages.filter(item => item.name === name)
        return page
    }


    /******** Private ********/


    /**
     * 获取函数
     * @returns {{fail: fail, success: success, complete: complete}}
     * @private
     */
    _getFunc() {
        let that = this
        return {
            success: function (res) {
                if (that.callbacks.onSuccess) that.callbacks.onSuccess(res)
            },
            fail: function (err) {
                if (that.callbacks.onFail) that.callbacks.onFail(err)
            },
            complete: function () {
                if (that.callbacks.onComplete) that.callbacks.onComplete()
            }
        }
    }

    /**
     * 获取当前跳转的页面的携带的参数
     * @param key
     * @returns {*}
     * @private
     */
    _getParams(key) {
        return wx.getStorageSync(key)
    }
}
export default Router

