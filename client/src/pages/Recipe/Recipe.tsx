import { FC } from "react";
import { RecipeContent } from "./Content";

interface IRecipeProps {
  isDrawerPutAway: boolean;
}

export const Recipe: FC<IRecipeProps> = ({ isDrawerPutAway }) => {
  return (
    <div className="recipe">
      <RecipeContent isDrawerPutAway={isDrawerPutAway} />
    </div>
  );
};