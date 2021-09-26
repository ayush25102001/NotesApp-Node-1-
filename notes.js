const fs=require('fs')
const chalk = require('chalk')
const addNote=(title,body)=>{             //function(title,body)
     const notes=loadNotes()
     const duplicateNotes=notes.filter((note)=> //Filter,react chya veli hi kela hota "gonna go through all the elements of the array"
     {                                                //note: somewhat a iterating one.
            return note.title===title   //If true then would be added to the array
     })
    //  const duplicateNote=notes.find((item)=>{
    //      item.title===title
    //     })   // find method stops when the first match is found,remains undefined in case of no match
     if(duplicateNotes.length===0)
     {
        notes.push({
            title:title,
            body:body
        })  
        saveNotes(notes)
     }
     else{
         console.log("Title already taken")
     }
    //  if(!duplicateNote)  //No duplicate found
    //  {
    //     notes.push({
    //         title:title,
    //         body:body
    //     })  
    //     saveNotes(notes)
    //  }
    //  else{
    //     console.log("Title already taken")
    //  }
     
}
const saveNotes=(notes)=>        //  function(notes)
{
    const dataJSON=JSON.stringify(notes)  //Stringifying the JSON objects and storing them to a file.
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes=()=>  //function()
{
    try{
        
       const dataBuffer=fs.readFileSync('notes.json')
       const dataJSON=dataBuffer.toString()
       return JSON.parse(dataJSON)
    }
      catch(e)
      {
          return []  //If no note exists.
      } 
}
const removeNote=(title)=>         //function(title)
{
   const notes=loadNotes()  //Loading all notes in the notes array
   const reqNotes=notes.filter(function(note){  
        return note.title!=title  //If current title is not matching to note.title we need to keep the note
   })
//    const dataJSON=JSON.stringify(reqNotes)  //Stringify for all the elements
//    fs.writeFileSync('notes.json',dataJSON)  //This is going to overwrite the file content
if(notes.length===reqNotes.length)
{
    console.log(chalk.bgRed("Note not found"))
}
else{
    console.log(chalk.bgGreen("Note deleted successfully"))
}
   saveNotes(reqNotes)
}
const getNotes=(note)=>     
{
    return note;
}
const listNotes=()=>{
    const notes=loadNotes()
    notes.forEach((item)=> {
        console.log(item.title)
    });
}
const readNote=(title)=>{
      const notes=loadNotes()
      const note=notes.find((note)=>note.title===title)
      if(note){
           console.log(note.title)
           console.log(note.body)
      }else{
           console.log(chalk.bgRed("Note not found"))
      }
}
 module.exports={             //Basically an object is exported.
     getNotes:getNotes,
     addNote:addNote,
     removeNote:removeNote,
     listNotes:listNotes,
     readNote:readNote
 }


