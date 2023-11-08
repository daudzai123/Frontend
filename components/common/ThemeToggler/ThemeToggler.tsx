import { Theme } from '@/common/interfaces';
import MoonIcon from '@/icons/MoonIcon/MoonIcon';
import SunIcon from '@/icons/SunIcon/SunIcon';
import { setCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

type ThemeTogglerProps = {
  colorTheme: Theme;
};

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ colorTheme }) => {
  const [theme, setTheme] = useState(colorTheme || 'light');

  useEffect(() => {
    if (!colorTheme) {
      setCookie('theme', 'light', { maxAge: 60 * 60 * 24 * 30 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggleTheme = (theme: Theme) => {
    setTheme(theme);
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setCookie('theme', theme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <div
      className={`cursor-pointer rounded-full p-1 transition-colors duration-300 ease-in-out hover:bg-opacity-[70%] dark:hover:bg-red-100 dark:hover:bg-opacity-[10%] ${
        theme === 'light' ? 'bg-[#4fd1c5]' : ''
      }`}
      onClick={() => handleToggleTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? (
        <MoonIcon width={18} height={18} />
      ) : (
        <SunIcon width={18} height={18} color={'#FFD700'} />
      )}
    </div>
  );
};

export default ThemeToggler;
