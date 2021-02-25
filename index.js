const http = require("http");

const server = http.createServer((request, response) => {
    response.end("Path; " + request.url);
});

server.listen(8080, () => {
    console.log(`Server istening in port ${server.address().port}`);   
});