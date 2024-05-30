import { Link } from 'react-router-dom';
import { IMG_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { id, name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } = props?.resData?.info;
  return (
    <Link className="res-card" to={`/restaurant/${id}`}>
      <img alt="restaurant-logo" src={`${IMG_URL}/${cloudinaryImageId}`}></img>
      <h4>{name}</h4>
      <p>{cuisines.join(', ')}</p>
      <p>{avgRating} ⭐️</p>
      <p>{costForTwo}</p>
      <p>⏳{sla.deliveryTime} minutes</p>
    </Link>
  );
};

export default RestaurantCard;
