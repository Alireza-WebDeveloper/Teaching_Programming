'use client';

import GlobalLinks from './Global';
import SignLinks from './Sign';
import Logout from './Logout';
import Auth from './Auth';

interface NavigationProps {
  isError: any;
  user: any;
  isLoading: any;
}

const Navigation: React.FC<NavigationProps> = ({ isLoading, user }) => {
  return (
    <section className="flex flex-wrap relative gap-7 items-center">
      {!user && !isLoading ? (
        <>
          <GlobalLinks />
          <SignLinks />
        </>
      ) : !user ? (
        <>
          <GlobalLinks />
        </>
      ) : (
        <>
          <GlobalLinks />
          <Logout />
          <Auth />
        </>
      )}
    </section>
  );
};

export default Navigation;
