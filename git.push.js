console.log(process.argv);
const {execSync} = require('child_process');



execSync('git commit -a -m "' + new Date() + '"');

// execSync('git push origin dev');
