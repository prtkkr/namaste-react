import { Link } from 'react-router-dom';
import { IMG_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { id, name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } = props?.resData?.info;
  return (
    <>
      <div className="h-60 overflow-hidden rounded-lg m-auto">
        <img className="bg-white" alt="restaurant logo" src={`${IMG_URL}/${cloudinaryImageId}`}></img>
      </div>
      <h4 className="mt-3 mb-0 font-bold text-xl">{name}</h4>
      <p className="mt-0 text-sm mb-1">{cuisines.join(', ')}</p>
      <p className="mb-1">{avgRating} ⭐️</p>
      <p className="mb-1">{costForTwo}</p>
      <p className="mb-1">🛵 {sla.deliveryTime} minutes</p>
    </>
  );
};

export default RestaurantCard;

// Higher Order Component => used for enhancement on any component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute">🟢</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
