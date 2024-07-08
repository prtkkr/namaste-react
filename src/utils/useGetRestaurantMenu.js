import { useEffect, useState } from 'react';
import { MENU_URL } from './constants';

const useGetRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(MENU_URL + resId);
        const jsonData = await response.json();
        setResInfo(jsonData);
        if (!response.ok) throw new Error(response.status);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMenu();
  }, []);
  return resInfo;
};

export default useGetRestaurantMenu;
