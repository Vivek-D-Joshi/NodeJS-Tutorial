const { isUtf8 } = require("buffer");
const {readFileSync, writeFileSync} = require("fs");

const first = readFileSync("./files/subfolder/first.txt","utf-8");
const second = readFileSync("./files/subfolder/second.txt","utf-8");

writeFileSync('./files/subfolder/result-sync.txt',`result of write file: ${first}, ${second}`,{flag:'a'});


