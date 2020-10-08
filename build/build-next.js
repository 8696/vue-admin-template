const fsExtra = require('fs-extra');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

//
let buildRootStaticPath = require('../config/build.config').buildRootStaticPath;
buildRootStaticPath = (function () {
  if (buildRootStaticPath === '/') return '';
  return buildRootStaticPath.replace(/^\/|\/$/g, '') + '/';
}());

let buildStartTime = new Date().getTime();
let assetsPublicPath = buildRootStaticPath + getDateTime('ymdhis', buildStartTime);
let buildTime = getDateTime('y-m-d h:i:s', buildStartTime);
let v = getDateTime('ymdhis', buildStartTime);
const chalk = require('chalk');
const os = require('os');
let consumingTime;
try {
  consumingTime = Number(fs.readFileSync(path.resolve(os.homedir(), './.vue-8696-build.time')).toString());
} catch (e) {
  consumingTime = 100000;
}
// consumingTime = null;
exports.assetsPublicPath = `/${assetsPublicPath}/`;

let pp = 0;
let timer = setInterval(function () {
  //
  if (consumingTime) {

    let p = (1 - (buildStartTime + consumingTime - new Date()) / consumingTime);
    p >= 1 && (p = 0.99);
    p = String(parseInt(p * 100));
    if (pp !== p) {
      console.log(chalk.green(
        `building----------------------------------------------${v}---` + p + '%'));
    }
    pp = p;
    return;
  }
  console.log(chalk.green(`building----------------------------------------------${v}`));
  clearInterval(timer);
}, 100);

exports.buildNext = function () {
  clearInterval(timer);

  console.log('\r\n');

  console.log(chalk.yellow('build next...'));
  console.log('-------------------------------------');
  console.log('-------------------------------------');
  console.log('-------------------------------------');

  ;(async function () {
    try {
      let distPath = path.resolve(__dirname, '../dist');

      let buildHistoryPath = path.resolve(distPath, 'history-static/' + assetsPublicPath.replace(buildRootStaticPath, ''));

      let productionServerPath = path.resolve(__dirname, '../dist/production-static');
      let productionServerStaticPath = path.resolve(productionServerPath, assetsPublicPath + '/static');
      let indexHtmlPath = path.resolve(distPath, 'index.html');

      // 创建新文件夹
      await fsExtra.remove(productionServerPath);
      await fsExtra.ensureDir(productionServerPath);
      await fsExtra.ensureDir(productionServerStaticPath);
      await fsExtra.ensureDir(buildHistoryPath);

      // 将新文件夹的地址追加到入口文件
      let htmlContent = fs.readFileSync(indexHtmlPath).toString();
      htmlContent = htmlContent.replace(/<assetsPublicPath>/g, assetsPublicPath);

      htmlContent = htmlContent.replace(/<\/head>/,
        `<script type="text/javascript">window.__v = '${v}';window.__static = '/${assetsPublicPath}';</script></head>`);

      Array.from(new Array(100)).map(function () {
        htmlContent = '\r\n' + htmlContent;
      });

      // 复制打包的文件
      await fsExtra.copy(path.resolve(distPath, 'static'), productionServerStaticPath);

      // 复制入口文件
      const newIndexHtmlFilePath = path.resolve(productionServerPath, 'index.html')
      await fsExtra.copy(path.resolve(distPath, 'index.html'), newIndexHtmlFilePath);
      fs.writeFileSync(path.resolve(productionServerPath, 'index.html'), htmlContent);

      // 复制到打包历史
      await fsExtra.copy(productionServerPath, buildHistoryPath);
      // 删除cli打包的文件
      await fsExtra.remove(path.resolve(distPath, 'index.html'));
      await fsExtra.remove(path.resolve(distPath, 'static'));
      makeAsyncLoading(newIndexHtmlFilePath)
      try {
        fs.writeFileSync(path.resolve(os.homedir(), './.vue-8696-build.time'), String(new Date().getTime() - buildStartTime));
      }catch (e) {
      }

      console.log(chalk.cyan('build complete: '));
      console.log(chalk.cyan(`    v:            ${v}`));
      console.log(chalk.cyan(`    time:         ${new Date().getTime() - buildStartTime}`));
      console.log(chalk.cyan(`    build time:   ${buildTime}`));
      console.log(chalk.cyan(`    static path:  ${productionServerPath}`));
      console.log(chalk.cyan(`    preview:      node server.js`));

    } catch (e) {

      console.log(chalk.red('-------------------------------------'));
      console.log(chalk.red('-------------------------------------'));
      console.log(chalk.red('-------------------------------------'));
      console.log(chalk.red('-------------------------------------'));
      console.log(chalk.red('-------------------------------------'));
      console.log(chalk.red('-------------------------------------'));

      console.log(chalk.red('build error: ' + e));
    }

  }());
};

