
const {execSync} = require('child_process');

execSync('git add .');

execSync('git commit -m "' + new Date().toString() + '"');

execSync('git push origin dev');


