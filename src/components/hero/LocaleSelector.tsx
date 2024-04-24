import { useToggleLocale } from "../Hooks.tsx";
import { ReactElement } from "react";

function LocaleSelector(): ReactElement {
  const [targetLocale, toggleLocale] = useToggleLocale();

  return (
    <div className="locale-selector" id={targetLocale.id}>
      <a href="#" className="interactive-icon" onClick={toggleLocale}>
        <img
          src={targetLocale.flag}
          alt={targetLocale.getText("Hero_SwitchLocale")}
        />
      </a>
    </div>
  );
}

export default LocaleSelector;
