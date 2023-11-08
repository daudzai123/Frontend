import React from 'react';
import Link from 'next/link';
import ChevronIcon from '@/icons/ChevronIcon/ChevronIcon';
import SubMenu from './SubMenu';
import { IMenu } from '@/components/common/Navbar/navbar.interface';
import { Language } from '@/utils/language.utils';

type MenuItemProps = {
  index: number;
  menu: IMenu;
  activeMenu: number;
  handleMenuMouseEnter: (index: number) => void;
  handleMenuMouseLeave: () => void;
  exiting: boolean;
  language: Language;
};

const MenuItem: React.FC<MenuItemProps> = ({
  index,
  menu,
  activeMenu,
  handleMenuMouseEnter,
  handleMenuMouseLeave,
  exiting,
  language,
}) => {
  return (
    <li
      key={index}
      onMouseEnter={() => handleMenuMouseEnter(index)}
      onMouseLeave={handleMenuMouseLeave}
      className='relative p-0'>
      <div
        className={`${
          activeMenu === index && 'transition duration-300'
        } flex cursor-default flex-row items-center rounded px-[10px] py-[6px] dark:text-slate-200`}>
        <div className='me-1 font-light tracking-wide text-black transition-colors dark:text-white'>
          {menu.name}
        </div>
        {menu.subMenus.data.length > 0 && <ChevronIcon active={activeMenu === index} />}
      </div>
      {activeMenu === index && menu.subMenus.data.length > 0 && (
        <SubMenu subMenus={menu.subMenus.data} exiting={exiting} language={language} />
      )}
    </li>
  );
};

export default MenuItem;
