const glob = require("glob")
const path = require("path")
const fs = require("fs")
const OSS = require('ali-oss');
const config = require('./ossConfig/config')

const client = new OSS(config());

client.listV2({
  'max-keys': 1000
})
  .then(async (res) => {

    for (let i = 0; i < res.objects.length; i++) {
      const item = res.objects[i]
      if (!/readme\.img/.test(item.name)) {
        console.log('remove：' + item.name)
        await client.delete(item.name)
      }
    }

    glob(path.resolve(__dirname, '../dist/production-static/**/*'), async  (err, files) => {
      if (err) return;
      for (let i = 0; i < files.length; i++) {
        let file = files[i]
        if (!fs.statSync(file).isDirectory()) {
          console.log('put：' + file)
          file = file.replace(path.resolve(__dirname, '../dist/production-static') + '/', '');
          const isHtml = /\.html$/.test(file)
          console.log(file)
          await client.put(file, files[i], {
            headers: JSON.parse(JSON.stringify({
              'Cache-Control': isHtml ? 'no-store' : 'max-age=' + 3600 * 24,
              'Expires': isHtml ? -1 : undefined,
              'Pragma': isHtml ? 'no-cache': undefined
            }))
          })
        }
      }
    })
  })

