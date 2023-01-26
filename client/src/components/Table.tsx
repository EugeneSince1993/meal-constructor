import { FC, useCallback, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { Group, Ingredient, IRecipeBlock, IRecipeData } from '../types';
import { IngredientForm } from './IngredientForm';
import { TableRow } from './TableRow';

interface ITableProps {
  recipeBlock: IRecipeBlock;
  recipeData: IRecipeData;
  setRecipeData: (cb: (recipeData: IRecipeData) => IRecipeData) => void;
  editingEnabled: boolean;
  setEditingEnabled: (param: any) => void;
}

export const Table: FC<ITableProps> = ({ 
  recipeBlock, 
  recipeData,
  setRecipeData,
  editingEnabled, 
  setEditingEnabled 
}) => {
  const deleteIngredient = (index: number) => {
    recipeBlock.items.filter((item: Ingredient | Group, idx: number) => {
      return idx !== index;
    });

    setRecipeData((prevRecipeData: IRecipeData) => {
      return {
        ...prevRecipeData,
        recipeBlocks: [
          ...prevRecipeData.recipeBlocks,
          recipeBlock
        ]
      };
    });
  };

  const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
    recipeBlock.items = update(recipeBlock.items, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, recipeBlock.items[dragIndex] as Ingredient | Group]
      ],
    });

    // const newRecipeBlocks = recipeData.recipeBlocks.map();
    // stopped here 

    setRecipeData((prevRecipeData: IRecipeData) => {
      return {
        ...prevRecipeData,
        // recipeBlocks: [
        //   ...prevRecipeData.recipeBlocks,
        //   recipeBlock
        // ]

      };
    });
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
        recipeData={recipeData}
        setRecipeData={setRecipeData}
      />
    );
  }, []);

  useEffect(() => {
    console.log(recipeData);
  }, [recipeData]);

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
            recipeData={recipeData}
            setRecipeData={setRecipeData}
          />
        </div>
      </DndProvider>
    </div>
  );
};