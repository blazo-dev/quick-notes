import useToggle from "../../hooks/useToggle";

function FormRadioGroup({ legend, name, options }) {
  const [isChecked, toggleCheck] = useToggle();

  return (
    <div className="form__fieldset">
      <legend className="form__legend">{legend}</legend>
      <div className={`form__${name}-selection`}>
        {options.map(({ value, label, defaultChecked }, index) => (
          <label key={index} className={`form__${name}-option`}>
            <input
              type="radio"
              name={name}
              value={value}
              className={`form__radio ${
                isChecked ? "form__radio--checked" : ""
              }`}
              defaultChecked={defaultChecked}
              onClick={toggleCheck}
              required
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
}

export default FormRadioGroup;
