import "./NoteList.css";
import NoteCard from "../note-card/NoteCard";

function NoteList({ notes }) {
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </ul>
  );
}

export default NoteList;
