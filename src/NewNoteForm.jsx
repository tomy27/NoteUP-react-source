import { useState } from "react"

export default function NewNoteForm ({addNote}) {
    const [newNote, setNewNote] = useState("")

    function submitHandler(e) {
        e.preventDefault()
        if(newNote === "") return
        
        addNote(newNote)

        setNewNote("")
    }
    

    return (
    <form onSubmit={submitHandler} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Note</label>
        <input 
          value={newNote}
          onChange={e => setNewNote(e.target.value)}
          type="text" id="item" 
        />
        <button className="btn">Add</button>
      </div>
    </form>
    )

}