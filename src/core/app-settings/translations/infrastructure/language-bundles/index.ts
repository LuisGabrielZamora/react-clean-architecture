import { Languages } from '../../domain';

import { EspHeaderBundle } from './EspHeaderBundle';
import { EngHeaderBundle } from './EngHeaderBundle';

export const LanguageBundles: Languages = {
  ESP: {
    HEADER: EspHeaderBundle,
  },
  ENG: {
    HEADER: EngHeaderBundle,
  },
};

export { LanguageSelector } from './LanguageSelector';
