/**
 * REST API
 * REST API 요청 예시
 * GET(메서드)/users(자원)
 * DELETE(메서드)/users/5(자원)
 * 
 * GET, POST, PUT, PATCH, DELETE
 */

process.on('uncaughtException', (err) =>{
    console.error('예기치 못한 에러', err)
})

setIntervar(() =>{
    throw new Error('서버를 고장내끄니까')
},1000)
setTimeout(() =>{
    console.log('실행됩니다')

},2000)
