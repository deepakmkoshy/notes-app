const fs = require('fs')
const chalk = require('chalk')
const getNotes = () =>
    'Your notes...'



const addNotes = (title, body) => {
    const notes = loadNotes()

    const duplicate = notes.filter(note =>
        note.title === title
    );

    if (duplicate.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen.black("Added new note"))
    }
    else {
        console.log(chalk.bgRed("Already exists"))
    }
}

const saveNotes = (notes) => {
    const note = JSON.stringify(notes)
    fs.writeFileSync('notes.json', note)
}

const loadNotes = () => {
    try {
        const noteBuffer = fs.readFileSync('notes.json')
        const note = noteBuffer.toString()
        return JSON.parse(note)

    } catch (error) {
        return [];
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const newArr = notes.filter(note => note.title !== title)
    if (newArr.length === notes.length) {
        console.log(chalk.bgRed(`No note titled ${title} exists!`))
    }
    else {
        saveNotes(newArr);
        console.log(chalk.bgGreen.black(`Succesfully removed note ${title}`));
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
}