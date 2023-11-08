export type PageTitleProps = {
  title: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return <div className='mb-4 w-full text-lg font-bold dark:text-zinc-300'>{title}</div>;
};

export default PageTitle;
