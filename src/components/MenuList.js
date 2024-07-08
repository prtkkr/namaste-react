import { useDispatch } from 'react-redux';
import { DEFAULT_IMG_URL, IMG_URL } from '../utils/constants';
import { addItem } from '../store/cartSlice';

// To display List of Food Items under each Category
const MenuList = (props) => {
  const { data, viewAddButton } = props;
  const { name, description, imageId, price, defaultPrice } = data?.card?.info;

  // Calling hook. Hook cannot be called inside method.
  const dispatch = useDispatch();
  // Dispatch Action on Add Button Click
  const onAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="my-3 p-3 border-b-2 border-gray-400 rounded-md flex justify-between">
      <div className="w-10/12">
        <p className="text-base font-semibold mb-0">{name}</p>
        <p className="mt-0 text-sm">₹ {price ? price / 100 : defaultPrice / 100}</p>
        <p className="text-gray-600 text-md">{description}</p>
      </div>
      <div className="w-36">
        {viewAddButton && (
          <div className="absolute">
            <button
              className="bg-black text-white font-semibold px-7 py-2 rounded-lg active:bg-sky-950 shadow-md ml-8 mt-24"
              onClick={() => onAddItem(props?.data)}
            >
              Add
            </button>
          </div>
        )}
        <img
          className="aspect-square rounded-lg static"
          alt={`${name} image`}
          src={imageId ? `${IMG_URL}/${imageId}` : DEFAULT_IMG_URL}
        ></img>
      </div>
    </div>
  );
};

export default MenuList;
