import chevronRight from '../assets/img/chevron-right.svg';

export const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <a className="breadcrumbs__link" href="#">Рецепты</a>
      <img src={chevronRight} alt="chevron-right" />
      <a className="breadcrumbs__link" href="#">Бургеры</a>
      <img src={chevronRight} alt="chevron-right" />
      <a className="breadcrumbs__link breadcrumbs__link_active" href="#">Классический</a>
    </div>
  );
};