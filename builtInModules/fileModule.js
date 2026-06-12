const fs = require("fs");

fs.writeFile(
  "sample.txt",
  "Hello Node",
  (err)=>{
    if(err)
      console.log(err);
    else
      console.log("File Created");
  }
);