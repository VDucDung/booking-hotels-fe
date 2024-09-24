'use client';
import { Layout, Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useClientTranslation } from '@/i18n/client';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';
import { I18nCookieName } from "@/i18n/configs";
import images from "@/assets/images";
import { HertIcon } from "@/assets/icons";

const { Header } = Layout;

const AppHeader = () => {
  const { t } = useClientTranslation('Common');
  const languagesRef = useRef(null);  
  const buttonRef = useRef(null);    
  const [showLanguages, setShowLanguages] = useState(false);
  const { i18n } = useTranslation();
  const [cookies, setCookie] = useCookies([I18nCookieName]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setCookie(I18nCookieName, lang, { path: '/' });
    setShowLanguages(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languagesRef.current &&
        !languagesRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowLanguages(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
  <Header className=" bg-[#00ba51] h-[115px] pt-[8px] relative px-[230px]">
      <div className="container mx-auto">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link href={'/'}>
            <Image src="/images/booking-icon.jpg" alt="logo" width={80} height={80} className="rounded-[50px]" />
          </Link>
        </div>
        <div className="flex text-white gap-2">
        <div className="flex items-center">
          <Tooltip title={t('header.na03')}>
            <Link href={'/'} className="border border-red-500 bg-red-500 rounded-full" >
              <HertIcon className="w-10 h-10 hover:scale-95 transition duration-300 ease-in-out scale-100" />
            </Link>
          </Tooltip>
          </div>
          <div className="flex items-center">
            <Link href={'/'} className="px-[12px] text-[16px] font-medium hover:bg-[#00BA00] hover:text-white">{t('header.na01')}</Link>
          </div>
          <div className="flex items-center ">
            <Link href={'/login'} className="px-[12px] text-[16px] font-medium bg-[#fff] text-[#00BA00] hover:text-[#00BA00] hover:opacity-90 border border-white rounded-lg">{t('header.na02')}</Link>
          </div>
          <div className="pl-[12px] relative flex items-center ">
            <button
              ref={buttonRef}
              onClick={() => setShowLanguages(!showLanguages)}
              className="focus:outline-none flex items-center hover:bg-[#00BA00] hover:text-white"
            >
              <Image
                loading="lazy"
                className="w-8 h-6"
                src={images[i18n.language] || images.en}
                alt={i18n.language}
              />
              <span className="ml-2">{i18n.language.toUpperCase()}</span>
            </button>
            {showLanguages && (
              <ul
                ref={languagesRef}
                className="absolute z-99 right-0 mt-2 w-[170px] bg-white shadow-lg rounded-lg border border-gray-200 top-[43px] text-gray-600 z-50"
              >
                <li
                  onClick={() => handleLanguageChange('vi')}
                  className="cursor-pointer flex items-center p-3 hover:bg-gray-100 hover:rounded-t-lg transition-colors duration-200"
                >
                  <Image
                    loading="lazy"
                    className="w-7 h-6"
                    src={images.vi}
                    alt="vi"
                  />
                  <p className="ml-3 m-0">Tiếng Việt</p>
                </li>
                <li
                  onClick={() => handleLanguageChange('en')}
                  className="cursor-pointer flex items-center p-3 hover:bg-gray-100 hover:rounded-b-lg transition-colors duration-200"
                >
                  <Image
                    loading="lazy"
                    className="w-8 h-6"
                    src={images.en}
                    alt="en"
                  />
                  <p className="ml-3 m-0">English</p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  </Header>
  );
};

export default AppHeader;
