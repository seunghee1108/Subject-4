// http 내장모듈 불러오기
const http = require("http");
// 파일 시스템 접근하기 위해 fs모듈 불러오기
const fs = require("fs");
// path 변수 선언
const path = require("path");

// conetentType : html
const contentType = {
  "content-Type": "text/html",
  charset: "utf-8",
};
// arrow함수를 사용하여 서버 생성
const server = http.createServer((request, response) => {
  //요청 처리할때 method, url 확인
  let pageURL = request.url;
  if (request.method === "GET" && request.url === "/") {
    // 200 정상 작동
    // response.writeHead(200, contentType);
    // fs모듈 사용하여 html파일 읽기
    fs.readFile("index.html", (err, data) => {
      if (err) {
        //파일을 불러 올 수 없을때 '파일 호출 에러'
        console.log("파일 호출 에러");
      } else {
        response.writeHead(200, contentType);
        // 에러가 뜨지 않는다면 데이터를 보내고 응답끝내기
        response.end(data);
      }
    });
    // 이미지 파일은 영문으로 작성해야 됨
    // startsWith : ('/hamaimage/')~로부터 시작해서
    // basename : 폴더 안에 있는 파일명
    // path : 길
  } else if (pageURL.startsWith("/hamaimage/")) {
    // 변수 설정 = 이미지 파일명
    let imageName = path.basename(request.url);
    // 폴더안에 이미지명을 변수 설정
    let imagePath = "./hamaimage/" + imageName;
    // 폴더안에 있는 파일명을 읽어라
    fs.readFile(imagePath, (err, data) => {
      if (err) {
        console.log("호출 에러");
      } else {
        // content-type은 웹에서 자체적으로 처리해주기때문에 상관없음
        response.writeHead(200, { "Content-Type": "image/png" });
        response.end(data);
      }
    });
  } else {
    // 서버를 불러 올 수 없을때 404에러
    response.writeHead(404, contentType);
    response.end("<h1>요청 페이지를 찾을 수 없음</h1>");
  }
});
server.listen(8080);
