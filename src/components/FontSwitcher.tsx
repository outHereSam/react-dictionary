import { useContext } from "react";
import Arrow from "../assets/icon-arrow-down.svg";
import { FontContext } from "../contexts/FontContext";

export default function FontSwitcher() {
  const { font } = useContext(FontContext);
  return (
    <button className="fontSwitcher">
      {font}
      <img src={Arrow} alt="arrow down" />
    </button>
  );
}
