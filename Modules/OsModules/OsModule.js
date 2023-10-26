const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user.username);

//System uptime in sec
console.log(`The System is up from ${os.uptime()/(60)} minutes`);

const currentOS = {
   name: os.type(),
   release: os.release(),
   totalMem: os.totalmem(),
   freeMem: os.freemem(),
}

const memInGb = (totalMemory, freeMemory) => {
   mem = totalMemory/(1024*1024*1024)
   const result = {
      Total: mem,
      free: (freeMemory/totalMemory)*100
   };
   return `Total memory = ${Math.round(result.Total)} GB\nFree Memory = ${Math.round(result.free)}%`;
}

console.log(memInGb(currentOS.totalMem,currentOS.freeMem));