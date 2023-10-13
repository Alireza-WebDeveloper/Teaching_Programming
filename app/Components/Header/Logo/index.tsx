import * as Icons from 'react-icons/pi';
import Link from 'next/link';
const Logo = () => {
  return (
    <section>
      <Link href={'/'}>
        <Icons.PiDevToLogo size="2rem" />
      </Link>
    </section>
  );
};

export default Logo;
