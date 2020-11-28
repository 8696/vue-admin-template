const Koa = require('koa');
const app = new Koa();
const path = require('path');
const address = require('address');
const port = 8912;

require('koa2-static2').install(app,
  path.resolve(__dirname, './dist/production-static'),
  {maxAge: 3 * 1000});

app.listen(port);

console.log(`http://${address.ip()}:${port}`);
