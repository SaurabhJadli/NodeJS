const { log } = require('console');
const os = require('os');

const userInfo = os.userInfo();
console.log(userInfo);


console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);

