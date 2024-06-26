import RestaurantCategory from './RestaurantCategory';

// To display Nested Category Data
const RestaurantNestedCategory = (props) => {
  const { data, showItems, setCategoryIndex } = props;
  const { categories, title } = data?.card?.card;

  return (
    <div className="mt-2">
      <h1 className="text-lg font-bold">{title}</h1>
      {categories.map((category) => (
        <RestaurantCategory
          key={category.title}
          data={category}
          showItems={showItems}
          setCategoryIndex={setCategoryIndex}
        />
      ))}
      <div className="h-4 mb-2 bg-gray-200"></div>
    </div>
  );
};

export default RestaurantNestedCategory;
