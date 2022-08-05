exports.getRequest = function () {
  var http = require("http");
  var url = require("url");
  var queryString = require("querystring");

  function onRequest(request, response) {
    var query = url.parse(request.url).query;
    var name = queryString.parse(query)["username"];
    var email = queryString.parse(query)["email"];
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(
      "Hello " +
        name +
        " your email id " +
        email +
        " has been registered successfully"
    );
    response.end();
  }
  http.createServer(onRequest).listen(7777);
  console.log("server has begun");
};
