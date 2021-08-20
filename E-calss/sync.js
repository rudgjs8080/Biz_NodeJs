// const fs = require('fs')

// console.log('시작')
// fs.readFile('./README2.txt', (err, data) =>{
//     if(err){
//         throw err;
//     }
//     console.log('1번', data.toString());
//     fs.readFile('./README2.txt', (err, data) =>{
//         if(err) {
//             throw err;
//         }
//         console.log('2qjs', data.toString())
//         fs.readFile('./README2.txt', (err, data) =>{
//             if(err) {
//                 throw err;
//             }
//             console.log('3번', data.toString());
//             console.log('끝')
//         })
//     })
// })

// 또는

// const fs = require('fs');

// console.log('시작');
// let data = fs.readFileSync('./README2.txt')
// console.log('1번', data.toString())
// data = fs.readFileSync('./README2.txt')
// console.log('2번', data.toString());
// data = fs.readFileSync('./README2.txt')
// console.log('3번', data.toString())
// console.log('끝')

/**
 * fs 메서드들은 뒤에 Sync를
 * 붙이면 동기식으로 작동한다
 * fs.writeFile((err, data) =>{})
 * const data = fs.writeFileSync();
 */