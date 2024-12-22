/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { useParams,  } from 'next/navigation';
import { useEffect,  } from 'react';
import { useCookies } from 'react-cookie';
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next';

import {
  I18nCookieName,
  Language,
  SupportLocales,
  getI18nOptions,
} from './configs';

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

const runsOnServerSide = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getI18nOptions(),
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? SupportLocales : [],
  });

export function useClientTranslation(ns?: string | string[], options?: any) {
  const params = useParams();
  const [cookies, setCookie] = useCookies([I18nCookieName]);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;
  const langFromCookie = cookies[I18nCookieName];
  useEffect(() => {
    if (langFromCookie) {
      i18n.changeLanguage(langFromCookie);
    }
  }, [i18n, langFromCookie]);

  useEffect(() => {
    if (i18n.language) {
      setCookie(I18nCookieName, i18n.language, { path: '/' });
    }
  }, [i18n.language, setCookie]);

  return useTranslationOrg(ns, options);
}
