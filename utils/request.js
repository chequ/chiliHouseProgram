import md5 from './md5.js'

// const baseUrl = 'http://10.100.24.59:8082'; // dev
const baseUrl = 'http://10.100.24.148:8080'; // 本地

const headerFunc = function() {
  let ts = +new Date();
  let token = wx.getStorageSync('userInfor').token;
  let userId = wx.getStorageSync('userInfor').userId;
  let acvalidate = '';
  let sign = md5(ts.toString() + '9' + "fdsfds&()*&&|+_^ff%$##@DFJYRR22ff").toUpperCase();
  if (token && userId) {
    acvalidate = md5(userId + token + ts + "fdsfds&()*&&|+_^ff%$##@DFJYRR22ff").toUpperCase();
  }
  return {
    'content-type': 'application/x-www-form-urlencoded', 
    'serviceTenantId': 100000,
    'token': token,
    'userId': userId,
    'ts': ts,
    'acvalidate': acvalidate,
    'clientType': '9',
    'sign': sign,
    'regFrom': 'APPLET'
  }
}

const request = ({ url = '', param = {}, ...other } = {}) => {
  let header = headerFunc();
  header['content-type'] = other.contentType || 'application/x-www-form-urlencoded';
  if (other.loading) {
    wx.showLoading({
      title: '请求中...'
    });
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: getUrl(url),
      data: param,
      header,
      ...other,
      success: (res) => {
        if (other.loading) {
          wx.hideLoading();
        }
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
        } else {
          wx.showToast({
            title: res.message,
            icon: 'none'
          })
          reject(res)
        }
      },
      fail(err){
        if (other.loading) {
          wx.hideLoading();
        }
        wx.showToast({
          title: '无网络连接',
          icon: 'none',
          duration: 2000
        })
      },
      complete() {}
    })
  })
}

const getUrl = (url) => {
  if (url.indexOf('://') == -1) {
    url = baseUrl + url;
  }
  return url
}

// get方法
const _get = (url, param = {}, loading = true) => {
  return request({
    url,
    param,
    loading
  })
}

const _post = (url, param = {}, other) => {
  let obj = { loading: true };
  const type = Object.prototype.toString.call(other);
  if (type === '[object Boolean]') {
    obj.loading = other;
  } else if (type === '[object Object]') {
    Object.assign(obj,other);
  }
  return request({
    url,
    param,
    method: 'post',
    ...obj
  })
}

const _put = (url, param = {}) => {
  return request({
    url,
    param,
    method: 'put'
  })
}

const _delete = (url, param = {}) => {
  return request({
    url,
    param,
    method: 'delete'
  })
}
module.exports = {
  baseUrl,
  headerFunc,
  _get,
  _post,
  _put,
  _delete
}
