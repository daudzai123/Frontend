import Link from 'next/link';

export type SectionTitleProps = {
  title: string;
  subtitle?: string;
  link: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, link }) => {
  return (
    <div className='flex flex-col py-4 text-black'>
      <Link href={link} prefetch={false} className='flex flex-row gap-1 hover:opacity-80'>
        <div className='text-md font-semibold dark:text-white'>
          {title}
          <p className='italic text-gray-500 dark:text-gray-300'>{subtitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default SectionTitle;
