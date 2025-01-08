import useToggle from "../../hooks/useToggle";
import "./Modal.css";

function Modal({ isOpen, children }) {
  const [modalOpened, toggleModal] = useToggle(isOpen);

  if (!modalOpened) return null;

  return (
    <div className="modal" onClick={toggleModal}>
      {children}
    </div>
  );
}

export default Modal;
