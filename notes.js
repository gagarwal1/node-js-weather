const fs = require('fs')


const getNotes = () => {
    return 'your notes for the class'
}
const addNotes = function(Title,body) {
    const notes = loadNode();
     
    const duplicate = notes.filter(function(note){
        console.log(note.Title)
        return note.Title === Title

    })

    if (duplicate.length == 0) {
        notes.push({
            "Title": Title,
            "Body": body
        });
        console.log("its not duplicate")
    } else {

        console.log("it has duplicate")
    }

    
  
    saveNotes(notes)
}
const saveNotes = function(notes){
    
    const userData = JSON.stringify(notes)
    fs.writeFileSync('notes.txt',userData)
    

}
const loadNode = function() {
    try {
    const userBuffer = fs.readFileSync('notes.txt')
    const userData = userBuffer.toString()
    const userJson = JSON.parse(userData)
    return userJson;
    process.exit
    } catch(e) {
        return []
    }
}


const removeNotes = function(title) {
    console.log(title)
    const notes = loadNode()
    console.log(notes)
    const titleRemove = notes.filter(function(note){
        return note.Title !== title
    })

    saveToFile(titleRemove)
}

const saveToFile = function(titleRemove){
    const userData = JSON.stringify(titleRemove)
    console.log(userData)
    fs.writeFileSync('notes.txt',userData)
}

module.exports = {
    getNotes:getNotes,
    addNotes : addNotes,
    removeNotes: removeNotes
}