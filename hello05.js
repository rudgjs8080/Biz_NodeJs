// JS에서 배열을 만들기

/**
 * JS에서의 배열
 * 배열요소의 타입이 고정이 아니다
 *      다른 type의 요소를 같은 배열에 저장 할 수 있다
 */
// blank 배열
let 배열1 = [];
// 초기값이 있는 배열
let 배열2 = [1, 2, 3, 4, 5];
let 배열3 = [1, 2, "korea", 3];
let 배열4 = Array(1, 2, 3, 4, 5);
let 배열5 = Array();

// 기존의 배열에 새로운 요소(item)을 추가하는 방법
배열1.push(10, 20);
배열1.push("korea");
console.log(배열1);

배열3.push(100, 200, 300);
console.log(배열3);

// 배열.length 속성을 통해서 배열의 크기를 알 수 있다
let 배열크기 = 배열3.length;

// 특정한 위치(index)를 지정하여 배열요소를 저장
배열3[3] = "Republic Of Korea Army";
console.log(배열3);

let 요소1 = 배열3[3];

console.log(요소1);

// 배열의 맨 끝에 저장된 요소를 읽기
// 배열의 요소는 0 ~ (크기 -1)
let 요소2 = 배열3[배열3.length - 1];

// 배열과 반복문

console.log("for 시작");

for (let i = 0; i < 배열3.length; i++) {
  console.log(배열3[i]);
}
console.log("for 종료");

// 비동기 callback 방식으로 사용하기
// 비동기 시작 -> 요소들 출력 -> 비동기 종료
// 와 같은 순서대로 작동된다는 보장이 없다
배열3.forEach(function (요소) {
  console.log(요소);
});
// 화살표 함수를 사용한 forEach 반복문
배열3.forEach((요소) => {
  console.log(요소);
});

/**
 * 내부적으로 forEach() 실행되면서
 * 내부의 함수에서 배열요소를 기준으로 연산이 이뤄지고
 * 그 결과를 통째로 다른 변수에 담을 수 있다
 *
 * 만약 배열3의 요소가 5개이다
 * 1. map() 함수내의 화살표 함수는 5번 실행될 것이다
 * 2. 화살표 함수의 코드에서 마지막 return이 있으므로
 *      return문이 5번 실행될 것이다
 * 3. 또다른배열.push(return 된 결과) 의 코드가 5번 실행된다
 *
 * 이 결과를 배열3에 담긴 모든 요소에 끝에 문자열 A 부착되고
 * 문자열 A 부착된 요소들이 또다른배열에 push 되어
 * 새로운 배열이 만들어진다
 */

let 또다른배열 = 배열3.map((요소) => {
  console.log(요소);
  return 요소 + "A";
});

console.log(또다른배열);

let 숫자배열 = [1, 2, 3, 4, 5, 6];
console.log("숫자배열 : ", 숫자배열);

let 제곱한숫자배열 = 숫자배열.map((숫자) => 숫자 * 숫자);

숫자배열.map((숫자, index) => {
  console.log(index, "번째:", 숫자);
});

console.log(숫자배열);

console.log("제곱", 제곱한숫자배열);

// 배열의 요소, index, 자기자신의 복제배열을
// 매개변수로 전달하여 다양한 코드에서 활용할 수 있다
제곱한숫자배열.map((요소, index, 원래배열) => {
  console.log(원래배열, "의", index, "번째 요소", 요소);
});

console.log(제곱한숫자배열);

// 원 배열에서 특정한 조건에 맞는 요소만 추출하여
// 다른 배열로 만들고 싶을 때
// 내부 코드에서 특정 요소가 연산될 때
// 마지막에 return true 인 경우만 해당 요소를 다른 배열에 push

// return 문이 true 일 때 해당하는 요소값이 짝수배열에 push 된다
// return 결과가 짝수배열에 저장되는 것이 아니다
let 짝수배열 = 숫자배열.filter((요소) => {
  return 요소 % 2 == 0;
});

console.log(짝수배열);

let 새로운배열 = (문자열배열 = ["aaa", "bbb", "ccc"]);
문자열배열.filter((요소, index, 배열) => {
  return !!~요소.search(/[ab]+/);
});
console.log(새로운배열);