'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import SidebarItem from '../Sidebar/SidebarItem';
import ChevronIcon from '@/components/common/Icons/ChevronIcon/ChevronIcon';
import { IGraphqlResult } from '@/common/interfaces';
import { IIndustry } from '@/components/Industry/industry.interface';
import { Language } from '@/utils/language.utils';

type MobileSidebarProps = {
  industries: IGraphqlResult<IIndustry>[];
  language: Language;
};

const MobileSidebar: React.FC<MobileSidebarProps> = ({ industries, language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='my-2 bg-gray-50 text-black dark:bg-zinc-900 dark:text-white'>
      <div
        onClick={toggleMenu}
        className='flex cursor-pointer flex-row justify-between p-4 text-lg font-bold hover:text-gray-500'>
        <div>List of Content</div>
        <ChevronIcon active={isOpen} />
      </div>
      <div
        className={`h-[300px] origin-top transform flex-col gap-3 overflow-y-scroll p-4 transition-all duration-300 ${
          isOpen ? 'flex scale-y-100' : 'hidden scale-y-0'
        }`}>
        {industries.map(item => (
          <SidebarItem key={item.attributes.url} item={item} path={path} language={language} />
        ))}
      </div>
    </div>
  );
};

export default MobileSidebar;
