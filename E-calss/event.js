/**
 * 미리 이벤트리스너를 만들어두고
 * (이벤트 리스터는 특정 이벤트가 발생했을 때 어떤 동작을 할 지 정의하는 부분)
 * 
 * 예시) 사람들이 서버에 방문(이벤트)하면 HTML 파일을 줄거야
 */

// on 과 addEventListener는 같은 기능을 하는 별명이다
const EventEmitter = require('events')

const myEvent = new EventEmitter();

myEvent.addListener('방문', () =>{
    console.log('방문해주셔서 감사합니다')
})

myEvent.on('종료', () =>{
    console.log('안녕히가세요')
})

myEvent.on('종료', () =>{
    console.log('제발 가세요')
})

