const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const chunks = [];

    req.on('data', chunk => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);
      const obj = JSON.parse(chunks)
      const value1 = obj.num1;
      const value2 = obj.num2;

      // Write code here to calculate power of a number
      if (value1 <= 0 || value2 < 0) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("The operation cannot be performed");
      } else {
        const result = Math.pow(value1, value2);
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(result.toString()); // Convert the result to string before sending
      }
    });
  } else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Bad Request");
  }
});

module.exports = server;
      
