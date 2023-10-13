import Auth from './Auth';
import Logo from './Logo';
import Navigation from './Navigation';
import ToggleTheme from './ToggleTheme';

const Header = () => {
  return (
    <header>
      <div className="p-3 items-center flex justify-between flex-wrap  bg-white dark:bg-gray-900">
        <section className="flex space-x-10 items-center">
          <Logo />
          <ToggleTheme />
        </section>
        <section className="flex space-x-10 items-center">
          <Navigation />
          <Auth />
        </section>
      </div>
    </header>
  );
};

export default Header;
