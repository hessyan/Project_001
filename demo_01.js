var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(util.format('Request url is %s. Message is: %s. Date is: %s',req.url,"Hello World !", myDateTime()));        
    res.end();  
  
}).listen(8080);

myDateTime = function () {
    return Date();
};