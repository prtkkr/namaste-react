import { useEffect, useState } from 'react';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { SWIGGY_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [orgRestaurantsList, setOrgRestaurantsList] = useState([]);
  const [searchText, setSearchText] = useState('');

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

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  return !restaurantsList.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="p-5 flex justify-between items-baseline">
        <button
          className="bg-green-300 px-3 py-2 rounded-lg"
          onClick={() => {
            let filteredList = orgRestaurantsList.filter((x) => x.info.avgRating >= 4.4);
            setRestaurantsList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <input
            className="w-72 p-1 mr-5 border-2 border-gray-400 border-spacing-3 rounded-lg"
            type="search"
            placeholder="enter restaurant name"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="bg-green-300 px-3 py-2 rounded-lg"
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
      <h3 className="mt-4 p-4 text-lg font-bold">Top Restaurants Near You</h3>
      <div className="px-4 flex flex-wrap">
        {restaurantsList.map((res) => (
          <Link
            className="w-[310px] p-3 mx-3 mb-4 border border-gray-300 rounded-lg bg-gray-100 hover:bg-gray-200 shadow-md"
            key={res.info.id}
            to={`/restaurant/${res.info.id}`}
          >
            {res.info.isOpen ? <PromotedRestaurantCard resData={res} /> : <RestaurantCard resData={res} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
