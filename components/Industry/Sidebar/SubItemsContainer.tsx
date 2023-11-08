import { IStrapiGraphqlListResult } from '@/common/interfaces';
import SubItem from './SubItem';
import { IIndustryDetails } from '@/components/Industry/industry.interface';
import { Language } from '@/utils/language.utils';

type SubItemsContainerProps = {
  subItems: IStrapiGraphqlListResult<IIndustryDetails>;
  path: string;
  language: Language;
};

const SubItemsContainer: React.FC<SubItemsContainerProps> = ({ subItems, path, language }) => {
  return (
    <div className='flex flex-col gap-3 border-s border-black ps-8 dark:border-slate-100'>
      {subItems.data.map(subItem => (
        <SubItem language={language} key={subItem.id} subItem={subItem.attributes} path={path} />
      ))}
    </div>
  );
};

export default SubItemsContainer;
