export function sleep(time = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export function makeRandomNumber(min = 0, max = 1000) {
  return Math.floor(Math.random() * max + min);
}
