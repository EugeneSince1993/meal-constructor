import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="header-menu">
          <li className="header-menu__item header-menu__item_active">
            <NavLink to="/recipes">Рецепты</NavLink>
          </li>
          <li className="header-menu__item">
            <NavLink to="/pricelist">Прайс-лист</NavLink>
          </li>
          <li className="header-menu__item">
            <NavLink to="/combosets">Комбо-наборы</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};