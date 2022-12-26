import deleteButton from '../../assets/img/delete-button.svg';
import plusWhite from '../../assets/img/plus-white.svg';
import plusRed from '../../assets/img/plus-red.svg';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';

export const RecipeBlock = () => {
  return (
    <div className="recipe-block">
      <div className="recipe-block__heading">
        <h4>Начинка</h4>
        <img src={deleteButton} alt="delete" />
      </div>
      <div className="recipe-block__buttons">
        <Button variant="outlined">
          <img src={plusRed} alt="plus" />
          <span>Ингредиент</span>
        </Button>
        <Button variant="outlined">
          <img src={plusRed} alt="plus" />
          <span>Группа</span>
        </Button>
      </div>
      <Table />
    </div>
  );
};