import { FC, useState, ChangeEvent, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { useDrag, useDrop } from 'react-dnd';
import dragIcon from '../assets/img/drag.svg';
import deleteIcon from '../assets/img/delete-icon.svg';
import { ArrTableIngredient, ITableIngredient } from '../types';
import { ItemTypes } from '../utils/ItemTypes';

interface ITableRowProps {
  ingredient: ITableIngredient;
  deleteIngredient: (index: number) => void;
  index: number;
  recipeBlock: ArrTableIngredient;
  setRecipeBlock: (param: any) => void;
  id: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

export const TableRow: FC<ITableRowProps> = ({
  ingredient,
  deleteIngredient,
  index,
  recipeBlock,
  setRecipeBlock,
  id,
  moveCard
}) => {
  const [name, setName] = useState<string>(recipeBlock[index].name);
  const [weight, setWeight] = useState<string>(recipeBlock[index].weight);
  const [kcal, setKcal] = useState<string>(recipeBlock[index].kcal);
  const [annotation, setAnnotation] = useState<string>(recipeBlock[index].annotation);
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

  const updateInput = (index: number, propName: string, propValue: string) => {
    const arr = [...recipeBlock];
    const obj: any = arr[index];
    obj[propName] = propValue;
    setRecipeBlock(arr);
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
    setName(recipeBlock[index].name);
    setWeight(recipeBlock[index].weight);
    setKcal(recipeBlock[index].kcal);
    setAnnotation(recipeBlock[index].annotation);
  }, [recipeBlock]);

  // Drag and drop
  
  const dragRef = useRef<HTMLImageElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop({
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
      moveCard(dragIndex, hoverIndex);
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

  return (
    <div 
      className="table-body__row table-row ingredient"
      ref={previewRef}
      data-handler-id={handlerId}
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
          {ingredient.name}
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
            onBlur={() => updateInput(index, "name", name)}
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
          {ingredient.weight}
        </div>
        <div 
          className={classNames("table-row-weight__input", {
            "hidden": !weightInputShown
          })}
        >
          <input 
            type="text" 
            value={weight}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setWeight(e.target.value);
            }}
            onBlur={() => updateInput(index, "weight", weight)}
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
          {ingredient.kcal}
        </div>
        <div 
          className={classNames("table-row-kcal__input", {
            "hidden": !kcalInputShown
          })}
        >
          <input 
            type="text" 
            value={kcal}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setKcal(e.target.value);
            }}
            onBlur={() => updateInput(index, "kcal", kcal)}
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
          {ingredient.annotation}
        </div>
        <div 
          className={classNames("table-row-annotation-input", {
            "hidden": !annotationInputShown
          })}
        >
          <input 
            type="text" 
            value={annotation}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setAnnotation(e.target.value);
            }}
            onBlur={() => updateInput(index, "annotation", annotation)}
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
  );
};