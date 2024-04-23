import i18n from './assets/i18n.json';
import en from './assets/en.svg';
import fr from './assets/fr.svg';

export class LocaleData {
  static FR = new LocaleData('fr', fr);
  static EN = new LocaleData('en', en);

  constructor(id, flag) {
    this.id = id;
    this.flag = flag;
    this.table = i18n[id];
  }

  /**
   * @returns {LocaleData}
   */
  static current() {
    return (localStorage.getItem('locale') ?? navigator.language.slice(0, 2)) === 'fr' ? LocaleData.FR : LocaleData.EN;
  }

  save() {
    localStorage.setItem('locale', this.id);
  }

  /**
   * @param {string} textId
   * @returns {string}
   */
  getText(textId) {
    return this.table[textId] ?? `MISSING_TEXT:${textId}`;
  }

  /**
   * Applies the locale to the HTML lang attribute.
   * e.g: <html lang="{locale}">
   */
  applyToHtmlLang() {
    document.querySelector('html')?.setAttribute('lang', this.id);
  }
}
