import http from 'http';

const server = http.createServer((req, res) => {
  res.end('Hello from the server');
}).listen(4001);

console.log('Server is up and running on Port 4001');

export default server;