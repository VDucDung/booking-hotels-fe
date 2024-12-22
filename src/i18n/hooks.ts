'use client';

import {  usePathname, useRouter } from 'next/navigation';

import { I18nCookieName, Language } from './configs';
import { useCookies } from 'react-cookie';

export const useLanguage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [cookies, setCookie] = useCookies([I18nCookieName]);

  const onChangeLanguage = (lang: Language) => {
    setCookie(I18nCookieName, lang, { path: '/' });

    const newPath = pathname.replace(cookies[I18nCookieName], lang);
    router.replace(newPath);
  };

  return {
    onChangeLanguage,
  };
};
