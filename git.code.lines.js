const {execSync} = require('child_process');

console.log(execSync('git log  --pretty=tformat: --numstat | awk \'{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added: %s | removed: %s | total: %s\\n", add, subs, loc }\'').toString())
