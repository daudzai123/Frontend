import { getLanguage, getDictionaryAsync } from '@/utils/language.utils';
import Link from 'next/link';

export default async function NotFound() {
  const language = getLanguage();
  const {
    common: { notFound },
  } = await getDictionaryAsync(language);
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <h1>{notFound.pageNotFound}</h1>
      <div className='text-blue-500 hover:text-blue-300'>
        <Link href='/'>{notFound.goBackToHomepage}</Link>
      </div>
    </div>
  );
}
