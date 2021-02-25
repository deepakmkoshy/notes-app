const printing = require('./notes.js')
const chalk = require('chalk');
const yargs = require('yargs');

// console.log(process.argv);
yargs.version('1.1.0')

//Create add comment
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log("added");
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log("Removed");
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


console.log(yargs.argv)

