import "./hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import LocaleSelector from "./LocaleSelector.tsx";
import HeroBackground from "./HeroBackground.tsx";
import LocalizedText from "../LocalizedText.tsx";
import { ReactElement } from "react";

function Hero(): ReactElement {
  return (
    <header id="hero">
      <LocaleSelector />
      <HeroBackground />
      <div className="content">
        <p>
          <LocalizedText textId="Hero_TitleStart" />
        </p>
        <h1>Noé Ksiazek</h1>
        <p>
          <LocalizedText textId="Hero_TitleEnd" />
        </p>
      </div>
      <div className="down-arrow">
        <a href="#resume">
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </div>
    </header>
  );
}

export default Hero;
