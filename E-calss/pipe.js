// 스트림은 버퍼의 흐름이기 때문에
// 여러개의 스트림을 이어 버퍼가 흘러가게 할수 있다

const fs = require('fs')

const readStream = fs.createReadStream('readme4.txt')
const writeStream = fs.createWriteStream('writeme4.txt')

readStream.pipe(writeStream)


/**
 * readme4를 읽어서
 * writeme3 에다가 적어서 새로 만드는 
 * 일종의 복사개념이다 
 * 
 * 하지만 요즘은 copyFile을 사용하면된다
 */
