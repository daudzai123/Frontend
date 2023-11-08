export default function OpportunityPageLoading() {
  return (
    <>
      {/* Announcement Skeleton */}
      <div className='my-4 animate-pulse'>
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
    </>
  );
}
