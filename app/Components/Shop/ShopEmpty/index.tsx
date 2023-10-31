import Link from 'next/link';
import * as Icons from 'react-icons/md';
const ShopEmpty = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Icons.MdShoppingCart size="7rem" />
      <p className="text-4xl font-bold">
        your cart is <span className="text-red-600">empty!</span>
      </p>
      <p className="text-xl">
        must add course on the cart before you proceed to check out
      </p>
      <Link href={'/'}>
        <button className="px-6 capitalize text-white py-3 rounded-full text-xl font-bold bg-pink-800 dark:text-black dark:bg-pink-400">
          return to main
        </button>
      </Link>
    </div>
  );
};

export default ShopEmpty;
