//importing in Node.js
const http = require("http");

/*const rqListener = (req, res) => {
  console.log(req);
};*/

//http.createServer(rqListener);
// or using the anomymous function

const server = http.createServer(function (req, res) {
  console.log(req);
});
server.listen(5050);



// or using Nextgen function

//http.createServer((req, res) => { console.log(req);});
