import { userState } from '@/app/Models/Auth';
import ShopItem from '../ShopItem';
interface ShopListProps {
  user: userState;
}
const ShopList: React.FC<ShopListProps> = ({ user }) => {
  const { savedCourse } = user;
  const ShopItems = () => {
    return savedCourse.map((course) => {
      return <ShopItem key={course._id} course={course} />;
    });
  };
  return <div className="flex flex-col space-y-4">{ShopItems()}</div>;
};

export default ShopList;
