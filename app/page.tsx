import { getLanguage, isLanguage } from '@/utils/language.utils';
import { notFound, redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const language = getLanguage();

  if (isLanguage(language)) {
    redirect(`/${language}/`);
  } else {
    return (
      <div className='flex h-full flex-col items-center justify-center'>
        <h1 className='dark:text-slate-200'>{'Language is not correct'}</h1>
      </div>
    );
  }
}
