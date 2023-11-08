export default function MediaPageLoading() {
  return (
    <>
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
    </>
  );
}
