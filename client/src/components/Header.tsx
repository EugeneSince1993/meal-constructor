export const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="header-menu">
          <li className="header-menu__item header-menu__item_active">
            <a href="#">Рецепты</a>
          </li>
          <li className="header-menu__item">
            <a href="#">Прайс-лист</a>
          </li>
          <li className="header-menu__item">
            <a href="#">Комбо-наборы</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};