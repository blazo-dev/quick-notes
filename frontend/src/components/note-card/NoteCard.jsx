import { NOTE_IMAGES, NOTE_STATES } from "../../shared/constants";
import "./NoteCard.css";

function NoteCard({ note }) {
  return (
    <li className={`note note--${note.status}`}>
      <div className="note__content">
        <span className={`note__icon note__icon--${note.status}`}>
          {note.icon}
        </span>
        <div className="note__details">
          <p className="note__title">{note.title}</p>
          <p className="note__description">{note.description}</p>
        </div>
      </div>
      {note.status != NOTE_STATES.TODO && (
        <img
          src={`/images/${NOTE_IMAGES[note.status]}`}
          alt="Done round"
          className={`note__status-icon note__status-icon--${note.status}`}
        />
      )}
    </li>
  );
}

export default NoteCard;
