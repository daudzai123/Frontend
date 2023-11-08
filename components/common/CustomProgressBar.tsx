'use client';

import ProgressBar from 'next-nprogress-bar';

const CustomProgressBar = () => {
  return (
    <ProgressBar
      height='3px'
      color='tomato'
      options={{ showSpinner: false }}
      shallowRouting
      appDirectory
    />
  );
};

export default CustomProgressBar;
