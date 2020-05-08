
const {execSync} = require('child_process');

execSync('git add .');

execSync('git commit -m "' + new Date() + '"');

execSync('git push origin dev');


