import React from 'react';
import { bahijHelvetica, inter } from '@/utils/font.utils';
import { getThemeCookie } from '@/utils/theme.utils';
import { Language, isLanguage } from '@/utils/language.utils';
import { getMenus } from '@/api/getMenus';
import { getLogo } from '@/api/getLogo';
import CustomProgressBar from '@/components/common/CustomProgressBar';
import Footer from '@/components/common/Footer/Footer';
import Navbar from '@/components/common/Navbar/Navbar';
import Main from '@/components/common/Main/Main';
import { getFooterItems } from '@/api/getFooterItems';
import { notFound } from 'next/navigation';

export default async function HomeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { language: Language };
}) {
  const language = params.language;
  if (!isLanguage(language)) return notFound();

  const theme = getThemeCookie();
  const menus = await getMenus(language);
  const {
    data: {
      attributes: { title: footerTitle, links },
    },
  } = await getFooterItems(language, 27);
  const logo = await getLogo();
  const font = language === 'en' ? 'font-inter' : 'font-bahijHelvetica';
  const dir = language === 'en' ? 'ltr' : 'rtl';

  return (
    <html dir={dir} className={`${theme} ${bahijHelvetica.variable} ${inter.variable}`}>
      <body className={`${font} bg-[#fafafa] dark:bg-[#353740]`}>
        <CustomProgressBar />
        <Navbar
          menus={menus.data}
          colorTheme={theme}
          language={language}
          logoImage={logo.data.attributes.image}
        />
        <Main>{children}</Main>
        <Footer links={links} title={footerTitle} logo={logo.data.attributes.image} />
      </body>
    </html>
  );
}
