import RestaurantCategory from './RestaurantCategory';

// To display Nested Category Data
const RestaurantNestedCategory = (props) => {
  const { data, showItems, setCategoryIndex } = props;
  const { categories, title } = data?.card?.card;

  return (
    <div className="mt-4 mb-3">
      <h1 className="text-xl font-bold">{title}</h1>
      {categories.map((category) => (
        <RestaurantCategory
          key={category.title}
          data={category}
          showItems={showItems}
          setCategoryIndex={setCategoryIndex}
        />
      ))}
      <div className="h-4 mb-2 bg-gray-400"></div>
    </div>
  );
};

export default RestaurantNestedCategory;
