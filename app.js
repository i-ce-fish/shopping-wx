//app.js

// 路由跳转并传参
wx.$go = function (url, data) {
    // 拼接参数
    let str = ""
    for (let i in data) {
      str += `${i}=${data[i]}&`
    }
    str = str.slice(0, str.length - 1)

    wx.navigateTo({
      url: url + "?" + str
    })
  },
  wx.$toast = function (text, duration, success) {
    wx.showToast({
      title: text ? text : '未完善的功能',
      icon: success ? 'success' : 'none',
      duration: duration || 2000
    })
  },

  // px转rpx
  wx.$rpx = function (px) {
    const width = wx.getSystemInfoSync().windowWidth
    return width * (750 / width)
  },

  // rpx  转px
  wx.$px = function (rpx) {
    const width = wx.getSystemInfoSync().windowWidth
    return rpx / 750 * width
  }
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onError(err) {
    //全局错误监听
    console.log("发生错误：" + err)
    const res = wx.getSystemInfoSync()
    let errMsg = "手机品牌：" + res.brand + "；手机型号：" + res.model + "；微信版本号：" + res.version + "；操作系统版本：" + res.system + "；客户端平台：" + res.platform + "；错误描述：" + err;

  },
  globalData: {
    userInfo: null,
    activeTab:0
  }
})