/**
 * @description 格式化时间
 * @param options {Object}
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


export function deepCopy(data) {
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
