export default function HomePageLoading() {
  return (
    <div className='animate-pulse'>
      {/* Hero Section Skeleton */}
      <div className='relative z-10 mx-auto animate-pulse px-4 py-10 xs:py-24 sm:px-6 md:max-w-7xl md:px-8'>
        <div className='flex flex-col items-center text-center'>
          <span className='mb-4 block h-10 w-full rounded bg-gray-300'></span>
          <p className='mb-14 h-4 w-full max-w-3xl rounded bg-gray-300'></p>
          <div className='flex-column flex w-full flex-wrap items-center justify-center gap-4 p-2'>
            <div className='flex h-12 w-full rounded bg-gray-300 xs:w-[50%] sm:w-[30%] md:w-[20%]'></div>
            <div className='flex h-12 w-full rounded bg-gray-300 xs:w-[50%] sm:w-[30%] md:w-[20%]'></div>
          </div>
        </div>
      </div>

      {/* Statement Skeleton */}
      <div className='mt-5 border-t border-gray-300 py-4'>
        <div className='mb-4 h-4 w-1/3 rounded bg-gray-300'></div>
        <div className='flex flex-col items-center gap-4'>
          <div className='my-4 w-full'>
            <div className='mb-2 h-4 w-full rounded bg-gray-300'></div>
            <div className='mb-2 h-4 w-3/4 rounded bg-gray-300'></div>
            <div className='h-4 w-1/2 rounded bg-gray-300'></div>
          </div>
          <div className='h-40 w-40 rounded bg-gray-300'></div>
        </div>
      </div>

      {/* News Section Skeleton */}
      <div className='my-4 flex animate-pulse'>
        <div className='mr-8 w-2/3 py-4'>
          <div className='mb-4 h-4 w-1/3 rounded bg-gray-300'></div>
          <div className='h-40 w-full rounded bg-gray-300'></div>
        </div>

        <div className='grid w-1/3 grid-cols-2 gap-4'>
          {[...Array(4)].map((_, index) => (
            <div key={index} className='mb-8 py-4'>
              <div className='mb-4 h-2 w-1/4 rounded bg-gray-300'></div>
              <div className='h-20 w-full rounded bg-gray-300'></div>
            </div>
          ))}
        </div>
      </div>

      {/* Announcement Skeleton */}
      <div className='mb-8 border-t border-gray-300 py-8'>
        <div className='max-w-screen-lg px-4'>
          <div className='mb-8 flex flex-col items-center justify-between md:flex-row'>
            <div className='h-6 w-1/4 rounded bg-gray-300 md:mb-0'></div>
            <div className='h-4 w-1/4 rounded bg-gray-300'></div>
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            <div className='h-40 rounded bg-gray-300'></div>
            <div className='h-40 rounded bg-gray-300'></div>
            <div className='h-40 rounded bg-gray-300'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
