import { useParams } from 'react-router-dom';
import { IMG_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import useGetRestaurantMenu from '../utils/useGetRestaurantMenu';

const RestaurantMenu = () => {
  const params = useParams();
  const menuData = useGetRestaurantMenu(params.id);

  if (!menuData) return <Shimmer />;
  //Restaurant Details
  const { avgRatingString, cloudinaryImageId, costForTwoMessage, cuisines, name, sla, totalRatingsString } =
    menuData?.data?.cards[2]?.card?.card?.info;
  // Restaurant Menu Details
  const { title, itemCards } = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //   UI
  return (
    <div className="menu-container">
      <div className="res-detail">
        <div>
          <h1>{name}</h1>
          <p>{cuisines.join(', ')}</p>
          <p>{costForTwoMessage}</p>
          <p>
            ⭐️ {avgRatingString} - {totalRatingsString}
          </p>
          <p>🛵 {sla.deliveryTime} minutes</p>
        </div>
        <div>
          <img alt="restaurant-logo" src={IMG_URL + '/' + cloudinaryImageId}></img>
        </div>
      </div>
      {/* Menu List */}
      <div className="menu-detail">
        <h3>{title}</h3>
        <>
          {itemCards.map((x) => (
            <div key={x.card.info.id}>
              <p>
                {x.card.info.name} - ₹{x.card.info.defaultPrice / 100 || x.card.info.price / 100}
              </p>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default RestaurantMenu;
