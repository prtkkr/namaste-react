import { useSelector } from 'react-redux';
import MenuList from './MenuList';

const Cart = () => {
  // Retrieve Items from Store
  const itemList = useSelector((store) => store.cart.items);
  console.log(itemList);
  return (
    <div className="w-6/12 m-auto mt-4 p-4">
      <div className="text-center">
        <h1 className="font-bold text-xl">Cart</h1>
        <hr />
      </div>
      <div>
        {itemList.map((item) => (
          <MenuList key={item?.card?.info?.id} data={item} viewAddButton={false} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
