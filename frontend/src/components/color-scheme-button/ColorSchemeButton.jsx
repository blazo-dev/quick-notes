import "./ColorSchemeButton.css";
import useColorScheme from "../../hooks/useColorScheme";

function ColorSchemeButton() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const handleClick = () => {
    setColorScheme(!colorScheme);
  };

  return (
    <button className="scheme__button" onClick={handleClick}>
      <i className={`fa-regular ${colorScheme ? "fa-sun" : "fa-moon"}`} />
    </button>
  );
}

export default ColorSchemeButton;
