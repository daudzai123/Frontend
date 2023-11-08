'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import SidebarItem from './SidebarItem';
import { IGraphqlResult } from '@/common/interfaces';
import { IIndustry } from '@/components/Industry/industry.interface';
import { Language } from '@/utils/language.utils';

type SidebarProps = {
  industries: IGraphqlResult<IIndustry>[];
  language: Language;
};

const Sidebar: React.FC<SidebarProps> = ({ industries, language }) => {
  const path = usePathname();
  return (
    <>
      {industries.map(item => (
        <SidebarItem language={language} key={item.attributes.url} item={item} path={path} />
      ))}
    </>
  );
};

export default Sidebar;
