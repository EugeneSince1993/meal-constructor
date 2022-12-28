import classNames from 'classnames';
import { FC } from 'react';
import burgersFactoryLabel from '../assets/img/burgers-factory-label-2.png';
import { Collapsible } from './Collapsible';

interface IDrawerProps {
  isDrawerClosed: boolean;
}

export const Drawer: FC<IDrawerProps> = ({ isDrawerClosed }) => {

  return (
    <div className={classNames({
      "drawer": true,
      "drawer_closed": isDrawerClosed
    })}>
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
    </div>
  );
};