import { IMG_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } = props?.resData?.info;
  return (
    <div className="res-card">
      <img src={`${IMG_URL}/${cloudinaryImageId}`}></img>
      <h4>{name}</h4>
      <p>{cuisines.join(', ')}</p>
      <p>{avgRating} ⭐️</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
