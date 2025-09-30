const fs = require("fs");
const path = require("path");

// fs.writeFile("node/write.txt","I am checking it",(err)=>{
//     if (err) throw err;
//     console.log("file created");
// })
// fs.readFile("node/write.txt","utf8",(err,data)=>{
// if(err) throw err;
// console.log(data)
// })
// fs.appendFile("node/write.txt","message updated",(err)=>{
//     if(err) throw err;
//     console.log("updated");
// })
fs.rename("node/write.txt","node/rename.txt",(err) =>{
    if (err) throw err;
    console.log("renamed file");
})
