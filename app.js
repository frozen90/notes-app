const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version

yargs.version('1.1.0')

// add, remove, read ,list

// Create add command

yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'File body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title to be removed',
            demandOption: true,
            type: 'string'

        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

//Create read command

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
        describe:'Note title',
        demandOption: true,
        type: 'string'}
    },
    handler: function(argv){
        notes.readNotes(argv.title)
        }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler: function(){
        notes.listNotes()
    }
}) 

yargs.parse()