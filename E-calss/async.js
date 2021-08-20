const fs = require('fs');

console.log('시작');
fs.readFile('./README2.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log('1번', data.toString());
})
fs.readFile('./README2.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log('2번', data.toString());
})
fs.readFile('./README2.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log('3번', data.toString());
})
console.log('끝')

/**
 * 위와 같은 방식으로 코딩을 했을 때 생각하던 순서대로 출력이 되지 않는다
 * 논블로킹과 블로킹과 관련이 있다
 * 위의 method는 비동기 method 라서 먼저 끝나는것부터 터미널에 찍힌다
 * 순서대로 출력하려면
 * 1. 콜백형식으로 콜백의 콜백의 콜백...과 같은 형식으로 (sync.js 확인)
 */