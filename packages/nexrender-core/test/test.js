const fs = require('fs');
const { init, render } = require('../src');
const json = fs.readFileSync(process.cwd() + '/test/myjob.json', 'utf8');
const job = JSON.parse(json);

render(job, init({
    addLicense: false,
    workpath: '/Users/perez/Desktop/AE/AudioTest/working',
    debug: true,
    stopOnError: false
})).then(job => {
    console.log('finished rendering', job)
}).catch(err => {
    console.error(err)
})