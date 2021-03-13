const notes = require('./notes.js')
const chalk = require('chalk');
const yargs = require('yargs');

// console.log(process.argv);
yargs.version('1.1.0')

// Crate a remove function



yargs.command({
    command: 'rem',
    describe: 'Remove a note',
    builder:{
        title: {
            describe: 'Removed',
            demandOption: true,
            type: 'string'
        }
        
    },
    handler(argv)
        {notes.removeNotes(argv.title)}
    
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
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
    
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: ()=>{
        
    }
})

yargs.command({
    command: 'list',
    describe: 'Display the list',
    handler: ()=>
        notes.listNotes()
    
})
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: ()=>
        console.log("Read")
    
})

yargs.parse()
// console.log(yargs.argv)

