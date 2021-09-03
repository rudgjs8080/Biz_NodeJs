# Nodejs + Express + MongoDB API Server
- view와 독립적인(상관없는) 순수 API Server 실습
- 순수 \*.html에서 서버에 RESTFul 요청을 받아 실습

## view + API의 분리
- 순수 HTML을 사용하여 view 화면(UI)를 디자인하고
- JS 파일을 분리하여 script 코드를 작성하고
- Server 개발은 별도로 분리하여 수행하는 방식
- 디자이너, Front 개발자, Back 개발자가 협업이 용이함

- 개발에 앞서 사용할 변수, HTML 클래스, HTML ID, HTML INPUT
변수명 등을 사전에 협의하여 통일하고
- 반드시 문서화를 해놓는것이 좋다

## nodejs + express project 생성후 dependency 할일 들

1. dependency upgrade
npm install cookie-parser
npm install debug
npm install ejs
npm install express
npm install http-errors
npm install morgan

## mysql 프로젝트에서 필요한 dependency
npm install mysql2
npm install sequelize
npm install moment

## nodejs + MongoDB 연동
- native방식, ORM 방식이 있다
- native 방식 : mongoDB Client를 설정하여 직접 명령을 전달하기
- ORM 방식 : mongoose를 사용하여 modeling방식으로 상요하기
- mongoose dependency를 설정 : npm install mongoose

### mongoDB Atlas 접속정보

mongodb+srv://key:<password>@cluster0.zckdw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
