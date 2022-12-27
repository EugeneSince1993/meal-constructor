import { FC } from 'react';
import dragIcon from '../assets/img/drag.svg';
import deleteIcon from '../assets/img/delete-icon.svg';
import { ITableIngredient } from '../types';

interface ITableProps {
  ingredients: Array<ITableIngredient>;
}

export const Table: FC<ITableProps> = ({ ingredients }) => {
  return (
    <div className="table">
      <div className="table__header table-header">
        <div className="table-header__empty-block"></div>
        <div className="table-header__checkbox">
          <label className="checkbox-container">
            <input type="checkbox" className="checkbox-container__input" />
            <span className="checkbox-container__checkmark"></span>
          </label>
        </div>
        <div className="table-header__title">Название</div>
        <div className="table-header__weight">Вес</div>
        <div className="table-header__kcal">Ккал</div>
        <div className="table-header__annotation">Примечание</div>
      </div>
      <div className="table__body table-body">
        {
          ingredients.map((ingredient, index) => {
            return (
              <div className="table-body__row table-row ingredient" key={index}>
                <div className="table-row__drag-block">
                  <img src={dragIcon} alt="drag-icon" />
                </div>
                <div className="table-row__checkbox">
                  <label className="checkbox-container">
                    <input type="checkbox" className="checkbox-container__input" />
                    <span className="checkbox-container__checkmark"></span>
                  </label>
                </div>
                <div className="table-row__title">{ingredient.name}</div>
                <div className="table-row__weight">{ingredient.weight}</div>
                <div className="table-row__kcal">{ingredient.kcal}</div>
                <div className="table-row__annotation">{ingredient.annotation}</div>
                <div className="table-row__delete-button">
                  <img src={deleteIcon} alt="delete-icon" />
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};