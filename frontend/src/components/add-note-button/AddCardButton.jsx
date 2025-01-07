import "./AddCardButton.css";

function AddCardButton({ handleClick }) {
  return (
    <button className="button" onClick={handleClick}>
      <img
        className="button__img"
        src="/images/add_round_duotone.svg"
        alt="Add task icon"
      />
      <p className="button__title">Add new task</p>
    </button>
  );
}

export default AddCardButton;
