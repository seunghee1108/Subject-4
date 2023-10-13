const { error } = require('console');
const http = require('http');
const fs = require('http');
const contentType = {
  'content-Type' : 'text/html',
  'charset' : 'utf-8',
};
http.createServer((request, response) => {
  if(request.method === 'GET' && request.url === '/') {
    response.writeHead(200, contentType);
    fs.readFile('index.html', (err, data) => {
      if(err) {
        console.error('파일 호출 에러')
      } else {
        response.end(data);
      }

    })
  }
})


// http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/') {
//         res.writeHead(200, contentType);
//         fs.readFile('index.html', (err, data) => {
//             if (err) {
//                 console.log('파일 호출 에러');
//             } else {
//                 res.end(data);
//             }
//         });
//     } else {
//         res.writeHead(404, contentType);
//         res.end('<h1>요청 페이지를 찾을 수 없음</h1>');
//     }
// }).listen(8080);