import { userState } from '@/app/Models/Auth';
import Calc from './Calc';
import ShopList from './ShopList';
import ShopTitle from './ShopTitle';
import ShopEmpty from './ShopEmpty';
interface ShopProps {
  user: userState;
}
const Shop: React.FC<ShopProps> = ({ user }) => {
  // Total Price
  const totalPrice: Number = user.savedCourse.reduce((help, { price }) => {
    return (help += Number(price));
  }, 0);
  // Return JSX
  return (
    <div className="flex flex-col space-y-7">
      {user.savedCourse.length === 0 ? (
        <ShopEmpty />
      ) : (
        <>
          <ShopTitle />
          <ShopList user={user} />
          <Calc totalPrice={totalPrice} />
        </>
      )}
    </div>
  );
};

export default Shop;
