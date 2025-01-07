import "./Modal.css";

function Modal({ isOpen, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <h1>Edit Note</h1>
      {children}
    </div>
  );
}

export default Modal;
