import { FC, ReactNode } from 'react';
import { Droppable } from 'react-beautiful-dnd';

interface IDropProps {
  id: string;
  children: ReactNode;
}

export const Drop: FC<IDropProps> = ({ id, ...props }) => {
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => {
        return (
          <div 
            ref={provided.innerRef}
            className={
              snapshot.isDraggingOver ? "droppable dropping" : "droppable"
            } 
            {...provided.droppableProps} 
            {...props}
          >
            {props.children}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};