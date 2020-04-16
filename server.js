const Koa = require('koa');
const app = new Koa();
const path = require('path');
const address = require('address');
const port = 8912;

app.use(require('koa-static')(path.resolve(__dirname, './dist/production-server')));

app.listen(port);


console.log(`http://${address.ip()}:${port}`);

