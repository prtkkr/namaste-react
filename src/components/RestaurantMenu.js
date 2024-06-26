import { useParams } from 'react-router-dom';
import { IMG_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import useGetRestaurantMenu from '../utils/useGetRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import RestaurantNestedCategory from './RestaurantNestedCategory';
import { useState } from 'react';

// To display Restaurant Menu List
const RestaurantMenu = () => {
  // Get Restaurant Id passed in url
  const params = useParams();
  // Fetch Restaurant Menu
  const menuData = useGetRestaurantMenu(params.id);
  // State Variable to Toggle Menu List
  const [showMenuIndex, setShowMenuIndex] = useState(0);

  if (!menuData) return <Shimmer />;

  //Restaurant Details
  const { avgRatingString, cloudinaryImageId, costForTwoMessage, cuisines, name, sla, totalRatingsString } =
    menuData?.data?.cards[2]?.card?.card?.info;
  // Restaurant Menu Details
  const { cards } = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  // Filtering Food Categories from above Response
  const foodCategory = cards.filter((category) => category?.card?.card?.['@type'].includes('ItemCategory'));

  return (
    <div className="w-9/12 border border-gray-500 mx-auto p-4">
      {/* Restaurant Details */}
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-2xl mb-0">{name}</h1>
          <p className="text-sm mb-2">{cuisines.join(', ')}</p>
          <p className="mb-2">{costForTwoMessage}</p>
          <p className="mb-2">🛵 {sla.deliveryTime} minutes</p>
          <p>
            ⭐️ {avgRatingString} - {totalRatingsString}
          </p>
        </div>
        <div className="w-32">
          <img alt="restaurant-logo" src={IMG_URL + '/' + cloudinaryImageId}></img>
        </div>
      </div>
      {/* Restaurant Menu List */}
      <div className="border border-rose-200 mt-5 px-4 pt-4">
        {foodCategory.map((category, index) => {
          if (category.card.card['@type'].includes('NestedItemCategory')) {
            const { categories, title } = category?.card?.card;
            return (
              <RestaurantNestedCategory
                data={category}
                key={title}
                showItems={index === showMenuIndex && true}
                setCategoryIndex={() => setShowMenuIndex(index)}
              />
            );
          } else
            return (
              <RestaurantCategory
                data={category.card.card}
                key={category?.card?.card?.title}
                showItems={index === showMenuIndex && true}
                setCategoryIndex={() => setShowMenuIndex(index)}
              />
            );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
