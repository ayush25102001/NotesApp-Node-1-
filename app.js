const chalk=require('chalk')
const { argv } = require('yargs')
const yargs=require('yargs')
const notes=require("./notes.js")
//const command=process.argv[2]      //Getting the not from user using command line.
//console.log(chalk.red.bold("success!")

//Customizing our own yargs version
yargs.version('1.1.0')

//Creating add command(setting up our own add command in command line).
yargs.command({
    command:'ADD',
    describe:'Adding a new note',
    builder:{//Adding extra parameters.
        title:{
            description:"Note title",
            demandOption:true,  //Makes it compulsory to specify this field.
            type:'string'
        },
        body:{
            description:"Note body",
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv)  //Function executes when the 'ADD' command is used.
    {
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'REMOVE',
    describe:'REMOVE a note',
    builder:{ title:{
        description:"Note title",
        demandOption:true,  //Makes it compulsory to specify this field.
        type:'string'
    }},
    handler:function(argv) 
    {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'LIST',
    describe:'LIST a note',
    handler:function()  
    {
        notes.listNotes()
    }
})

yargs.command({
    command:'READ',
    describe:'READ a note',
    builder:{ title:{
        description:"Note title",
        demandOption:true,  //Makes it compulsory to specify this field.
        type:'string'
    }},
    handler:function(argv)  
    {
        notes.readNote(argv.title)
    }
})
//console.log(argv) :UNCOMMENT THIS TO SEE THE NATURE OF THE OBJECT ARGV
//console.log(yargs.argv)
yargs.parse()







//Defining the funtion as the key in an JS object,
// handler:function(argv){----}___M1
// handler(argv){-----}____M2


//Note: Arrow functions are not good with methods.
// Yargs module is used for creating your own command-line commands in node.js and helps in generating an elegant 
// user interface. This module makes command-line arguments flexible and easy to use.
