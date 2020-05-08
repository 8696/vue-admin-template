/**
 * @description 模拟睡眠
 * @param time {Number} 睡眠时间(ms) | default : 1000
 * @return {Promise}
 * */
export function sleep(time = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
/**
 * @description 生成随机数
 * @param minNum {Number} 最小范围 | default : 1
 * @param maxNum {Number} 最大范围 | default : 99999
 * */
export function makeRandomNumber(minNum = 1, maxNum = 99999) {
  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
}
/**
 * @description 生成随机字符串
 * @param length {Number} 字符串长度 | default : 32
 * @return {String}
 * */
export function makeRandomString(length = 32) {

  let chars = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890';
  let max = chars.length;
  let string = '';
  for (let i = 0; i < length; i++) {
    string += chars.charAt(Math.floor(Math.random() * max));
  }
  return string;
}
/**
 * @description 获取可视化时间
 * @param options {Object}
 * @return {String}
 * */
export function parseDateTime(options = {format: null, timestamp: null}) {
  !options.format && (options.format = 'y-m-d h:i:s');
  !options.timestamp && (options.timestamp = null);
  const date = options.timestamp === null ? new Date() : new Date(Number(options.timestamp)),
    y = date.getFullYear(), m = date.getMonth() + 1,
    d = date.getDate(), h = date.getHours(),
    i = date.getMinutes(), s = date.getSeconds();
  return options.format
    .replace(/y/g, y).replace(/m/g, m < 10 ? '0' + m : m)
    .replace(/d/g, d < 10 ? '0' + d : d).replace(/h/g, h < 10 ? '0' + h : h)
    .replace(/i/g, i < 10 ? '0' + i : i).replace(/s/g, s < 10 ? '0' + s : s);
}

/**
 * @description 简单深拷贝 | 只支持数据类型为对象和数组，key 为字符串且 value 为 JSON 支持的数据类型(Object/Array/String/Number/Boolean/Null)
 * @param data {*}
 * @return {*}
 * */
export function deepCopy(data) {

  if (!['[object Array]', '[object Object]']
    .includes(({}).toString.call(data))) {
    return data;
  }

  return JSON.parse(JSON.stringify(data));
}
/**
 * @description 将集合通过子父 ID 关联成树
 * @param list {Array}
 * @param parentID {Number} |  default : 0
 * @return {Array}
 * */
export function parseJsonTree(list, parentID = 0) {
  let tree = [];
  let temp;
  for (let i = 0; i < list.length; i++) {
    if (list[i].parentID === parentID) {
      let obj = list[i];
      temp = parseJsonTree(list, list[i].id);
      if (temp.length > 0) {
        obj.children = temp;
      }
      tree.push(obj);
    }
  }
  return tree;
}
/**
 * @description 获取一项指定 ID 的向上所有集合
 * @param list {Array}
 * @param id {Number}
 * @param parents {Array}
 * @return {Array}
 * */
export function getParentJson(list, id, parents = []) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      parents.push(list[i]);
      getParentJson(list, list[i].parentID, parents);
    }
  }
  return parents;
}
