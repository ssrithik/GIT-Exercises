console.log("hi")

const os = require("os");
const path = require("path");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(os.hostname());

console.log(__dirname)
console.log(__filename)
console.log(path);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log('Join party',path.join(__dirname,"test","server.js"));
