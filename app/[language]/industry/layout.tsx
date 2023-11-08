import React from 'react';
import { getIndustries } from '@/api/getIndustries';
import Sidebar from '@/components/Industry/Sidebar/Sidebar';
import { Language } from '@/utils/language.utils';
import MobileSidebar from '@/components/Industry/MobileSidebar/MobileSidebar';

export default async function IndustryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { language: Language };
}) {
  const { language } = params;
  const industries = await getIndustries(language);
  return (
    <>
      <div className='flex flex-col gap-4 md:flex-row'>
        <div className='md:hidden'>
          <MobileSidebar industries={industries.data} language={language} />
        </div>

        <div className='sticky top-0 my-2 hidden h-aboutSidebarContainer flex-col gap-3 overflow-y-scroll p-5 pb-10 text-slate-200 md:flex md:flex-1'>
          <Sidebar industries={industries.data} language={language} />
        </div>

        <main className='flex flex-[4] flex-col text-gray-500 dark:text-gray-300'>{children}</main>
      </div>
    </>
  );
}
