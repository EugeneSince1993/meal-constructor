import { FC, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { ArrTableIngredient, ITableIngredient } from '../types';
import { IngredientForm } from './IngredientForm';
// import { TableRow } from './TableRow';

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
  // const [cardList, setCardList] = useState([
  //   {id: 1, order: 3, text: 'КАРТОЧКА 3'},
  //   {id: 2, order: 1, text: 'КАРТОЧКА 1'},
  //   {id: 3, order: 2, text: 'КАРТОЧКА 2'},
  //   {id: 4, order: 4, text: 'КАРТОЧКА 4'},
  // ]);

  // const [currentCard, setCurrentCard] = useState<any>(null);

  // const deleteIngredient = (index: number) => {
  //   setRecipeBlock(recipeBlock.filter((el: ITableIngredient, idx: number) => {
  //     return idx !== index;
  //   }));
  // };

  // function dragStartHandler (e: DragEvent<HTMLDivElement>, card: any) {
  //   console.log("drag", card);
  //   setCurrentCard(card);
  // }

  // function dragLeaveHandler (e: DragEvent<HTMLDivElement>) {
  //   (e.target as HTMLDivElement).style.background = "white";
  // }

  // function dragEndHandler (e: DragEvent<HTMLDivElement>) {

  // }

  // function dragOverHandler (e: DragEvent<HTMLDivElement>) {
  //   e.preventDefault();
  //   (e.target as HTMLDivElement).style.background = "lightgray";
  // }

  // function dropHandler (e: DragEvent<HTMLDivElement>, card: any) {
  //   e.preventDefault();
  //   setCardList(cardList.map(c => {
  //     if (c.id === card.id) {
  //       return {...c, order: currentCard.order};
  //     }
  //     if (c.id === currentCard.id) {
  //       return {...c, order: card.order};
  //     }
  //     return c;
  //   }));
  //   (e.target as HTMLDivElement).style.background = "white";
  // }

  // function sortCards (a: any, b: any) {
  //   if (a.order > b.order) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // }

  // ver 2

    // using useCallback is optional
    const onBeforeCapture = useCallback(() => {
      /*...*/
    }, []);
    const onBeforeDragStart = useCallback(() => {
      /*...*/
    }, []);
    const onDragStart = useCallback(() => {
      /*...*/
    }, []);
    const onDragUpdate = useCallback(() => {
      /*...*/
    }, []);
    const onDragEnd = useCallback(() => {
      // the only one that is required
    }, []);

  const finalSpaceCharacters = [
    {
      id: 0,
      name: "Dart Vader",
      thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Star_Wars_-_Darth_Vader.jpg/274px-Star_Wars_-_Darth_Vader.jpg"
    },
    {
      id: 1,
      name: "Yoda",
      thumb: "https://static.wikia.nocookie.net/rustarwars/images/d/d6/Yoda_SWSB.png"
    },
    {
      id: 2,
      name: "Dooku",
      thumb: "https://static.wikia.nocookie.net/starwars/images/b/b8/Dooku_Headshot.jpg"
    }
  ];

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
        {/* {recipeBlock.map((ingredient, index) => {
          return (
            <TableRow 
              ingredient={ingredient} 
              deleteIngredient={deleteIngredient}
              index={index}
              key={index}
              setRecipeBlock={setRecipeBlock}
              recipeBlock={recipeBlock}
            />
          );
        })} */}
        {/* {cardList.sort(sortCards).map((card, index) => {
          return (
            <div 
              draggable={true}
              onDragStart={(e: DragEvent<HTMLDivElement>) => dragStartHandler(e, card)}
              onDragLeave={(e: DragEvent<HTMLDivElement>) => dragLeaveHandler(e)}
              onDragEnd={(e: DragEvent<HTMLDivElement>) => dragEndHandler(e)}
              onDragOver={(e: DragEvent<HTMLDivElement>) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e, card)}
              style={{
                width: "200px",
                height: "300px",
                borderRadius: "12px",
                border: "5px solid",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px",
                cursor: "grab"
              }} 
              key={index}
            >
              {card.text}
            </div>
          );
        })} */}

        <DragDropContext
          onBeforeCapture={onBeforeCapture}
          onBeforeDragStart={onBeforeDragStart}
          onDragStart={onDragStart}
          onDragUpdate={onDragUpdate}
          onDragEnd={onDragEnd}
        >
          <Droppable droppableId="characters">
            {(provided) => (
              <ul 
                className="characters"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {finalSpaceCharacters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable 
                      key={index} 
                      draggableId={`draggable-${id.toString()}`} 
                      index={index}
                    >
                      {(provided) => (
                        <li 
                          ref={provided.innerRef}
                          style={{
                            display: "flex",
                            marginBottom: "15px"
                          }}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <img 
                            src={thumb} 
                            style={{
                              display: "block",
                              width: "100px",
                              marginRight: "20px"
                            }} 
                          />
                          <div>{name}</div>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>

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