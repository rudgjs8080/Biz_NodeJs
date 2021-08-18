// var a = 1;
// var b = 2;
// console.log(a + b);
// console.log('hello node');

// 0814
/**
 * 태스크 큐 : 
 * 순차적으로 실행되다가 새치기가 가능하다? 
 * 
 * 이벤트 루프 : 
 * 가능하다면 언제나 시스템 커널에 작업을 떠넘겨서
 * node.js가 논 블로킹 i/o 작업을 수행하도록 해준다(JS가 싱글 스레드임에도 불구하고)
 * 
 * ES2015 문법
 * var 와 const의 차이
 * 
 * const는 값 재할당(=) 불가
 * let은 가능
 * 
 * const에 객체가 할당된 경우 객체 내부 속성은 바꿀 수 있다
 * 
 */

// function run(){
//     console.log('3초 후 실행');
// }
// console.log('시작');
// setTimeout(run, 3000);
// console.log('끝');

// if(true){
//     var x = 3;
// }
// console.log(x);

// if(true){
//     const y = 3;
// }
// console.log(y);

// 0815
/**
 * 백틱(`)을 써서 템플릿 문자열을 사용한다
 * ex) `${a} ${b} ${c}`;
 * 
 * 키랑 값(변수)이 같은 경우
 * {data: data, hello: hello}를
 * {data, hello}로 표시한다
 * 
 * 동적 속성 할당을 
 * 리터럴 안에 표현 가능하다
 * {[변수]: 값} 
 * 
 * 화살표 함수
 * function(매개) { return 리턴}
 * 다음과 같이 쓸 수 있다
 * (매개) => {return 리턴} 
 * 
 * (매개) => {return 리턴}
 * 리턴만 있는 경우
 * (매개) => 리턴
 * 이렇게 줄 일 수 있다
 * 
 * 화살표 함수는 함수 내부의 this를
 * 외부의 this와 같게 만들어준다
 * 
 * 비구조 할당(destructuring)
 * const a = 객체.a
 * const b = 객체.b
 * 를 다음과 같이 바꿀 수 있다
 * const {a, b} = 객체 
 * 
 * (...변수)는 rest로 여러개의
 * 변수를 모아서 배열로 만듭니다
 * 
 * 
 * 
 */

// const a = 'hello';
// const b = 'world';
// const c = '!!';

// const d = `${a} ${b} ${c}`;
// console.log(d);

// 옛날 문법
// var sayNode = function(){
//     console.log('Node');
// };
// var es = 'ES';
// var oldObject = {
//     sayJS : function(){
//         console.log.log('JS');
//     },
//     sayNode: sayNode,
// };
// oldObject[es + 6] = 'Fantastic';
// console.log(oldObject);

// 현재 문법
// const newObject = {
//     sayJS(){
//         console.log('JS');
//     },
//     sayNode,
//     [es + 6] : 'Fantastic',
// };

// var relationship1 = {
//     name: 'zero',
//     friends:['nero', 'hero', 'xero'],
//     logFriends: function(){
//         var that = this; // relationship1을 가르키는 this를 that에 저장
//         this.friends.forEach(function(friend){
//             console.log(that.name, friend);
//         });
//     },
// };
// relationship1.logFriends();

// 비구조 할당
// var candyMachine = {
//     status: {
//         name: 'node',
//         count:5,
//     },
//     getCandy: function(){
//         this.status.count--;
//         return this.status.count;
//     }
// };
// console.log(candyMachine.status); 

// CallBack
// Users.findOne('zero', (err, user) =>{
//     if(err){
//         return console.error(err);
//     }
//     console.log(user);
//     Users.update('zero', 'nero', (err, updateUser) =>{
//         console.log(updateUser);
//         Users.remove('nero', (err, removedUser) => {
//             if (err) {
//                 return console.error(err);
//             }
//             console.log(removedUser);
//         });
//     });
// });
// console.log('다 찾았니?');
// Promise
// Users.findOne('zero')
//     .then((user) => {
//         console.log(user);
//         return Users.update('zero', 'nero');
//     })
//     .then((updatedUser) => {
//         console.log(updatedUser);
//         return Users.remove('nero');
//     })
//     .then((removedUser) => {
//         console.log(removedUser);
//     })
//     .catch((err) => {
//         console.error(error);
//     })
//     console.log('다 찾았니?');

/**
 * resolve(msg) -> then(msg)
 * reject(err) -> catch(err)
 */
// const plus = new Promise((resolve, reject) =>{
//     const a = 1;
//     const b = 2;
//     if(a + b > 2){
//         resolve(a +b + 'success');
//     }else {
//         reject('fail');
//     }
// });


// plus
//     .then((success) =>{
//         console.log(success);
//     })
//     .catch((fail) => {
//         console.log(fail);
//     })

// Promise는 결괏값을 가지고 있지만
// .then이나 .catch를 붙이기 전까지 반환하지 않는 것






