import { useState, FC, SyntheticEvent, useEffect } from 'react';
import classNames from 'classnames';
import dragIcon from '../assets/img/drag.svg';
import { Button } from './Button';
import { Group, Ingredient, IRecipeBlock, RecipeBlocksArr } from '../types';

interface IIngredientFormProps {
  editingEnabled: boolean;
  setEditingEnabled: (param: any) => void;
  recipeBlock: IRecipeBlock;
  setRecipeBlock: (recipeBlock: IRecipeBlock) => void;
  recipeBlocks: RecipeBlocksArr;
  setRecipeBlocks: (recipeBlocks: RecipeBlocksArr) => void;
}

export const IngredientForm: FC<IIngredientFormProps> = ({
  setEditingEnabled,
  editingEnabled,
  recipeBlock,
  setRecipeBlock,
  recipeBlocks,
  setRecipeBlocks
}) => {
  const recBlockObj: IRecipeBlock = recipeBlock;

  const [name, setName] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [kcal, setKcal] = useState<string>("");
  const [annotation, setAnnotation] = useState<string>("");

  const cancelEditing = () => {
    setEditingEnabled(false);
  };
  
  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();

    if (name && weight && kcal && annotation) {
      recBlockObj.items.map((item: Ingredient | Group) => {
        return {
          ...item,
          name,
          weight,
          kcal,
          annotation
        };
      });

      setRecipeBlock(recBlockObj);  
      setEditingEnabled(false); 
    }
  };

  useEffect(() => {
    console.log(recipeBlock);
  }, [recipeBlock]);

  useEffect(() => {
    setName("");
    setWeight("");
    setKcal("");
    setAnnotation("");
  }, [editingEnabled]);

  useEffect(() => {
    const recBlocksArr = recipeBlocks;
    setRecipeBlocks(recBlocksArr);
  }, [recipeBlock]);

  return (
    <form 
      className={classNames("table-body__row", "table-row", "ingredient", "ingredient-form", {"hide": !editingEnabled})}
      onSubmit={submitHandler}
    >
      <div className="table-row__drag-block">
        <img src={dragIcon} alt="drag-icon" />
      </div>
      <div className="table-row__checkbox">
        <label className="checkbox-container">
          <input type="checkbox" className="checkbox-container__input" />
          <span className="checkbox-container__checkmark"></span>
        </label>
      </div>
      <div className="table-row__title">
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="table-row__weight">
        <input 
          type="text" 
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="table-row__kcal">
        <input 
          type="text" 
          value={kcal}
          onChange={(e) => setKcal(e.target.value)}
        />
      </div>
      <div className="table-row__annotation">
        <input 
          type="text" 
          value={annotation}
          onChange={(e) => setAnnotation(e.target.value)}
        />
      </div>
      <div className="table-row__buttons">
        <Button buttonType="submit">
          Добавить
        </Button>
        <Button handler={cancelEditing}>
          Отмена
        </Button>
      </div>
    </form>
  );
};