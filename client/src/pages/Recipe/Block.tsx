import { FC } from 'react';
import { ITableIngredient } from '../../types';
import deleteIcon from '../../assets/img/delete-icon.svg';
import plusRed from '../../assets/img/plus-red.svg';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';

interface IRecipeBlockProps {
  name: string;
  ingredients: Array<ITableIngredient>;
}

export const RecipeBlock: FC<IRecipeBlockProps> = ({ name, ingredients }) => {
  return (
    <div className="recipe-block">
      <div className="recipe-block__heading">
        <h4>{name}</h4>
        <img src={deleteIcon} alt="delete" />
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
      <Table ingredients={ingredients} />
    </div>
  );
};