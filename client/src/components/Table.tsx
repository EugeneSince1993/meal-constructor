import { FC } from 'react';
import { ArrTableIngredient, ITableIngredient } from '../types';
import { IngredientForm } from './IngredientForm';
import { List } from './List';

interface ITableProps {
  recipeBlock: ArrTableIngredient;
  setRecipeBlock: (param: any) => void;
  editingEnabled: boolean;
  setEditingEnabled: (param: any) => void;
  isDrawerPutAway: boolean;
}

export const Table: FC<ITableProps> = ({ 
  recipeBlock, 
  setRecipeBlock, 
  editingEnabled, 
  setEditingEnabled,
  isDrawerPutAway
}) => {
  const deleteIngredient = (index: number) => {
    setRecipeBlock(recipeBlock.filter((el: ITableIngredient, idx: number) => {
      return idx !== index;
    }));
  };

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
        <List 
          recipeBlock={recipeBlock}
          setRecipeBlock={setRecipeBlock}
          deleteIngredient={deleteIngredient}
          isDrawerPutAway={isDrawerPutAway}
        />
        <IngredientForm 
          setEditingEnabled={setEditingEnabled}
          editingEnabled={editingEnabled}
          recipeBlock={recipeBlock}
          setRecipeBlock={setRecipeBlock}
        />
      </div>
    </div>
  );
};