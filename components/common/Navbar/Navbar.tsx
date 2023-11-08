'use client';

import React, { useRef, useState } from 'react';
import styles from './Navbar.module.css';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import Link from 'next/link';
import { IMenu } from '@/components/common/Navbar/navbar.interface';
import Logo from '@/components/common/Logo';
import MenuItem from '@/components/common/Navbar/MenuItem';
import { IGraphqlResult, IImage, IStrapiGraphqlResult, Theme } from '@/common/interfaces';
import MobileMenuBar from '@/components/common/MobileMenuBar/MobileMenuBar';
import useWindowSize from '@/hooks/window-size.hook';
import { Language } from '@/utils/language.utils';

type NavbarProps = {
  menus: IGraphqlResult<IMenu>[];
  colorTheme: Theme;
  language: Language;
  logoImage: IStrapiGraphqlResult<IImage>;
};

const Navbar: React.FC<NavbarProps> = ({ menus, colorTheme, language, logoImage }) => {
  const [activeMenu, setActiveMenu] = useState<any>(null);
  const [exiting, setExiting] = useState(false);
  const timeoutRef = useRef<any>(null);
  const { width } = useWindowSize();
  const isSmallScreen = (width || 0) <= 1099; // md breakpoint is 1100px

  const handleMenuMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(index);
    setExiting(false);
  };

  const handleMenuMouseLeave = () => {
    setExiting(true);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  return (
    <div
      className={`${styles.mainContainer} sticky top-0 z-50 flex justify-center bg-white bg-opacity-10 backdrop-blur-md transition-colors duration-300 ease-in dark:border-gray-800 dark:bg-[#353740] dark:bg-opacity-10 dark:backdrop-blur-md`}>
      <nav className={`${styles.navbar} sticky flex items-center justify-between px-4 py-3`}>
        <div className='flex items-center space-x-2'>
          {isSmallScreen && <MobileMenuBar language={language} menus={menus} />}
          <Link className='me-4' href={`/${language}`}>
            <Logo height={40} width={40} url={logoImage.data.attributes.url} />
          </Link>
          {!isSmallScreen && (
            <div className='flex items-center'>
              <ul className='ml-8 hidden md:flex'>
                {menus.map((menu, index) => (
                  <MenuItem
                    key={index}
                    index={index}
                    menu={menu.attributes}
                    activeMenu={activeMenu}
                    handleMenuMouseEnter={handleMenuMouseEnter}
                    handleMenuMouseLeave={handleMenuMouseLeave}
                    exiting={exiting}
                    language={language}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className='flex flex-row items-center justify-between gap-3'>
          <LanguageSelector language={language} />
          <ThemeToggler colorTheme={colorTheme} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
