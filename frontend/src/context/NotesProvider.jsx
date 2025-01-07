import { useMemo, useState } from "react";
import { NotesContext } from "./notesContext";

function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  return (
    <NotesContext.Provider
      value={useMemo(
        () => ({
          notes,
          setNotes,
          currentNote,
          setCurrentNote,
        }),
        [notes, currentNote]
      )}
    >
      {children}
    </NotesContext.Provider>
  );
}

export default NotesProvider;
