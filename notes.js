const fs = require('fs')

const getNotes = function(){
    return 'Your notes...'
}

const addNotes = function(title,body){
const notes = loadNotes()

const duplicate = notes.filter(note =>{
    return note.title === title
});

if(duplicate.length === 0){
notes.push({
    title: title,
    body: body
})
saveNotes(notes)
console.log("Added new note")
}
else{
console.log("Already exists")
}}

const saveNotes = (notes)=>{
    const note = JSON.stringify(notes)
    fs.writeFileSync('notes.json',note)
}

const loadNotes = () =>{
    try {
        const noteBuffer = fs.readFileSync('notes.json')
        const note = noteBuffer.toString()
        return JSON.parse(note)
        
    } catch (error) {
return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes:addNotes
}