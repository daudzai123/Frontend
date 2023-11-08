'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className='dark:text-slate-200'>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
