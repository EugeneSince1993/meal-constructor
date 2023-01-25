import { FC, useCallback, useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { Group, Ingredient, IRecipeBlock, RecipeBlocksArr } from '../types';
import { IngredientForm } from './IngredientForm';
import { TableRow } from './TableRow';

interface ITableProps {
  recipeBlock: IRecipeBlock;
  setRecipeBlock: (recipeBlock: IRecipeBlock) => void;
  recipeBlocks: RecipeBlocksArr;
  setRecipeBlocks: (recipeBlocks: RecipeBlocksArr) => void;
  editingEnabled: boolean;
  setEditingEnabled: (param: any) => void;
}

export const Table: FC<ITableProps> = ({ 
  recipeBlock, 
  setRecipeBlock, 
  recipeBlocks,
  setRecipeBlocks,
  editingEnabled, 
  setEditingEnabled 
}) => {
  const recBlockObj: IRecipeBlock = recipeBlock;

  const [items, setItems] = useState<(Ingredient | Group)[]>(recipeBlock.items);

  const deleteIngredient = (index: number) => {
    recBlockObj.items.filter((item: Ingredient | Group, idx: number) => {
      return idx !== index;
    });

    setRecipeBlock(recBlockObj);
  };

  const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
    update(recBlockObj.items, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, recBlockObj.items[dragIndex]]
      ],
    });

    setRecipeBlock(recBlockObj);

    setCards((prevCards: Item[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as Item],
        ],
      }),
    )
  }, []);

  const renderItem = useCallback((item: Ingredient | Group, index: number) => {
    return (
      <TableRow 
        key={item.id}
        index={index}
        id={item.id}
        moveItem={moveItem}
        item={item} 
        deleteIngredient={deleteIngredient}
        recipeBlock={recipeBlock}
        setRecipeBlock={setRecipeBlock}
        recipeBlocks={recipeBlocks}
        setRecipeBlocks={setRecipeBlocks}
      />
    );
  }, []);

  useEffect(() => {
    const recBlocksArr = recipeBlocks;
    setRecipeBlocks(recBlocksArr);
  }, [recipeBlock]);

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
          {recipeBlock.items.map((item: Ingredient | Group, index: number) => {
            return renderItem(item, index);
          })}
          <IngredientForm 
            setEditingEnabled={setEditingEnabled}
            editingEnabled={editingEnabled}
            recipeBlock={recipeBlock}
            setRecipeBlock={setRecipeBlock}
            recipeBlocks={recipeBlocks}
            setRecipeBlocks={setRecipeBlocks}
          />
        </div>
      </DndProvider>
    </div>
  );
};