import burgersFactoryLabel from '../assets/img/burgers-factory-label-2.png';
import collapse from '../assets/img/collapse.svg';
import { Collapsible } from './Collapsible';

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
        <Collapsible title="Сендвичи">
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
        </Collapsible>
        <Collapsible title="Бургеры">
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
        </Collapsible>
        <Collapsible title="Багет">
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
        </Collapsible>
      </div>
      <img className="collapse-button" src={collapse} alt="collapse" />
    </div>
  );
};