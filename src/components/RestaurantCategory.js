import { useState } from 'react';
import MenuList from './MenuList';

// To Display Restaurant Menu based on Categories
const RestaurantCategory = (props) => {
  const { data, showItems, setCategoryIndex } = props;
  const { itemCards, title } = data;
  // const [showMenu, setShowMenu] = useState(false);

  const toggleMenuList = () => {
    // setShowMenu(!showMenu);
    setCategoryIndex();
  };

  return (
    <div className="p-3 mb-3 shadow-lg bg-gray-50">
      {/* Category Header */}
      <div className="flex justify-between cursor-pointer" onClick={toggleMenuList}>
        <p className="text-base font-semibold">
          {title} ({itemCards?.length})
        </p>
        <p>
          {showItems ? (
            <span className="font-extrabold">&#8593;</span>
          ) : (
            <span className="font-extrabold">&#8595;</span>
          )}
        </p>
      </div>
      {showItems && <hr className="mt-2 border"></hr>}
      {/* Category List */}
      {showItems && (
        <div>
          {itemCards.map((item) => (
            <MenuList data={item} key={item?.card?.info?.id} viewAddButton={true} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
