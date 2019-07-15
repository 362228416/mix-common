import {Dimensions} from 'react-native';
function coverPrice(s) {
    return +s > 99 ?
        String(s).replace(/(\d+)(\d{2})$/, '$1.$2') :
        +s > 9 ?
            '0.' + s :
            '0.0' + s;
}

function _format(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function formatTime(date, fmt) {
    if (Object.prototype.toString.call(date) !== "[object Date]") {
        date = new Date(date)
    }
    return _format(date, fmt);
}
function convertDate(date) {
    if (Object.prototype.toString.call(date) === '[object String]') {
        return new Date(date.replace(/-/g, '/'))
    }
    if (Object.prototype.toString.call(date) === '[object Number]') {
        return new Date(date)
    }
    return date
}

function formatAddr5(address) {
    return address.replace(/(.{5}).+(.{5})/g, '$1****$2')
}

function getTime(){
    return new Date().getTime()
}

function leftTime(currentTime,time){
    // console.log(currentTime,time)
    return time-currentTime
}

function formatNum(v, n=2, isBeautify = false){
    if (isNaN(v)) {
        return v;
    }

    // if ((v + '').indexOf('.') == (v + '').length - 1) {
    //     return v;
    // }

    // if ((v + '').indexOf('.'))
    // if (typeof v !== 'number') {
    //    v =  v * 1
    // }

    // if (isBeautify && !/\./.test(String(v))) {
    //     return v
    // }

    // if (isBeautify && (v+'').split('.').length === 1) {
    //     return v
    // }
    // let res = v.toFixed(n) + ''
    // console.log(n)
    if(n === 0){
        return parseInt(v*1) + ''
    }
    // if( (v*1).toFixed(2) == 0 ){  //例如0.001001 保留两位小数是0.00  直接显示0
    //     return 0
    // }
    let array = (v+'').split('.')
    //  如果有小数点
    if(isBeautify && array.length > 1){
        //  如果有小数点位数大于两位就保留两位小数
        if(array[1].length > 2){
            v = (v *1).toFixed(n) + ''
        }
    }
    return v
}

function safePhone(str){
    let res = str.substring(0,8) + '***'
    return res
}

function safeEmail(str){
    var array = str.split('@')
    // console.log(array)
    if(array[0].length < 4){
        return array[0].charAt(0) + '****' + array[1]
    }else{
        return array[0].substr(0,2) + '****'+ array[0].substr(-2,2) + '@' + array[1]
    }
}

function safeLoginName(str){
    if(str.indexOf('@') > 0){ //邮箱
        return safeEmail(str)
    }else{  //   手机
        return safePhone(str)
    }
}

const deviceWidthDp = Dimensions.get('window').width;
// UI 默认给图是 750
const uiWidthPx = 375;

function pxToDp(uiElementPx) {
    return uiElementPx *  deviceWidthDp / uiWidthPx;
}
function DimensionsWidth(){
    return Dimensions.get('window').width
}
function DimensionsHeight(){
    return Dimensions.get('window').height
}

let screenW = Dimensions.get('window').width;
let screenH = Dimensions.get('window').height;
const X_WIDTH = 375;
const X_HEIGHT = 812;
function isIphoneX() {
    return (
        Platform.OS === 'ios' &&
        ((screenH === X_HEIGHT && screenW === X_WIDTH) ||
            (screenH === X_WIDTH && screenW === X_HEIGHT))
    )
}

module.exports = {
    coverPrice,
    formatTime,
    convertDate,
    formatAddr5,
    getTime,
    leftTime,
    formatNum,
    safePhone,
    safeEmail,
    safeLoginName,
    pxToDp,
    DimensionsWidth,
    DimensionsHeight,
    isIphoneX,
}
