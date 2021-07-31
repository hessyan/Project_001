
var http = require('http');
var url = require('url');
var util = require('util');
var async = require('async');

const { runInNewContext } = require('vm');
const listeningPort = 8080;
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(util.format('Request url is %s. Message is: %s. Date is: %s',req.url,"Hello World !", myDateTime()));        
    res.end();
    server.close();  
  
}).listen(listeningPort);

http.get(
    {
        hostname : "localhost",
        port: listeningPort,
        path: "/",
        agent: false 

    }, (res)=>{
        console.log(util.format("TEST - Server GET Response Code is %s",res.statusCode));
    }
);

myDateTime = function () {
    return Date();
};


