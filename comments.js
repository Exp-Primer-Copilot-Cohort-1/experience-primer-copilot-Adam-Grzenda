// create web server
// 1. load modules 
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
// 2. create web server object
var server = http.createServer(function(request,response){
    // 2.1 get url
    var parsedUrl = url.parse(request.url);
    var resource = parsedUrl.pathname;
    // 2.2 get query string as object
    var query = qs.parse(parsedUrl.query);
    // 2.3 get http method
    var method = request.method;
    // 2.4 get post data
    request.on('data',function(data){
        console.log(data);
    });
    // 2.5 response
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('Hello World');
});
// 3. start web server
server.listen(8080,function(){
    console.log('Server is running...');
});
// 4. open browser and input url
// http://localhost:8080
// http://localhost:8080/abc
// http://localhost:8080/abc?name=Mark&age=18
// http://localhost:8080/abc?name=Mark&age=18&city=Taipei
// http://localhost:8080/abc?name=Mark&age=18&city=Taipei&skills=JavaScript