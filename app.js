const http = require('http')



const server = http.createServer((req, res) => {
  const url = req.url;
  if(url == '/'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<html><head><title>Ass</title></head><body><h1>Welcome</h1></body></html>')
    return res.end()
  } else if (url == '/users'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<html><head><title>Ass</title></head><body><h1>User1</h1></body></html>')
    return res.end()
  }
})

server.listen(3000)