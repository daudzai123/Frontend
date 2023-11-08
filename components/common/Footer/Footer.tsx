'use client';

import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css';
import useWindowSize from '@/hooks/window-size.hook';
import Link from 'next/link';
import { ILink, IStrapiGraphqlResult, IImage } from '@/common/interfaces';
import Logo from '@/components/common/Logo';

type FooterProps = {
  title: string;
  links: ILink[];
  logo: IStrapiGraphqlResult<IImage>;
};

const Footer: React.FC<FooterProps> = ({ links, title, logo }) => {
  const { width } = useWindowSize();
  const isSmallScreen = (width || 0) <= 768; // sm breakpoint is 768px

  const [activePanel, setActivePanel] = useState(isSmallScreen ? -1 : 0);
  useEffect(() => {
    setActivePanel(isSmallScreen ? -1 : 0);
  }, [isSmallScreen]);

  // Function to divide the links into three columns
  const divideLinksIntoColumns = (linksArray: ILink[], numColumns: number) => {
    const dividedLinks: ILink[][] = [];
    const linksPerColumn = Math.ceil(linksArray.length / numColumns);

    for (let i = 0; i < numColumns; i++) {
      dividedLinks.push(linksArray.slice(i * linksPerColumn, (i + 1) * linksPerColumn));
    }

    return dividedLinks;
  };

  // Divide the links into three columns
  const linksColumns = divideLinksIntoColumns(links, 3);

  return (
    <footer
      className={`${styles.footer} border-t border-gray-300 px-10 py-10 text-black dark:bg-[#202123] dark:text-white`}>
      <div
        className={`${styles.footerContent} flex flex-col flex-wrap items-start justify-between sm:flex-row`}>
        <div className='mb-6 w-full py-5 sm:mb-3 sm:w-auto'>
          <Link href='/'>
            <div className='me-4'>
              <Logo url={logo.data.attributes.url} height={70} width={70} />
            </div>
          </Link>
        </div>
        {/* Render three columns of links */}
        {linksColumns.map((columnLinks, columnIndex) => (
          <div
            key={columnIndex}
            className='mb-6 flex w-full flex-col border-b border-gray-300 py-2 sm:mb-0 sm:w-auto sm:border-b-0'>
            <div
              className={`${styles.panel} ${
                isSmallScreen && activePanel === columnIndex ? styles.show : ''
              } ${!isSmallScreen ? styles.show : ''} transition-all ease-in-out`}>
              {columnLinks.map((link, linkIndex) => (
                <Link key={linkIndex} href={link.url} target='_blank'>
                  <div className='cursor-pointer py-2 opacity-70 hover:opacity-100'>
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
