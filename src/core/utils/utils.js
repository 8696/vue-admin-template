
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
