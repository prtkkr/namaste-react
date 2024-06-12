import { Link } from 'react-router-dom';
import { IMG_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { id, name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } = props?.resData?.info;
  return (
    <Link
      className="w-[310px] p-3 mx-3 mb-4 border border-gray-300 rounded-lg bg-gray-100 hover:bg-gray-200 shadow-md"
      to={`/restaurant/${id}`}
    >
      <div className="h-60 overflow-hidden rounded-lg m-auto">
        <img className="bg-white" alt="restaurant logo" src={`${IMG_URL}/${cloudinaryImageId}`}></img>
      </div>
      <h4 className="mt-3 mb-0 font-bold text-xl">{name}</h4>
      <p className="mt-0 text-sm mb-1">{cuisines.join(', ')}</p>
      <p className="mb-1">{avgRating} ⭐️</p>
      <p className="mb-1">{costForTwo}</p>
      <p className="mb-1">🛵 {sla.deliveryTime} minutes</p>
    </Link>
  );
};

export default RestaurantCard;
