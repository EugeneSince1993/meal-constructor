import { FC, useCallback } from "react";
import { useDrop } from "react-dnd";
import { Group, Ingredient, IRecipeBlock, IRecipeData } from "../../types";
import { ItemTypes } from "../../utils/ItemTypes";
import { TableRowLI } from "./TableRowLI";

interface IProps {
  item: Group;
  moveItem: any;
  deleteIngredient: (index: number) => void;
  recipeBlock: IRecipeBlock;
  recipeData: IRecipeData;
  setRecipeData: (cb: (recipeData: IRecipeData) => IRecipeData) => void;

}

export const IngredientContainer: FC<IProps> = ({
  item,
  moveItem,
  deleteIngredient,
  recipeBlock,
  recipeData,
  setRecipeData
}) => {
  const [collectedProps, drop] = useDrop(() => ({
    accept: ItemTypes.INGREDIENT
  }));

  const renderItem = useCallback((ingredient: Ingredient, index: number) => {
    return (
      <TableRowLI 
        key={ingredient.id}
        index={index}
        id={ingredient.id}
        moveItem={moveItem}
        item={ingredient} 
        deleteIngredient={deleteIngredient}
        recipeBlock={recipeBlock}
        recipeData={recipeData}
        setRecipeData={setRecipeData}
        subIngredient={true}
      />
    );
  }, []);

  return (
    <div
      className="ingredient-container"
      ref={drop}
    >
      {item.ingredients.map((ingredient: Ingredient, index: number) => renderItem(ingredient, index))}
    </div>
  );
};