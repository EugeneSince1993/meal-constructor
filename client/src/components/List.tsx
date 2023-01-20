import { FC, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { reorder } from '../utils/helpers';
import { Drop } from './Drop';
import { Drag } from './Drag';
import { ArrTableIngredient } from '../types';

interface IListProps {
  recipeBlock: ArrTableIngredient;
  setRecipeBlock: (param: ArrTableIngredient) => void;
  deleteIngredient: (index: number) => void;
  isDrawerPutAway: boolean;
}

export const List: FC<IListProps> = ({
  recipeBlock,
  setRecipeBlock,
  deleteIngredient,
  isDrawerPutAway
}) => {
  const handleDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const reorderedItems: any = reorder([...recipeBlock], source.index, destination.index);
    setRecipeBlock(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd} >
      <Drop id="droppable-id">
        {recipeBlock.map((ingredient, index) => {
          return (
            <Drag 
              key={ingredient.id} 
              id={ingredient.id.toString()} 
              index={index}
              ingredient={ingredient} 
              deleteIngredient={deleteIngredient}
              setRecipeBlock={setRecipeBlock}
              recipeBlock={recipeBlock}
              isDrawerPutAway={isDrawerPutAway}
            />
          );
        })}
      </Drop>
    </DragDropContext>
  );
};