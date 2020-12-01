//importing in Node.js

const http = require("http");

const routes = require("./routes.js");

// const fs = require("fs");
//const { chdir } = require("process");
/*const rqListener = (req, res) => {
  console.log(req);
};*/

//http.createServer(rqListener);
// or using the anomymous function

const server = http.createServer(routes)
  // const url = req.url;
  // const method = req.method;
  
server.listen(5000);

// or using Nextgen function

//http.createServer((req, res) => { console.log(req);});
