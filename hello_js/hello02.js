// JS에서 (JSON)type 객체 만들기

// blank 객체
let 객체1 = {};
객체1.이름 = "이몽룡";
객체1.전화번호 = "11110000";

// 초기값이 있는 객체 만들기
let 객체2 = {
  이름: "홍길동",
  전화번호: "12341234",
};

console.log(객체1);
console.log(객체2);

console.table(객체1);
console.table(객체2);

const 콘솔 = (m) => console.log(m);

콘솔(300 + 1);
