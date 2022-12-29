import { FC } from "react";
import { Link } from "react-router-dom";

export const Recipes: FC = () => {
  return (
    <div className="recipes">
      <h3>Рецепты</h3>
      <Link to="/recipes/recipe" style={{cursor: 'pointer'}}>Классический</Link>
    </div>
  );
};
