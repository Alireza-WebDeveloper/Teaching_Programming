import Logo from './Logo';
import Navigation from './Navigation';
import ShoppingCart from './Navigation/Shop';
import ToggleTheme from './ToggleTheme';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 fadeComponent inset-x-0  backdrop-filter  dark:backdrop-brightness-50 backdrop-blur-[8px]">
      <div className="p-3 items-center flex justify-around flex-wrap  bg-white dark:bg-gray-900">
        <section className="flex space-x-10 items-center">
          <Logo />
          <ToggleTheme />
          <ShoppingCart />
        </section>
        <section className="flex space-x-10 items-center">
          <Navigation />
        </section>
      </div>
    </header>
  );
};

export default Header;
