const fs = require('fs')
const chalk = require('chalk')


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    console.log('New note added!')
    }else{
        console.log('Note title taken!')
    }

   
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    // check if note exist
  
    const noteToBeRemoved = notes.filter((note) => note.title === title)
    const noteToBeSaved = notes.filter((note) => note.title !== title)
   
    if (noteToBeRemoved.length > 0){
       
        saveNotes(noteToBeSaved)
        console.log(chalk.green('Selected notes has been removed from the file...'))
        
    }
    else { 
        console.log(chalk.red('No note was found!'))
    }
}

const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.green("Your notes: "))
    notes.forEach(note => {
        console.log(note.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)
    
    if(noteToRead){
    console.log("Title: " + chalk.green(noteToRead.title))
    console.log("Body: " + noteToRead.body)}
    else{
        console.log(chalk.red("No note was found!"))
    }


}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []

    }}
    


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}