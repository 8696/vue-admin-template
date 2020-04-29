export function sleep(time = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export function makeRandomNumber(minNum = 0, maxNum = 1000) {
  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
}

export function makeRandomString(length = 32) {

  let chars = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890';
  let max = chars.length;
  let string = '';
  for (let i = 0; i < length; i++) {
    string += chars.charAt(Math.floor(Math.random() * max));
  }
  return string;
}

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


export function deepCopy(data) {

  if (!['[object Array]', '[object Object]']
    .includes(({}).toString.call(data))) {
    return data;
  }

  return JSON.parse(JSON.stringify(data));
}

export function parseJsonTree(data, parentID = 0) {
  let tree = [];
  let temp;
  for (let i = 0; i < data.length; i++) {
    if (data[i].parentID === parentID) {
      let obj = data[i];
      temp = parseJsonTree(data, data[i].id);
      if (temp.length > 0) {
        obj.children = temp;
      }
      tree.push(obj);
    }
  }
  return tree;
}

export function getParentJson(list, id, parents = []) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      parents.push(list[i]);
      getParentJson(list, list[i].parentID, parents);
    }
  }
  return parents;
}
