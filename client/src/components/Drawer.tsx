import burgersFactoryLabel from '../assets/img/burgers-factory-label-2.png';
import chevronDownActive from '../assets/img/chevron-down-active.svg';
import collapse from '../assets/img/collapse.svg';

export const Drawer = () => {
  return (
    <div className="drawer">
      <div className="label-img">
        <img src={burgersFactoryLabel} alt="burgers-factory-label" />
      </div>
      <div className="label-text">
        Добро пожаловать <br/>
        в “Фабрику бургеров”
      </div>
      <div className="menu">
        <div className="dish">
          <div className="dish__title">
            <img src={chevronDownActive} alt="chevron-down" />
            <span>Сендвичи</span>
          </div>
          <ul className="dish-variants">
            <li className="dish-variants__item dish-variants__item_active">
              <a href="#">
                Классический
              </a>
            </li>
            <li className="dish-variants__item">
              <a href="#">
                С сыром
              </a>
            </li>
            <li className="dish-variants__item">
              <a href="#">
                С беконом
              </a>
            </li>
            <li className="dish-variants__item">
              <a href="#">
                С острым перцем
              </a>
            </li>
          </ul>
        </div>
        <div className="dish">
          <div className="dish__title">
            <img src={chevronDownActive} alt="chevron-down" />
            <span>Бургеры</span>
          </div>
          <ul className="dish-variants">
            <li className="dish-variants__item">
              <a href="#">
                Классический
              </a>
            </li>
            <li className="dish-variants__item">
              <a href="#">
                Чизбургер
              </a>
            </li>
            <li className="dish-variants__item">
              <a href="#">
                Биг Мак
              </a>
            </li>
            <li className="dish-variants__item">
              <a href="#">
                Биг Тейсти
              </a>
            </li>
          </ul>
        </div>
        <div className="dish">
          <div className="dish__title">
            <img src={chevronDownActive} alt="chevron-down" />
            <span>Багет</span>
          </div>
          <ul className="dish-variants">
            <li className="dish-variants__item">
              <a href="#">
                С ветчиной
              </a>
            </li>
            <li className="dish-variants__item">
              <a href="#">
                С пастрами
              </a>
            </li>
            <li className="dish-variants__item">
              <a href="#">
                Чесночный
              </a>
            </li>
            <li className="dish-variants__item">
              <a href="#">
                С перцем-гриль
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img className="collapse-button" src={collapse} alt="collapse" />
    </div>
  );
};