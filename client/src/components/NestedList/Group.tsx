import { FC, ReactNode, useEffect, useRef, ChangeEvent, memo, useState, useCallback } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import type { Identifier } from 'dnd-core';
import classNames from 'classnames';
import update from 'immutability-helper';
import { IGroup, Ingredient, IRecipeBlock, IRecipeData } from '../../types';
import { ItemTypes } from '../../utils/ItemTypes';
import dragIcon from '../../assets/img/drag.svg';
import deleteIcon from '../../assets/img/delete-icon.svg';
import { SubIngredient } from './SubIngredient';

export interface GroupProps {
  children?: ReactNode;
  item: IGroup;
  deleteIngredient: (index: number) => void;
  index: number;
  id: number;
  recipeBlock: IRecipeBlock;
  recipeData: IRecipeData;
  setRecipeData: (cb: (recipeData: IRecipeData) => IRecipeData) => void;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
}

export const Group: FC<GroupProps> = memo(function SourceBox({
  children,
  item,
  deleteIngredient,
  index,
  id,
  recipeBlock,
  recipeData,
  setRecipeData,
  moveItem
}) {
  // input logic
  const [name, setName] = useState<string>(item.name);
  const [weight, setWeight] = useState<string | null>(item.weight);
  const [kcal, setKcal] = useState<string | null>(item.kcal);
  const [annotation, setAnnotation] = useState<string | null>(item.annotation);
  
  const [titleInputShown, setTitleInputShown] = useState<boolean>(false);
  const [weightInputShown, setWeightInputShown] = useState<boolean>(false);
  const [kcalInputShown, setKcalInputShown] = useState<boolean>(false);
  const [annotationInputShown, setAnnotationInputShown] = useState<boolean>(false);

  const titleRef = useRef<any>(null);
  const weightRef = useRef<any>(null);
  const kcalRef = useRef<any>(null);
  const annotationRef = useRef<any>(null);

  const handleInfoClick = (e: any) => {
    switch (e.target.className) {
      case 'table-row-title__info':
        setTitleInputShown(true);
        break;
      case 'table-row-weight__info':
        setWeightInputShown(true);
        break;
      case 'table-row-kcal__info': 
        setKcalInputShown(true);
        break;
      case 'table-row-annotation-info':
        setAnnotationInputShown(true);
        break;
    }
  };

  const updateInput = (id: number, propName: string, propValue: string | null) => {
    setRecipeData((prevRecipeData: IRecipeData) => {
      return {
        ...prevRecipeData,
        recipeBlocks: prevRecipeData.recipeBlocks.map((obj: IRecipeBlock) => {
          if (obj.id === recipeBlock.id) {
            return {
              ...obj,
              items: obj.items.map((el: Ingredient | IGroup, idx: number) => {
                if (id === el.id) {
                  return {
                    ...el,
                    [propName]: propValue
                  };
                } else {
                  return el;
                }
              })
            };
          } else {
            return obj;
          }
        })
      };
    });

    switch (propName) {
      case "name":
        setTitleInputShown(false);
        break;
      case "weight":
        setWeightInputShown(false);
        break;
      case "kcal":
        setKcalInputShown(false);
        break;
      case "annotation":
        setAnnotationInputShown(false);
        break;
    }
  };

  useEffect(() => {
    switch (true) {
      case titleInputShown:
        titleRef.current.focus();
        break;
      case weightInputShown:
        weightRef.current.focus();
        break;
      case kcalInputShown:
        kcalRef.current.focus();
        break;
      case annotationInputShown:
        annotationRef.current.focus();
        break;
    }
  }, [titleInputShown, weightInputShown, kcalInputShown, annotationInputShown]);

  useEffect(() => {
    setName(item.name);
    setWeight(item.weight);
    setKcal(item.kcal);
    setAnnotation(item.annotation);
  }, [recipeData]);

  const deleteSubIngredient = (index: number) => {
    setRecipeData((prevRecipeData: IRecipeData) => {
      return {
        ...prevRecipeData,
        recipeBlocks: prevRecipeData.recipeBlocks.map((obj: IRecipeBlock) => {
          if (obj.id === recipeBlock.id) {
            return {
              ...obj,
              items: obj.items.map((itemUnit: any) => {
                if (itemUnit.id === item.id && itemUnit.hasOwnProperty('ingredients')) {
                  return {
                    ...itemUnit,
                    ingredients: itemUnit.ingredients.filter((item: Ingredient, idx: number) => {
                      return idx !== index;
                    })
                  };
                } else {
                  return itemUnit;
                }
              })
            };
          } else {
            return obj;
          }
        })
      };
    });
  };

  // dnd for tablerow

  const dragRef = useRef<HTMLImageElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop<
    Ingredient | IGroup, 
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes.INGREDIENT,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: any, monitor: any) {
      if (!previewRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = previewRef.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: ItemTypes.INGREDIENT,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(dragRef);
  drop(preview(previewRef));

  const moveSubItem = useCallback((dragIndex: number, hoverIndex: number) => {
      setRecipeData((prevRecipeData: IRecipeData) => {
        return {
          ...prevRecipeData,
          recipeBlocks: prevRecipeData.recipeBlocks.map((obj: IRecipeBlock) => {
            if (obj.id === recipeBlock.id) {
              return {
                ...obj,
                items: obj.items.map((itemUnit: any) => {
                  if (itemUnit.id === item.id && itemUnit.hasOwnProperty('ingredients')) {
                    return {
                      ...itemUnit,
                      ingredients: update(itemUnit.ingredients, {
                        $splice: [
                          [dragIndex, 1],
                          [hoverIndex, 0, itemUnit.ingredients[dragIndex] as Ingredient]
                        ]
                      })
                    };
                  } else {
                    return itemUnit;
                  }
                })
              };
            } else {
              return obj;
            }
          })
        };
      });
  }, []);

  const renderSubItems = useCallback((subItem: Ingredient, index: number) => {
    return (
      <SubIngredient 
        index={index}
        id={subItem.id}
        moveSubItem={moveSubItem}
        item={subItem} 
        deleteSubIngredient={deleteSubIngredient}
        recipeBlock={recipeBlock}
        recipeData={recipeData}
        setRecipeData={setRecipeData}
        key={subItem.id}
      />
    );
  }, []);

  return (
    <div 
      ref={previewRef} 
      data-handler-id={handlerId}
      role="SourceBox" 
      className="group-container"
    >
      <div 
        className="table-body__row table-row ingredient-group"
      >
        <div 
          className="table-row__drag-block"
        >
          <img 
            src={dragIcon} 
            alt="drag-icon" 
            ref={dragRef}
          />
        </div>
        <div 
          className="table-row__checkbox"
        >
          <label className="checkbox-container">
            <input type="checkbox" className="checkbox-container__input" />
            <span className="checkbox-container__checkmark"></span>
          </label>
        </div>
        <div 
          className="table-row__title table-row-title"
        >
          <div 
            className={classNames("table-row-title__info", {
              "hidden": titleInputShown
            })}
            onClick={handleInfoClick}
          >
            {name}
          </div>
          <div 
            className={classNames("table-row-title__input", {
              "hidden": !titleInputShown
            })}
          >
            <input 
              type="text" 
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
              }}
              onBlur={() => updateInput(id, "name", name)}
              ref={titleRef}
            />
          </div>
        </div>
        <div 
          className="table-row__weight table-row-weight"
        >
          <div 
            className={classNames("table-row-weight__info", {
              "hidden": weightInputShown
            })}
            onClick={handleInfoClick}
          >
            {weight}
          </div>
          <div 
            className={classNames("table-row-weight__input", {
              "hidden": !weightInputShown
            })}
          >
            <input 
              type="text" 
              value={weight ? weight : ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setWeight(e.target.value);
              }}
              onBlur={() => updateInput(id, "weight", weight)}
              ref={weightRef}  
            />
          </div>
        </div>
        <div 
          className="table-row__kcal table-row-kcal"
        >
          <div 
            className={classNames("table-row-kcal__info", {
              "hidden": kcalInputShown
            })}
            onClick={handleInfoClick}
          >
            {kcal}
          </div>
          <div 
            className={classNames("table-row-kcal__input", {
              "hidden": !kcalInputShown
            })}
          >
            <input 
              type="text" 
              value={kcal ? kcal : ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setKcal(e.target.value);
              }}
              onBlur={() => updateInput(id, "kcal", kcal)}
              ref={kcalRef}
            />
          </div>
        </div>
        <div 
          className="table-row__annotation table-row-annotation"
        >
          <div 
            className={classNames("table-row-annotation-info", {
              "hidden": annotationInputShown
            })}
            onClick={handleInfoClick}
          >
            {annotation}
          </div>
          <div 
            className={classNames("table-row-annotation-input", {
              "hidden": !annotationInputShown
            })}
          >
            <input 
              type="text" 
              value={annotation ? annotation : ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setAnnotation(e.target.value);
              }}
              onBlur={() => updateInput(id, "annotation", annotation)}
              ref={annotationRef}
            />
          </div>
        </div>
        <div 
          className="table-row__delete-button" 
          onClick={() => deleteIngredient(index)}
        >
          <img src={deleteIcon} alt="delete-icon" />
        </div>
      </div>
      <div
        className="ingredient-container"
      >
        {item.hasOwnProperty('ingredients') && (
          item.ingredients.map((subItem, index) => renderSubItems(subItem, index))
        )}
      </div>
    </div>
  )
})
