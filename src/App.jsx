import { useEffect, useState } from "react"
import "./styles.css"
import NewNoteForm from "./NewNoteForm"
import NoteList from "./NotesList"
import Header from "./Header"

export default function App() {
  const [notes,setNotes] = useState(()=>{
    const localNotes = localStorage.getItem("NOTES")
    if(localNotes == null) return []

    return JSON.parse(localNotes)
  })

  useEffect(()=>{
    localStorage.setItem("NOTES", JSON.stringify(notes))
  }, [notes])


  function addNote (title) {
        setNotes((currentNotes) => {
          return [
            ...currentNotes,
            {id: crypto.randomUUID(), title, completed: false},
          ]
        })
  }

  function toggleNote(id, completed) {
    setNotes(currentNotes => {
      return currentNotes.map(note => {
        if(note.id === id) {
          return {...note, completed}
        }
        return note
      })
    })
  }

  function deleteNote(id) {
    setNotes(currentNotes => {
      return currentNotes.filter(note => note.id !== id)
    })
  }


  return (
  <>
    <Header />
    <NewNoteForm addNote={addNote} />
    <h1 className="header">Notes</h1>
    <NoteList notes={notes} toggleNote={toggleNote} deleteNote={deleteNote}/>
  </>

  )
}
