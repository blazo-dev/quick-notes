function FormLabelTextarea({ label, id, name, placeholder }) {
  return (
    <div className="form__textarea-group">
      <label htmlFor={id} className="form__label">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        className="form__textarea"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export default FormLabelTextarea;
