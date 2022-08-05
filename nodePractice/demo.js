const http = require("http");

var server = http.createServer((req, res) => {
  res.write("Hello world!, I have created my http servier");
  res.end();
});
server.listen(3600);
// setInterval(()=>{
//     console.log("Server begun at 3600...Running", Math.random())

// }, 1000)
console.log("Server begun at 3600...Running", Math.random());
