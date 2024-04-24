import { useContext, useEffect, useState } from "react";
import { Locale, LocaleContext, LocaleState } from "./LocaleContext.tsx";

export interface WindowDimensions {
  width: number;
  height: number;
}

export function useLocaleContext(): LocaleState {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("context not found");
  }
  return context;
}

export function useWindowDimensions(): WindowDimensions {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export function useToggleLocale(): [locale: Locale, toggleLocale: () => void] {
  const toggle = (l: Locale) => (l.id === "fr" ? Locale.EN : Locale.FR);
  const { locale: current, setLocale: setCurrent } = useLocaleContext();
  const [target, setTarget] = useState(toggle(current));
  const toggleLocale = () => {
    setCurrent(target);
    setTarget(toggle(target));
    target.save();
  };

  return [target, toggleLocale];
}
