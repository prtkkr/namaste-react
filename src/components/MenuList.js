import { DEFAULT_IMG_URL, IMG_URL } from '../utils/constants';

// To display List of Food Items under each Category
const MenuList = (props) => {
  const { name, description, imageId, price, defaultPrice } = props?.data?.card?.info;
  return (
    <div className="my-3 p-3 border-b-2 border-gray-400 rounded-md flex justify-between">
      <div className="w-10/12">
        <p className="text-base font-semibold mb-0">{name}</p>
        <p className="mt-0 text-sm">₹ {price ? price / 100 : defaultPrice / 100}</p>
        <p className="text-gray-600 text-md">{description}</p>
      </div>
      <div className="w-36">
        <div className="absolute">
          <button className="bg-black text-white font-semibold px-7 py-2 rounded-lg active:bg-sky-950 shadow-md ml-8 mt-24">
            Add
          </button>
        </div>
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
