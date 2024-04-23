import './hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import HeroLocaleSelector from './HeroLocaleSelector';
import HeroBackground from './HeroBackground';
import LocalizedText from '../LocalizedText';

export const BG_TEXT_URI = 'https://unpkg.com/react@16/umd/react.development.js';

function Hero() {
  return (
    <header id="hero">
      <HeroLocaleSelector />
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
