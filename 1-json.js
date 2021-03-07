
const fs = require('fs')

const book={
    title:'Think like a Monk',
    author: 'Jay Shetty'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON);

fs.writeFileSync('1-json.json',bookJSON)
const dataBuffer = fs.readFileSync('1-json.json')
const data = dataBuffer.toString()
const JSONdata = JSON.parse(data)
console.log(JSONdata.author);