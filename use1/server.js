//http 뭉치를 요청한다 -> 그럼 리턴할때 프로그램 뭉치를 변수에 담김
var http = require('http')
//file system 도구를 넘겨받는거 우리가 쓸
var fs = require('fs')
var mySet = function (request, response) {
  //myset이 실행되면 리퀘스트가 유알엘을 받음?
  var url = request.url;
  //요청을 받아서 변수 url 에 들어온거 판별
  if (request.url === '/') {
    url = '/index.html'
  }

  //내가 서버인 내가, 성공메세지 보내주는거
  response.writeHead(200, {
    'Content-Type': 'text/html'
  })
  //인덱스.html 을 요청한 사람한테 주려면 일단 내 db에서 찾아야함 그 과정
  var htmlFile = fs.readFileSync(__dirname + url)
  //위에 우리가 찾은게 변수에 담기고 우린 그걸 주는거
  response.end(htmlFile);
}
//서버실행 , createServer가 서버를 만드는 함수인가?
var app = http.createServer(mySet)
//8080포트 열고 요청오길 기다리고 있는거
app.listen(8080)

// var http = require('http');
// var fs = require('fs');
// var mySet = function(request, response) {
//     var url = request.url;
//     if (request.url === '/') {
//         url = '/index.html';
//     }
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     var htmlFile = fs.readFileSync(__dirname + url);
//     response.end(htmlFile);
// }
// var app = http.createServer(mySet);
// app.listen(8080);