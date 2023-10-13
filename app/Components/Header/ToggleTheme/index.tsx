'use client';
import { useEffect, useState } from 'react';
import * as Icons from 'react-icons/md';
import { useTheme } from 'next-themes';
const ToggleTheme = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <section
      className="cursor-pointer"
      onClick={() =>
        currentTheme == 'dark' ? setTheme('light') : setTheme('dark')
      }
    >
      {currentTheme === 'light' ? <Icons.MdLightMode /> : <Icons.MdDarkMode />}
    </section>
  );
};

export default ToggleTheme;
