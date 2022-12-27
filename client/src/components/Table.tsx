import dragIcon from '../assets/img/drag.svg';
import deleteIcon from '../assets/img/delete-icon.svg';

export const Table = () => {
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
        <div className="table-body__row table-row ingredient-group">
          <div className="table-row__drag-block">
            <img src={dragIcon} alt="drag-icon" />
          </div>
          <div className="table-row__checkbox">
            <label className="checkbox-container">
              <input type="checkbox" className="checkbox-container__input" />
              <span className="checkbox-container__checkmark"></span>
            </label>
          </div>
          <div className="table-row__title">Соус</div>
          <div className="table-row__weight">12</div>
          <div className="table-row__kcal">130 </div>
          <div className="table-row__annotation">без примечания</div>
          <div className="table-row__delete-button">
            <img src={deleteIcon} alt="delete-icon" />
          </div>
        </div>
        <div className="table-body__row table-row ingredient-nested">
          <div className="table-row__drag-block">
            <img src={dragIcon} alt="drag-icon" />
          </div>
          <div className="table-row__checkbox">
            <label className="checkbox-container">
              <input type="checkbox" className="checkbox-container__input" />
              <span className="checkbox-container__checkmark"></span>
            </label>
          </div>
          <div className="table-row__title">Кетчуп</div>
          <div className="table-row__weight">12</div>
          <div className="table-row__kcal">130 </div>
          <div className="table-row__annotation">Uncle Benz, Махеев или аналоги...</div>
          <div className="table-row__delete-button">
            <img src={deleteIcon} alt="delete-icon" />
          </div>
        </div>
        <div className="table-body__row table-row ingredient-nested">
          <div className="table-row__drag-block">
            <img src={dragIcon} alt="drag-icon" />
          </div>
          <div className="table-row__checkbox">
            <label className="checkbox-container">
              <input type="checkbox" className="checkbox-container__input" />
              <span className="checkbox-container__checkmark"></span>
            </label>
          </div>
          <div className="table-row__title">Майонез</div>
          <div className="table-row__weight">12</div>
          <div className="table-row__kcal">130 </div>
          <div className="table-row__annotation">calve</div>
          <div className="table-row__delete-button">
            <img src={deleteIcon} alt="delete-icon" />
          </div>
        </div>
        <div className="table-body__row table-row ingredient">
          <div className="table-row__drag-block">
            <img src={dragIcon} alt="drag-icon" />
          </div>
          <div className="table-row__checkbox">
            <label className="checkbox-container">
              <input type="checkbox" className="checkbox-container__input" />
              <span className="checkbox-container__checkmark"></span>
            </label>
          </div>
          <div className="table-row__title">Салатный лист</div>
          <div className="table-row__weight">12</div>
          <div className="table-row__kcal">130 </div>
          <div className="table-row__annotation">айсберг</div>
          <div className="table-row__delete-button">
            <img src={deleteIcon} alt="delete-icon" />
          </div>
        </div>
        <div className="table-body__row table-row ingredient">
          <div className="table-row__drag-block">
            <img src={dragIcon} alt="drag-icon" />
          </div>
          <div className="table-row__checkbox">
            <label className="checkbox-container">
              <input type="checkbox" className="checkbox-container__input" />
              <span className="checkbox-container__checkmark"></span>
            </label>
          </div>
          <div className="table-row__title">Помидор</div>
          <div className="table-row__weight">12</div>
          <div className="table-row__kcal">130 </div>
          <div className="table-row__annotation"></div>
          <div className="table-row__delete-button">
            <img src={deleteIcon} alt="delete-icon" />
          </div>
        </div>
        <div className="table-body__row table-row ingredient-group">
          <div className="table-row__drag-block">
            <img src={dragIcon} alt="drag-icon" />
          </div>
          <div className="table-row__checkbox">
            <label className="checkbox-container">
              <input type="checkbox" className="checkbox-container__input" />
              <span className="checkbox-container__checkmark"></span>
            </label>
          </div>
          <div className="table-row__title">Котлета</div>
          <div className="table-row__weight">12</div>
          <div className="table-row__kcal">130 </div>
          <div className="table-row__annotation">текст</div>
          <div className="table-row__delete-button">
            <img src={deleteIcon} alt="delete-icon" />
          </div>
        </div>
        <div className="table-body__row table-row ingredient-nested">
          <div className="table-row__drag-block">
            <img src={dragIcon} alt="drag-icon" />
          </div>
          <div className="table-row__checkbox">
            <label className="checkbox-container">
              <input type="checkbox" className="checkbox-container__input" />
              <span className="checkbox-container__checkmark"></span>
            </label>
          </div>
          <div className="table-row__title">Фарш говяжий</div>
          <div className="table-row__weight">12</div>
          <div className="table-row__kcal">130 </div>
          <div className="table-row__annotation">разморож.</div>
          <div className="table-row__delete-button">
            <img src={deleteIcon} alt="delete-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};