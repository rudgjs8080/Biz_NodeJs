const fs = require('fs')

const writeStream = fs.createWriteStream('./writeme2.txt')

writeStream.on('finish', () =>{
    console.log('파일 쓰기 완료')
    
})

writeStream.write('글을 작성할 수 있다.\n')
writeStream.write('한 번 더 쓸 수 있다')
writeStream.end(); 
