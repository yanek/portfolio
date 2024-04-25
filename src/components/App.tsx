import { useEffect, useState } from "react";
import { LocaleContext, LocaleState, Locale } from "./LocaleContext.tsx";
import Hero from "./hero/Hero.tsx";
import Contact from "./contact/Contact.tsx";
import Skills from "./skills/Skills.tsx";
import Resume from "./resume/Resume.tsx";
import Footer from "./Footer.tsx";

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
      <Footer />
    </LocaleContext.Provider>
  );
}

export default App;
