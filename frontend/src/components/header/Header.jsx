import ColorSchemeButton from "../color-scheme-button/ColorSchemeButton";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <aside className="header__aside">
        <h1 className="header__title">QuickNotes</h1>
        <p className="header__paragraph">Keep your notes organized.</p>
      </aside>
      <ColorSchemeButton />
    </header>
  );
}

export default Header;
