const glob = require('glob');
const path = require('path');
const fs = require('fs');
const rootPath = path.resolve(__dirname);

glob(path.resolve(__dirname, './**/**.**'), (_, files) => {
  if (_) return;
  let count = 0;
  files.filter(item => {
    return (
        !new RegExp(path.resolve(rootPath, './node_modules')).test(item)
        &&
        !new RegExp(path.resolve(rootPath, './dist')).test(item)
      )
      &&
      (
        /\.vue$/.test(item)
        ||
        /\.js$/.test(item)
        ||
        /\.scss$/.test(item)
        ||
        /\.css$/.test(item)
        ||
        /\.html$/.test(item)
        ||
        /\.md$/.test(item)
      );
  }).forEach(item => {
    count += fs.readFileSync(item).toString().split('\n').length;
  });
  console.log('count: ' + count);
});

