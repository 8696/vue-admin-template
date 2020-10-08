const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, './dist/production-static/index.html')
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
      style.innerHTML = \`
    #va-loading {
       background-color: red;

    }
    \`;
      document.body.appendChild(style);
      let html = document.createElement('div');
      html.innerHTML = \`
        <div id="va-loading">
            <span>loading</span>
        </div>
    \`;
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
