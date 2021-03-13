const notes = require('./notes.js')
const chalk = require('chalk');
const yargs = require('yargs');

yargs.version('1.1.0')

//Read a note
yargs.command({
    command: 'read',
    describe: 'Read a particular note',
    builder: {
        title: {
            describe: 'Read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// Create a remove function

yargs.command({
    command: 'rem',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { notes.removeNotes(argv.title) }

})

//Create add comment
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }

})

yargs.command({
    command: 'list',
    describe: 'Display the list',
    handler: () =>
        notes.listNotes()

})


yargs.parse()

