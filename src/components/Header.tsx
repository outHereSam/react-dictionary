import FontSwitcher from "./FontSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="options">
        <FontSwitcher />
        <span className="divider"></span>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
