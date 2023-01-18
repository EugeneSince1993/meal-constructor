import { FC, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { ArrTableIngredient, ITableIngredient } from '../types';
import { IngredientForm } from './IngredientForm';
import { TableRow } from './TableRow';

interface ITableProps {
  recipeBlock: ArrTableIngredient;
  setRecipeBlock: (param: any) => void;
  editingEnabled: boolean;
  setEditingEnabled: (param: any) => void;
}

export const Table: FC<ITableProps> = ({ 
  recipeBlock, 
  setRecipeBlock, 
  editingEnabled, 
  setEditingEnabled 
}) => {
  const deleteIngredient = (index: number) => {
    setRecipeBlock(recipeBlock.filter((el: ITableIngredient, idx: number) => {
      return idx !== index;
    }));
  };

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setRecipeBlock((prevCards: ArrTableIngredient) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    );
  }, []);

  const renderCard = useCallback((ingredient: ITableIngredient, index: number) => {
    return (
      <TableRow 
        key={ingredient.id}
        index={index}
        id={ingredient.id}
        moveCard={moveCard}
        ingredient={ingredient} 
        deleteIngredient={deleteIngredient}
        setRecipeBlock={setRecipeBlock}
        recipeBlock={recipeBlock}
      />
    );
  }, []);

  return (
    <div className="table">
      <DndProvider backend={HTML5Backend}>
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
          {recipeBlock.map((ingredient, index) => {
            return renderCard(ingredient, index);
          })}
          <IngredientForm 
            setEditingEnabled={setEditingEnabled}
            editingEnabled={editingEnabled}
            recipeBlock={recipeBlock}
            setRecipeBlock={setRecipeBlock}
          />
        </div>
      </DndProvider>
    </div>
  );
};