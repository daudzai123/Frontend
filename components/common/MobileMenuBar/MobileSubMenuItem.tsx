import React from 'react';
import Link from 'next/link';
import { ISubMenu } from '@/components/common/Navbar/navbar.interface';
import { Language } from '@/utils/language.utils';

type MobileSubMenuItemProps = {
  close: () => void;
  subMenus: ISubMenu;
  language: Language;
};

const MobileSubMenuItem: React.FC<MobileSubMenuItemProps> = ({
  close,
  subMenus: { name, description, url },
  language,
}) => (
  <Link
    href={`/${language}${url}`}
    className='hover:text-gray-600 dark:hover:text-gray-400'
    onClick={close}
    prefetch={false}>
    <li className='flex flex-col items-start px-3 py-4 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900'>
      <div className='mb-1 text-black dark:text-white'>{name}</div>
      <div className='text-xs'>{description}</div>
    </li>
  </Link>
);

export default MobileSubMenuItem;
