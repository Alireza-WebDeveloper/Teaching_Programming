'use client';
import { IconContext } from 'react-icons';
import { ThemeProvider } from 'next-themes';

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem attribute="class">
      <IconContext.Provider
        value={{
          size: '26px',
        }}
      >
        {children}
      </IconContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
