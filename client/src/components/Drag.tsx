import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ArrTableIngredient, ITableIngredient } from '../types';
import { TableRow } from './TableRow';

interface IDragProps {
  id: string;
  index: number;
  ingredient: ITableIngredient;
  deleteIngredient: (index: number) => void;
  recipeBlock: ArrTableIngredient;
  setRecipeBlock: (param: any) => void;
}

export const Drag: FC<IDragProps> = ({ 
  id, 
  index, 
  ingredient,
  deleteIngredient,
  recipeBlock,
  setRecipeBlock
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
        return (
          <div 
            ref={provided.innerRef} 
            className={snapshot.isDragging ? "draggable dragging" : "draggable"}
            {...provided.draggableProps} 
          >
            <TableRow 
              key={ingredient.id}
              index={index}
              ingredient={ingredient} 
              deleteIngredient={deleteIngredient}
              setRecipeBlock={setRecipeBlock}
              recipeBlock={recipeBlock}
              dragHandle={provided.dragHandleProps}
            />
          </div>
        )
      }}
    </Draggable>
  );
};