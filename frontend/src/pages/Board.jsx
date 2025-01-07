import AddCardButton from "../components/add-note-button/AddCardButton";
import NoteList from "../components/note-list/NoteList";
import { NOTES_MOCK } from "../shared/constants";
import "./Board.css";

function Board() {
  const handleAddTask = () => {
    console.log("This is way overdue...");
  };

  return (
    <section className="board">
      <NoteList notes={NOTES_MOCK} />
      
      <AddCardButton handleClick={handleAddTask} />
    </section>
  );
}

export default Board;
