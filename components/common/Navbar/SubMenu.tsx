import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { ISubMenu } from '@/components/common/Navbar/navbar.interface';
import { IGraphqlResult } from '@/common/interfaces';
import { Language } from '@/utils/language.utils';

type SubMenuProps = {
  subMenus: IGraphqlResult<ISubMenu>[];
  exiting: boolean;
  language: Language;
};

const SubMenu: React.FC<SubMenuProps> = ({ subMenus, exiting, language }) => {
  return (
    <div className={`${styles.submenuContainer}${exiting ? ' ' + styles.exiting : ''}`}>
      <div
        className={`flex max-h-[600px] min-w-[max-content] flex-col flex-wrap rounded border border border-gray-300 bg-white p-5 text-lg text-black
        shadow`}>
        {subMenus.map(({ id, attributes: { name, description, url } }) => (
          <div key={id}>
            <Link
              href={`/${language}${url}`}
              key={id}
              prefetch={false}
              className='flex flex-col py-2 hover:text-info-color'>
              <div className='flex items-center justify-start font-semibold'>
                <div>{name}</div>
              </div>
              <div className='text-xs'>{description}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;
