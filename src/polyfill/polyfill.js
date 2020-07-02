
Array.prototype.flat = function(count) {
  let c = count || 1;
  let len = this.length;
  let exe = [];
  if (this.length === 0) return this;
  while (c--) {
    let _arr = [];
    let flag = false;
    if (exe.length === 0) {
      flag = true;
      for (let i = 0; i < len; i++) {
        if (this[i] instanceof Array) {
          exe.push(...this[i]);
        } else {
          exe.push(this[i]);
        }
      }
    } else {
      for (let i = 0; i < exe.length; i++) {
        if (exe[i] instanceof Array) {
          flag = true;
          _arr.push(...exe[i]);
        } else {
          _arr.push(exe[i]);
        }
      }
      exe = _arr;
    }
    if (!flag && c === Infinity) {
      break;
    }
  }
  return exe;
};
