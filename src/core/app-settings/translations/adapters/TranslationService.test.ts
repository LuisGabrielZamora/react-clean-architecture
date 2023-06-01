import { assert } from 'vitest';
import { Languages, TranslationType } from '../domain';
import { TranslationService } from './TranslationService';

const APP_NAME = 'Nombre de app';

describe('TranslationService', () => {
  it('should retrieves the spanish language title', () => {
    const languages: Languages = {
      ESP: {
        HEADER: {
          APP_NAME,
          ALT_LOGO: 'Logo',
        },
      },
      ENG: {
        HEADER: {
          APP_NAME: 'App name',
          ALT_LOGO: 'Logo',
        },
      },
    };

    const expected = APP_NAME;
    const result = TranslationService(languages, TranslationType.ESP).HEADER
      .APP_NAME;
    assert.equal(result, expected);
  });
});
