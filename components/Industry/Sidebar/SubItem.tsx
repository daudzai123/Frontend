import { IIndustryDetails } from '@/components/Industry/industry.interface';
import HorizontalLineIcon from '@/components/common/Icons/HorizontalLineIcon/HorizontalLineIcon';
import { Language } from '@/utils/language.utils';
import { getLastSlugFromPath } from '@/utils/path.utils';
import Link from 'next/link';

type SubItemProps = {
  subItem: IIndustryDetails;
  path: string;
  language: Language;
};

const SubItem: React.FC<SubItemProps> = ({ subItem, path, language }) => {
  const isActive = getLastSlugFromPath(path) === subItem.slug;

  return (
    <Link
      className={`flex flex-row items-center gap-3 text-sm text-black transition-colors duration-300 hover:text-info-color dark:hover:text-info-dark-color  ${
        isActive
          ? 'font-semibold text-info-color dark:text-info-dark-color'
          : 'dark:text-slate-200 '
      } `}
      href={`/${language}/industry/${subItem.slug}`}>
      <HorizontalLineIcon />
      <div style={{ flex: 1 }}>{subItem.label}</div>
    </Link>
  );
};

export default SubItem;
