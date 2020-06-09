const glob = require('glob');
const path = require('path');
const fs = require('fs');

glob(path.resolve(__dirname, './**/**.**'), (_, files) => {
  if (_) return;
  let count = 0;
  files.filter(item => {
    return !/node_modules/.test(item) &&
      (
        /\.vue$/.test(item)
        ||
        /\.js$/.test(item)
        ||
        /\.scss$/.test(item)
      );
  }).forEach(item => {
    count += fs.readFileSync(item).toString().split('\n').length;
  });
  console.log('count: ' + count);
});

