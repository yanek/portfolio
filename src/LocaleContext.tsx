import React, { createContext } from "react";
import i18n from "./assets/i18n.json";
import en from "./assets/en.svg";
import fr from "./assets/fr.svg";

export interface LocaleState {
  locale: Locale;
  setLocale: React.Dispatch<React.SetStateAction<Locale>>;
}

export const LocaleContext = createContext<LocaleState | undefined>(undefined);

type Table = Record<string, string>;
type LocaleFile = Record<string, Table>;

export class Locale {
  static FR = new Locale("fr", fr);
  static EN = new Locale("en", en);

  id: string;
  flag: string;
  table: Table;

  constructor(id: string, flag: string) {
    this.id = id;
    this.flag = flag;
    this.table = (i18n as LocaleFile)[id];
  }

  static current(): Locale {
    return (localStorage.getItem("locale") ??
      navigator.language.slice(0, 2)) === "fr"
      ? Locale.FR
      : Locale.EN;
  }

  save() {
    localStorage.setItem("locale", this.id);
  }

  getText(textId: string): string {
    return this.table[textId] ?? `MISSING_TEXT:${textId}`;
  }

  /**
   * Applies the locale to the HTML lang attribute.
   * e.g: <html lang="{locale}">
   */
  applyToHtmlLang() {
    document.querySelector("html")?.setAttribute("lang", this.id);
  }
}
