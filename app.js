// http 내장모듈 불러오기
const http = require('http');
// 파일 시스템 접근하기 위해 fs모듈 불러오기
const fs = require('fs');

// conetentType : html
const contentType = {
  'content-Type' : 'text/html',
  'charset' : 'utf-8',
};
// arrow함수를 사용하여 서버 생성
http.createServer((request, response) => {
  //요청 처리할때 method, url 확인
  if(request.method === 'GET' && request.url === '/') {
    // 200 정상 작동
    response.writeHead(200, contentType);
    // fs모듈 사용하여 html파일 읽기
    fs.readFile('index.html', (err, data) => {
      if(err) {
        //파일을 불러 올 수 없을때 '파일 호출 에러'
        console.log('파일 호출 에러')
      } else {
        // 에러가 뜨지 않는다면 데이터를 보내고 응답끝내기
        response.end(data);
      }
    });
  } else {
    // 서버를 불러 올 수 없을때 404에러
    response.writeHead(404, contentType);
    response.end('<h1>요청 페이지를 찾을 수 없음</h1>');
  }
  if(request/url ====)

  // 이미지 불러오기 위한 작업 (다시 작업해 볼 것)
  // if(request.url === '/image'){
  //   fs.readFile('./image/hama.png', function(err,data){
  //     console.log('image loading...');
  //     response.writeHead(200);
  //     response.write(data);
  //     response.end();
  //   })
  // }
  // app.get('/image',(request,response)=>{
  //   fs.readFile('/image/hama.png',(err, data) => {
  //     if(err){response.send()}
  //     response.send(data)
  //   })
  // })
}).listen(8080);


