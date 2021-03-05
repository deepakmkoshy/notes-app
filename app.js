const printing = require('./notes.js')
const chalk = require('chalk');
const yargs = require('yargs');

// console.log(process.argv);
yargs.version('1.1.0')

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
    handler: function(argv){
        console.log("added", argv.title);
        console.log("Body: ", argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        
    }
})

yargs.command({
    command: 'list',
    describe: 'Display the list',
    handler: function(){
        console.log("List:");
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log("Read");
    }
})

yargs.parse()
// console.log(yargs.argv)

