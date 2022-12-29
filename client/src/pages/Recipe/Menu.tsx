import { NavLink } from "react-router-dom";

export const RecipeMenu = () => {
  return (
    <div className="recipe-menu">
      <nav>
        <ul className="recipe-menu-list">
          <li className="recipe-menu-list__item recipe-menu-list-item recipe-menu-list__item_active">
            <NavLink to="/recipes/recipe">Рецепт</NavLink>
            <div className="recipe-menu-list-item__border-bottom"></div>
          </li>
          <li className="recipe-menu-list__item recipe-menu-list-item">
            <NavLink to="/recipes/cooking-time">Время приготовления</NavLink>
          </li>
          <li className="recipe-menu-list__item recipe-menu-list-item">
            <NavLink to="/recipes/serving">Подача</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};