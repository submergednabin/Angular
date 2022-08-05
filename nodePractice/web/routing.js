var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req,res){
    if(req.url=='/'){
        res.end('Welcome to Home Page')
    }else if(req.url=='/login'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end("<form action='/user' method='post'>username:<input type='text' name='username' /></form>")
    }
    else if(req.url=='/user'){
        var data1='';
        req.on('data', function(chunk){
            data1 += chunk;
        });
        req.on('end', function(){
            var username= querystring.parse(data1)['username'];
            res.end("Hi " + username+", welcome to this page ")
        });
    }else{
        res.writeHead(404, {"Content-Type":'text/html'});
        res.end("Page not Found")
    }
}).listen(7777);
console.log("server started successfully")