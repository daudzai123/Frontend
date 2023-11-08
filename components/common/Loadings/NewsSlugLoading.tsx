export default function NewsSlugLoading() {
  return (
    <div className='mt-16 flex w-full animate-pulse flex-col items-center justify-center px-4'>
      <div className='mb-8 flex flex-col border-b border-gray-300 pb-4 md:w-[50%]'>
        <div className='mb-4 h-10 w-3/4 rounded bg-gray-300 md:w-[80%]'></div>
        <div className='space-y-4'>
          <div className='h-5 w-3/4 rounded bg-gray-300'></div>
          <div className='h-3 w-1/2 rounded bg-gray-300'></div>
          <div className='h-3 w-1/4 rounded bg-gray-300'></div>
        </div>
      </div>
      <div className='flex flex-col pb-4 md:w-[80%]'>
        <div className='h-80 w-full rounded bg-gray-300 md:h-[650px]'></div>
        <div className='my-12 space-y-4'>
          <div className='h-5 w-full rounded bg-gray-300'></div>
          <div className='h-5 w-4/5 rounded bg-gray-300'></div>
          <div className='h-5 w-3/4 rounded bg-gray-300'></div>
        </div>
      </div>
    </div>
  );
}
