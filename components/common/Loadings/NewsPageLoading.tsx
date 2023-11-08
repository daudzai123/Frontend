export default function NewsPageLoading() {
  return (
    <div className='px-4 md:px-0'>
      <div className='flex animate-pulse flex-col py-8 text-black dark:text-gray-200'>
        <div className='flex flex-row'>
          <div className='text-md h-4 w-1/4 rounded bg-gray-300 font-semibold'></div>
        </div>

        <div className='mb-8 mt-2 flex max-w-[360px] justify-between space-x-1 text-sm'>
          <div className='w-1/3'>
            <div className='h-8 rounded bg-gray-300'></div>
          </div>
          <div className='w-1/3'>
            <div className='h-8 rounded bg-gray-300'></div>
          </div>
          <div className='h-8 w-1/3 rounded bg-primary-color'></div>
        </div>

        <div className='mb-2 h-4 w-1/3 rounded bg-gray-300'></div>
        <div className='mb-2 h-4 w-full rounded bg-gray-300'></div>
        <div className='mb-2 h-4 w-full rounded bg-gray-300'></div>
        <div className='mb-2 h-4 w-full rounded bg-gray-300'></div>
      </div>
    </div>
  );
}
