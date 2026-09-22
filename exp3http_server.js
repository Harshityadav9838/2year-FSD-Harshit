const http = require('http');
const PORT = 3005;
const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Custom-Header', 'MyCustomHeaderValue');
    
    res.end('Hello, World! This is a simple HTTP server in Node.js.');
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});