function getDateTime(dateTime = 'y-m-d h:i:s', time = 0) {
  let date = time === 0 ? new Date() : new Date(time),
    y = date.getFullYear(),
    m = date.getMonth() + 1,
    d = date.getDate(),
    h = date.getHours(),
    i = date.getMinutes(),
    s = date.getSeconds();
  return dateTime
    .replace(/y/g, y)
    .replace(/m/g, m < 10 ? '0' + m : m)
    .replace(/d/g, d < 10 ? '0' + d : d)
    .replace(/h/g, h < 10 ? '0' + h : h)
    .replace(/i/g, i < 10 ? '0' + i : i)
    .replace(/s/g, s < 10 ? '0' + s : s);
}

function makeAsyncLoading(indexFilePath) {
  const filePath = indexFilePath
  const content = fs.readFileSync(filePath).toString();
  const v = /window.__v = '([0-9]+)'/.exec(content)[1];
  const $ = cheerio.load(content);
  const script = $('script');
  const scriptLink = [];
  for (let i = 0; i < script.length; i++) {
    const attribs = script[i].attribs;
    if (attribs.src && new RegExp(v).test(attribs.src)) {
      scriptLink.push(attribs.src);
      script.eq(i).remove();
    }
  }
  let appendHtml = `
<script>
  (function () {
    function xhrRequest(link) {
      return new Promise(resolve => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', link, true);
        xhr.send();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            resolve(xhr.responseText);
          }
        };
      });
    }

    function makeLoading() {
      let style = document.createElement('style');
      style.innerHTML = \`@keyframes va-rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(1turn);
            }
        }

        #va-loading {
            position: fixed;
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
            z-index: 2020;
        }

        #va-loading span {
            color: #666;
            font-size: 20px;
            line-height: 0;
            position: relative;
            top: -14vh;
        }

        #va-loading span:first-child {
            display: inline-block;
            margin-right: 16px;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            border: 2px solid;
            border-color: #666 #666 transparent;
            animation: va-rotate 1s linear infinite;
        }\`;
      document.body.appendChild(style);
      let html = document.createElement('div');
      html.innerHTML = \`<div id="va-loading">
    <span></span><span>loading...</span>
</div>\`;
      document.body.appendChild(html);
    }

    function requestJs(links) {
      let request = [];
      links.forEach(function (link) {
        request.push(xhrRequest(link));
      });
      Promise.all(request)
        .then(function (res) {
          res.forEach(function (item) {
            document.getElementById('va-loading').parentNode.style.display = 'none';
            let script = document.createElement('script');
            script.innerHTML = item;
            document.body.appendChild(script);
          });
        });
    }
    window.closeVaLoading = function () {
      document.getElementById('va-loading').parentNode.style.display = 'none';
    };
    document.onreadystatechange = function () {
      if (document.readyState === 'interactive') {
        makeLoading();
        requestJs(REQUEST_JS_LIST)
      }
    };
  }());
</script>
`;
  console.log($.html());
  appendHtml = appendHtml.replace('REQUEST_JS_LIST', JSON.stringify(scriptLink))
  console.log();
  fs.writeFileSync(filePath, $.html() + appendHtml)
}
