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

export function makeRandomString(length) {
  length = length || 32;
  let chars = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890';
  let max = chars.length;
  let string = '';
  for (let i = 0; i < length; i++) {
    string += chars.charAt(Math.floor(Math.random() * max));
  }
  return string;
}
