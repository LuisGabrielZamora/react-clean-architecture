import { useEffect, useState } from 'react';

import { Translation } from '../domain';
import { LanguageBundles, LanguageSelector } from '../infrastructure';

import { TranslationService } from './TranslationService';

export const useTranslationController = () => {
  const [translationBundle, setTranslationBundle] = useState<Translation>();

  useEffect(() => {
    setTranslationBundle(
      TranslationService(LanguageBundles, LanguageSelector())
    );
  }, []);

  return { translationBundle };
};
