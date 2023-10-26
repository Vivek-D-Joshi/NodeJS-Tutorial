const path = require("path");
console.log(path.sep);

const filePath = path.join("Tutorial","Modules","PathModules","pathModule.js");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve("PathModules");
console.log(absolute);