// /**
//  * 封封微信的的request
//  */
// export function request(url, method = "GET", data) {
//   console.log('url', url, 'method', method, 'data', data);
//   console.log('token', wx.getStorageSync('token'));
//   return new Promise(function (resolve, reject) {
//     wx.request({
//       url: url,
//       data: data,
//       method: method,
//       header: {
//         'Content-Type': 'application/json',
//         'X-Token': wx.getStorageSync('token').token
//       },
//       success: function (res) {
//         console.log('请求结果', res);
//         resolve(res.data)
//       },
//       fail: function (err) {
//         wx.showModal({
//           title: '错误',
//           content: '网络异常',
//           showCancel: false
//         });
//         reject(err);
//       }
//     })
//   });
// }
// 参数： url:请求地址  param：请求参数  way：请求方式 callBack：回调函数

function request(req) {

  // 去除前缀“/api”
  // req.url = req.url.replace('/api','')

  // const ServerIP = 'http://cdb99/com'
  // const ServerIP = 'http://123.207.179.135:9529'
  const ServerIP = 'http://www.cdb99.com:3000'

  return new Promise(function (resolve, reject) {
    wx.request({
      url: ServerIP + req.url,
      data: req.data,
      method: req.method,
      timeout: 5000,
      header: {
        'Accept': 'application/json',
        'Authorization': wx.getStorageSync('token').token
        // 'Authorization': 'Test'
      },
      success: function (res) {
        console.warn('请求结果', res);
        //todo  返回码校验
        // if (res.statusCode === 200) {
        resolve(res.data);
        // } else {
        //   console.warn("返回码校验失败", res.data)
        // }
      },
      fail: function (err) {
        // wx.showModal({
        //   title: '错误',
        //   content: '网络异常',
        //   showCancel: false
        // });
        console.warn("请求失败", err)
        reject(err);
      }
    })
  });

}

exports.request = request
