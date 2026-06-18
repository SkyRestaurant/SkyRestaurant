import mk from './mk.json';
import en from './en.json';

const ui = { mk, en };

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui['mk'][key];
  }
}