import React, { useState } from 'react';
import HamburgerIcon from '@/icons/HamburgerIcon/HamburgerIcon';
import ChevronIcon from '@/icons/ChevronIcon/ChevronIcon';
import MobileSubMenuItem from './MobileSubMenuItem';
import { IMenu } from '@/components/common/Navbar/navbar.interface';
import { IGraphqlResult } from '@/common/interfaces';
import styles from './MobileMenuBar.module.css';
import { Language } from '@/utils/language.utils';

type MobileMenuBarProps = {
  menus: IGraphqlResult<IMenu>[];
  language: Language;
};

const MobileMenuBar: React.FC<MobileMenuBarProps> = ({ menus, language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePanel, setActivePanel] = useState(-1);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const togglePanel = (index: number) => {
    setActivePanel(activePanel === index ? -1 : index);
  };

  return (
    <div>
      <div className='cursor-pointer text-black dark:text-white'>
        <HamburgerIcon isOpen={isOpen} onClick={toggleMenu} />
      </div>
      {isOpen && (
        <div
          className={`${styles.mobileMenuContainer} fixed left-0 top-16 h-[calc(100vh-65px)] w-full overflow-y-auto bg-white px-5 py-3 dark:bg-black`}>
          {menus.map(({ attributes: { name, subMenus } }, index) => (
            <div
              key={index}
              className='cursor-pointer border-b border-gray-200 text-sm dark:border-gray-700'>
              <div
                className='flex w-full justify-between px-4 py-4 text-left text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900'
                onClick={() => togglePanel(index)}>
                <div>{name}</div>
                {subMenus.data.length > 0 && (
                  <span>
                    <ChevronIcon active={activePanel === index} />
                  </span>
                )}
              </div>
              {activePanel === index &&
                subMenus.data.length > 0 &&
                subMenus.data.map((subMenu, i) => (
                  <MobileSubMenuItem
                    key={i}
                    close={toggleMenu}
                    subMenus={subMenu.attributes}
                    language={language}
                  />
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenuBar;
