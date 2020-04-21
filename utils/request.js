function request(req) {

  // 去除前缀“/api”
  // req.url = req.url.replace('/api','')

  // 另一个服务器
  // const ServerIP = 'http://123.207.179.135:9529'

  // 端口号也要与小程序域名设置一致
  const ServerIP = 'https://shop.cdb99.com/api/v1'

  return new Promise(function (resolve, reject) {
    wx.request({
      url: ServerIP + req.url,
      data: req.data,
      method: req.method,
      timeout: 10000,
      header: {
        'Accept': 'application/json',
        'Authorization': wx.getStorageSync('token').token,
        'Content-Type': 'json'
      },
      success: function (res) {
        console.warn('请求结果', res);
        if (res.statusCode === 200 && res.data.code === 200) {
          resolve(res.data.data);
        } else {
          console.warn("返回码校验失败", res.data)
        }
      },
      fail: function (err) {
        wx.showModal({
          title: '错误',
          content: '网络异常',
          showCancel: false
        });
        console.warn("请求失败", err)
        reject(err);
      }
    })
  });

}

exports.request = request