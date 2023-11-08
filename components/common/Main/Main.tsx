import React from 'react';
import styles from './Main.module.css';

type MainProps = {
  children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main
      className={`${styles.main} justify-center bg-[#fafafa] transition-colors duration-300 ease-in dark:bg-[#353740]`}>
      <div className={`${styles.content} justify-center py-4`}>{children}</div>
    </main>
  );
};

export default Main;
