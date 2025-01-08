import AddCardButton from "../components/add-note-button/AddCardButton";
import Header from "../components/header/Header";
import Modal from "../components/modal/Modal";
import NoteForm from "../components/note-form/NoteForm";
import NoteList from "../components/note-list/NoteList";
import { NOTES_MOCK } from "../shared/constants";
import "./Board.css";

function Board() {
  const handleAddTask = () => {
    console.log("This is way overdue...");
  };

  return (
    <section className="board">
      <Header />
      <NoteList notes={NOTES_MOCK} />
      <AddCardButton handleClick={handleAddTask} />
      <Modal isOpen={true}>
        <NoteForm />
      </Modal>
    </section>
  );
}

export default Board;
