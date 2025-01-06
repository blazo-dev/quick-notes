import NoteList from "../components/NoteList";
import { NOTES_MOCK } from "../shared/constants";
import "./Board.css";

function Board() {
  return (
    <section className="board">
      <NoteList notes={NOTES_MOCK} />
    </section>
  );
}

export default Board;
