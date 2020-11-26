//importing in Node.js
const http = require("http");

/*const rqListener = (req, res) => {
  console.log(req);
};*/

//http.createServer(rqListener);
// or using the anomymous function

const server = http.createServer(function (req, res) {
  const url = req.url;
  if (url === '/'){
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write('<body><form action="/message" method="POST"><input type="text" name ="message"><button type="submit">Send</button></form></body>');
    res.write("</html>");
    return res.end();
  };
    //process.exit(); // or use CTRL + C
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.Js Server!</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(5050);

// or using Nextgen function

//http.createServer((req, res) => { console.log(req);});
