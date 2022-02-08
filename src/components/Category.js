const Category = ({ category }) => {
  return (
    <div>
      <h2>{category.name}</h2>
      {/* List de produits */}
      {category.meals.map((meal, index) => {
        return (
          <div
            onClick={() => {
              console.log("J'ai cliqué sur le produit ====> ", meal);
            }}
            className="card"
          >
            <h3>{meal.title}</h3>
            <p>{meal.description.slice(0, 50)}...</p>
            {meal.picture && (
              <img style={{ height: 100 }} src={meal.picture} alt="" />
            )}
            <span>{meal.price} €</span>
            {meal.popular && <span>★ Populaire</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Category;
