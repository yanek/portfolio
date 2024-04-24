import { useEffect, useState } from "react";
import Hero from "./hero/Hero.tsx";
import Contact from "./contact/Contact.tsx";
import Skills from "./skills/Skills.tsx";
import Resume from "./resume/Resume.tsx";
import LocalizedText from "./LocalizedText.tsx";
import { LocaleContext, LocaleState, Locale } from "../LocaleContext.tsx";

function App() {
  const defaultLocaleState: LocaleState = {
    locale: Locale.current(),
    setLocale: () => {},
  };
  const [locale, setLocale] = useState<Locale>(defaultLocaleState.locale);

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
