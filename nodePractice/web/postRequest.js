exports.postModule = function () {
  var http = require("http");
  var url = require("url");
  var queryString = require("querystring");
  var qs, name, email;

  http
    .createServer(function (req, response) {
      var data1 = "";
      req.on("data", function (chunk) {
        data1 += chunk;
      });
      req.on("end", function () {
        qs = queryString.parse(data1);
        name = qs["username"];
        email = qs["email"];
        response.write(
          "Hello " +
            name +
            ", your email id " +
            email +
            " has been successfully submitted"
        );
        response.end();
      });
    })
    .listen(7777);
  console.log("Serve post started");
};
