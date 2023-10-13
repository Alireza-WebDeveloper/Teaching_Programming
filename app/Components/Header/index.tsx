import Logo from './Logo';
import Navigation from './Navigation';
import ToggleTheme from './ToggleTheme';

const Header = () => {
  return (
    <header>
      <div className="p-2 flex justify-around bg-white dark:bg-gray-900">
        <Logo />
        <Navigation />
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;
