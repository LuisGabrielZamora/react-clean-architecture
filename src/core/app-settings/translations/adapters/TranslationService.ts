import { Languages, Translation, TranslationType } from '../domain';

export const TranslationService = (
  languageBundles: Languages,
  translationType: TranslationType
): Translation => languageBundles[translationType];
