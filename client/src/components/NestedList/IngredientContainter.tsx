import { FC, useCallback } from "react";
import { useDrop } from "react-dnd";
import { Group, Ingredient, IRecipeBlock, IRecipeData } from "../../types";
import { ItemTypes } from "../../utils/ItemTypes";
import { TableRowLI } from "./TableRowLI";

interface IProps {
  item: Group;
  deleteIngredient: (index: number) => void;
  recipeBlock: IRecipeBlock;
  recipeData: IRecipeData;
  setRecipeData: (cb: (recipeData: IRecipeData) => IRecipeData) => void;
  moveSubItem: any;
  renderSubItems: any;
}

export const IngredientContainer: FC<IProps> = ({
  item,
  moveSubItem,
  renderSubItems,
  deleteIngredient,
  recipeBlock,
  recipeData,
  setRecipeData
}) => {
  const [collectedProps, drop] = useDrop(() => ({
    accept: ItemTypes.INGREDIENT
  }));

  return (
    <div
      className="ingredient-container"
      ref={drop}
    >
      {item.ingredients.map((ingredient: Ingredient, index: number) => renderSubItems(ingredient, index))}
    </div>
  );
};