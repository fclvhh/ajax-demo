var http = require('http')
var fs = require('fs')
var url = require('url')
const querystring = require("querystring")
var port = process.argv[2]

if (!port) {
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}
const server = http.createServer((req, res) => {
  const method = req.method
  const path = req.url.split("?")[0]
  const query = req.url.split("?")[1]
  if (path === '/index.html') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    let string = fs.readFileSync('assets/index.html')
    res.end(string)
  } else if (path === '/main.js') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    res.write(fs.readFileSync('assets/main.js'))
    res.end()
  }else if(path === "/style.css" && method === "GET" ){
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/css')
    res.write(fs.readFileSync('assets/style.css'))
    res.end()
  }
})
server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)