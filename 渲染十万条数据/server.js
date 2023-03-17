// 全局安装 npm i nodemon -g
// nodemon server.js 开启服务

const http = require('http')
const port = 8000

http.createServer((req, res) => {
  // 开启Cors
  res.writeHead(200, {
    //设置允许跨域的域名，也可设置*允许所有域名
    'Access-Control-Allow-Origin': '*',
    //跨域允许的请求方法，也可设置*允许所有方法
    "Access-Control-Allow-Methods": "DELETE,PUT,POST,GET,OPTIONS",
    //允许的header类型
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  let list = []
  let num = 0

  // 生成十万条数据的list
  for (let i = 0; i < 100; i++) {
    num++
    list.push({
      src: "https://img.hyebin.top/2020/10/23/e17d1ccf96c97.jpg",
      text: `我是${num}号嘉宾胡歌`,
      tid: num
    })
  }
  res.end(JSON.stringify(list))
}).listen(port, () => {
  console.log('server is listening on port' + ' ' + port)
})
