const PI = 3.1415926535897932384626;
const a = 6378245.0
const ee = 0.00669342162296594323;
const x_PI = 3.14159265358979324 * 3000.0 / 180.0;
const BaiduMapWX = require('../libs/bmap-wx.js')
const BMap= new BaiduMapWX.BMapWX({
  ak: 'ADtC8dIROctGiRmGIW44cgCpmrNUUGG6'
})

function covertGCJO2ToBD09(lat, lng){
  let z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_PI);
  let theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_PI);
  let longitude = z * Math.cos(theta) + 0.0065;
  let latitude = z * Math.sin(theta) + 0.006;
  return { latitude, longitude };
}

function covertBD09ToGCJ02(bd_lat, bd_lon) {
  let x = bd_lon - 0.0065;
  let y = bd_lat - 0.006;
  let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_PI);
  let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_PI);
  let longitude = z * Math.cos(theta);
  let latitude = z * Math.sin(theta);
  return { latitude,longitude}
}

function naviByBD09(lat,lon,name,address){
  let { latitude, longitude }=this.covertBD09ToGCJ02(lat,lon);
  wx.openLocation({
    latitude: latitude,
    longitude: longitude,
    name:name,
    address:address,
  })
}

function getDistance(startLatitude, startLongitude, endLatitude, endLongitude) { 
  startLatitude = startLatitude || 0;
  startLongitude = startLongitude || 0;
  endLatitude = endLatitude || 0;
  endLongitude = endLongitude || 0;
  var rad1 = startLatitude * Math.PI / 180.0;
  var rad2 = endLatitude * Math.PI / 180.0;
  var a = rad1 - rad2;
  var b = startLongitude * Math.PI / 180.0 - endLongitude * Math.PI / 180.0;
  var r = 6378137;
  return (r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2)))).toFixed(0)
}

module.exports = {
  covertGCJO2ToBD09,
  covertBD09ToGCJ02,
  naviByBD09,
  getDistance,
  BMap,
}