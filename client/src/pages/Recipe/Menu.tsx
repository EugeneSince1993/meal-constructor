export const RecipeMenu = () => {
  return (
    <div className="recipe-menu">
      <nav>
        <ul className="recipe-menu-list">
          <li className="recipe-menu-list__item recipe-menu-list-item recipe-menu-list__item_active">
            <a href="#">Рецепт</a>
            <div className="recipe-menu-list-item__border-bottom"></div>
          </li>
          <li className="recipe-menu-list__item recipe-menu-list-item">
            <a href="#">Время приготовления</a>
          </li>
          <li className="recipe-menu-list__item recipe-menu-list-item">
            <a href="#">Подача</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};