function FormLabelInput({
  label,
  id,
  name,
  type = "text",
  placeholder,
  required = false,
}) {
  return (
    <div className="form__input-group">
      <label htmlFor={id} className="form__label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="form__input"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default FormLabelInput;
