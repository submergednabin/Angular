exports.httpServe = function () {
  var http = require("http");
  var server = http.createServer(function (request, response) {
    response.write("Hello, welcome to the node http servier demo");
    response.end();
  });
  server.listen(3100);
  console.log("server started...");
};
