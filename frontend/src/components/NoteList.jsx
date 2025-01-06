import NoteCard from "./NoteCard";
import "./NoteList.css";

function NoteList({ notes }) {
  return (
    <ul className="task-list">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </ul>
  );
}

export default NoteList;
