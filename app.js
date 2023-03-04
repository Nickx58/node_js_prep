const http = require("http");

http.createServer((req,res) => {
    res.setHeader('Content-type', 'text/html');
    res.write('<body><h1>Hello World</h1></body>')
    res.end();
}).listen(3000)

