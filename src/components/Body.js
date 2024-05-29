import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { SWIGGY_URL } from '../utils/constants';
import Shimmer from './Shimmer';

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [orgRestaurantsList, setOrgRestaurantsList] = useState([]);
  const [searchText, setSearchText] = useState('');

  console.log(orgRestaurantsList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await fetch(SWIGGY_URL);
    let jsonData = await response.json();
    let list1 = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    let list2 = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    let list3 = jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    let list4 = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setOrgRestaurantsList(list1?.length ? list1 : list2?.length ? list2 : list3?.length ? list3 : list4);
    setRestaurantsList(list1?.length ? list1 : list2?.length ? list2 : list3?.length ? list3 : list4);
  };

  return !restaurantsList.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filters">
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              let filteredList = orgRestaurantsList.filter((x) => x.info.avgRating >= 4.4);
              setRestaurantsList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
          <input
            type="search"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            onClick={() => {
              let filteredList = orgRestaurantsList.filter((x) =>
                x.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setRestaurantsList(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <h3 className="container-title">Top Restaurants Near You</h3>
      <div className="res-container">
        {restaurantsList.map((res) => (
          <RestaurantCard resData={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
