import { useEffect, useState } from "react";
import Hero from "./hero/Hero";
import Contact from "./contact/Contact";
import Skills from "./skills/Skills";
import Resume from "./resume/Resume";
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
