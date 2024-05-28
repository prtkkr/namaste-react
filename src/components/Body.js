import { useState } from 'react';
import restaurantList from '../utils/mockData';
import RestaurantCard from './RestaurantCard';

const Body = () => {
  let [restaurantsList, setRestaurantsList] = useState(restaurantList);
  return (
    <div className="body">
      <div className="filters">
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              let filteredList = restaurantsList.filter((x) => x.info.avgRating >= 4.4);
              setRestaurantsList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
          {/* <input type="text" name="resName" className="search-input" />
        <button type="submit" className="search-btn">
          Top Rated
        </button> */}
        </div>
      </div>
      <div className="res-container">
        {restaurantsList.map((res) => (
          <RestaurantCard resData={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
