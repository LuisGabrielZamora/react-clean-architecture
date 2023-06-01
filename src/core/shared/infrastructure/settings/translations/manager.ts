import { spanishTranslation } from './spanish.translation';
import { TranslationsInterface } from '../../../domain/settings';

const translations = {
  SPANISH: spanishTranslation,
  ENGLISH: null,
};

export const translationsManager: TranslationsInterface = translations.SPANISH;
