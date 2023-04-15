export default function NoteList ({notes, toggleNote, deleteNote}) {
    return (
        <ul className="list">
        {notes.length === 0 && "No notes"}
        {notes.map(note => {
            return (
                <li key={note.id}>
                    <button className="btn btn-danger btn-trash"
                        onClick={() => deleteNote(note.id)}
                    >
                        <i className="bi bi-trash"></i>
                    </button>
                    <label className="container">
                        <input type="checkbox"
                            checked={note.completed}
                            onChange={(e) => toggleNote(note.id, e.target.checked)}
                        />
                        <div className="container">
                            {note.title}
                        </div>
                    </label>
                </li>
            )
        })}
        </ul>
    )
}
