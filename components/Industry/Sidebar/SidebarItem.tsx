import Link from 'next/link';
import SubItemsContainer from './SubItemsContainer';
import { IGraphqlResult } from '@/common/interfaces';
import ChevronIcon from '@/components/common/Icons/ChevronIcon/ChevronIcon';
import HorizontalLineIcon from '@/components/common/Icons/HorizontalLineIcon/HorizontalLineIcon';
import { IIndustry } from '@/components/Industry/industry.interface';
import { checkContainsSlug, getLastSlugFromPath } from '@/utils/path.utils';
import { Language } from '@/utils/language.utils';

type SidebarItemProps = {
  item: IGraphqlResult<IIndustry>;
  path: string;
  language: Language;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  item: {
    attributes: { label, url, industry_details },
  },
  path,
  language,
}) => {
  const hasSubItems = industry_details.data.length > 0;
  const isActive =
    '/' + getLastSlugFromPath(path) === url ||
    checkContainsSlug(getLastSlugFromPath(path), industry_details.data);

  return (
    <>
      <Link href={`/${language}/industry${url}`} prefetch={false}>
        <div
          className={`flex flex-row items-center gap-3 text-sm text-black transition-all duration-300 hover:text-info-color  dark:hover:text-info-dark-color ${
            isActive
              ? 'font-semibold text-info-color dark:text-info-dark-color'
              : 'dark:text-slate-200'
          }`}>
          {hasSubItems ? <ChevronIcon active={isActive} /> : <HorizontalLineIcon />}
          {label}
        </div>
      </Link>
      {isActive && hasSubItems && (
        <SubItemsContainer language={language} subItems={industry_details} path={path} />
      )}
    </>
  );
};

export default SidebarItem;
