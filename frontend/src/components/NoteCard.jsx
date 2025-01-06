import { NOTE_IMAGES, NOTE_STATES } from "../shared/constants";
import "./NoteCard.css";

function NoteCard({ note }) {
  return (
    <li className={`task task--${note.status}`}>
      <div className="task__content">
        <span className="task__icon">{note.icon}</span>
        <div className="task__details">
          <p className="task__title">{note.title}</p>
          <p className="task__description">{note.description}</p>
        </div>
      </div>
      {note.status != NOTE_STATES.TODO && (
        <img
          src={`/images/${NOTE_IMAGES[note.status]}`}
          alt="Done round"
          className={`task__status-icon task__status-icon--${note.status}`}
        />
      )}
    </li>
  );
}

export default NoteCard;
