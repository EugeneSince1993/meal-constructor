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
      <div className="table__body">
        <div className="table__row table-row">
          <div className="table-row__drag-block"></div>
          <div className="table-row__checkbox"></div>
          <div className="table-row__title"></div>
          <div className="table-row__weight"></div>
          <div className="table-row__kcal"></div>
          <div className="table-row__annotation"></div>
        </div>
      </div>
    </div>
  );
};