const fs = require('fs')

// const first = fs.readFileSync('./data/first.txt', 'utf-8')
// const first2 = fs.readFileSync('./data/second.txt', 'utf-8')
// console.log(first, first2)

// const title = 'Hello mundo'

// fs.writeFileSync('./data/third.txt', '\n', title, {
//     flag: 'a'
// })


fs.readFile('./data/first.txt', (err, data) => {
    if (err) {
        console.error("error", err)
        return
    }
    console.log(data.toString())
})