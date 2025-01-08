function FormButton({ type, label, className }) {
  return (
    <button type={type} className={`form__button ${className}`}>
      {label}
    </button>
  );
}

export default FormButton;
