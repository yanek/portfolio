import { useToggleLocale } from "../../Hooks.tsx";

function HeroLocaleSelector() {
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

export default HeroLocaleSelector;
