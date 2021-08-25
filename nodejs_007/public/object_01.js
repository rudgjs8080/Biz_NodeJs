const arr1 = [1, 2, 3, 4, 5]
const [일, 이, 삼, 사, 오] = arr1;

// obj json 객체에서 각 요소값을 추출하여 
// 사용하고자 할 때
const obj = {name: '홍길동', tel: '1234'}
let 이름 = obj.name;
이름 = obj['name']

// obj 객체로 부터 각각 name, tel 값을 추출하여
// 개결 변수로 사용할 수 있도록 복제하기
const {name, tel} = obj;
console.log(name, tel);

