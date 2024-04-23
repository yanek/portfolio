import { createContext, useEffect, useState } from 'react';
import Hero from './hero/Hero';
import { LocaleData } from '../locale';
import Contact from './contact/Contact';
import Skills from './skills/Skills';
import Resume from './resume/Resume';
import LocalizedText from './LocalizedText';

export const LocaleContext = createContext({
  locale: LocaleData.current(),
  setLocale: () => {},
});

function App() {
  const [locale, setLocale] = useState(LocaleData.current());
  useEffect(() => {
    locale.applyToHtmlLang();
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Hero />
      <main>
        <Resume />
        <Skills />
        {/* Projects go here */}
        <Contact />
      </main>
      <footer>
        <p>
          <a href="#top">
            <LocalizedText textId="BackToTop" />
          </a>
          <br />
          &copy; {new Date().getFullYear()} Noé Ksiazek
        </p>
      </footer>
    </LocaleContext.Provider>
  );
}

export default App;
