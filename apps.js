const notes =  require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

// add  command
yargs.command({
    command : 'add',
    description:'add all the notes',
    builder: {
        title: {
            description: "my title",
            demandOption: true,
            type:'string'

        },
        body: {
          description : "my page",
          demandOption: true,
            type:'string'
        }
    },
    handler : function(argv) {
        notes.addNotes(argv.title,argv.body)        
    }
})

yargs.command({
    command : 'remove',
    description:'remove note based on title',
    builder: {
        title: {
            description: "my title",
            demandOption: true,
            type:'string'

        },
        body: {
          description : "my page",
          demandOption: true,
            type:'string'
        }
    },
    handler : function(argv) {
        notes.removeNotes(argv.title)        
    }
})

yargs.parse()