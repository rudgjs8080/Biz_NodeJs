// JS 에서는 변수, 상수, 함수는 사용하기 전에
// 먼저 선언하라
const 함수1 = function () {
  console.log("기본 함수 선언하기");
};
const 함수2 = () => {
  console.log("화살표 함수 선언하기");
};

// 매개변수가 있는 함수 선언하기
const 함수3 = function (num1, num2) {
  console.log(num1, num2, num1 + num2);
};

함수3(100, 200);
함수3();

const 함수4 = (num1, num2) => {
  console.log(num1, num2, num1 + num2);
};

// return이 있는 함수 선언
const 리턴함수1 = function () {
  return 300;
};

리턴함수1(); // 결과를 전혀 확인할 수 없는 함수
// 함수를 실행하고 return 된 결과를 변수 ret1 에 담아라
let ret1 = 리턴함수1();
console.log(ret1);

// return이 있는 화살표 함수
const 리턴함수2 = () => {
  return 500;
};
// 함수 내부에 return 명령문 한개만 있는 경우 아래와 같은 코드 작성 가능
const 리턴함수3 = () => 600 + 100;

fetch("localhost:3000")
  .then((res) => res.json)()
  .then((result) => console.log(result));
