import { FC, useState } from 'react';
import { ArrTableIngredient, ITableIngredient } from '../../types';
import deleteIcon from '../../assets/img/delete-icon.svg';
import plusRed from '../../assets/img/plus-red.svg';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';

interface IRecipeBlockProps {
  name: string;
  recipeBlock: ArrTableIngredient;
  setRecipeBlock: (param: any) => void;
}

export const RecipeBlock: FC<IRecipeBlockProps> = ({ 
  name, recipeBlock, setRecipeBlock 
}) => {
  const [editingEnabled, setEditingEnabled] = useState<boolean>(false);

  return (
    <div className="recipe-block">
      <div className="recipe-block__heading">
        <h4>{name}</h4>
        <img src={deleteIcon} alt="delete" />
      </div>
      <div className="recipe-block__buttons">
        <Button variant="outlined" handler={() => setEditingEnabled(true)}>
          <img src={plusRed} alt="plus" />
          <span>Ингредиент</span>
        </Button>
        <Button variant="outlined">
          <img src={plusRed} alt="plus" />
          <span>Группа</span>
        </Button>
      </div>
      <Table 
        recipeBlock={recipeBlock} 
        setRecipeBlock={setRecipeBlock} 
        editingEnabled={editingEnabled}
        setEditingEnabled={setEditingEnabled}
      />
    </div>
  );
};