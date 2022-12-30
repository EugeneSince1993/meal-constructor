import { FC, ReactNode } from "react";
import { RecipeMenu } from "./Menu";

interface IRecipeContainerProps {
  recipeName: string;
  component: ReactNode;
}

export const RecipeContainer: FC<IRecipeContainerProps> = ({ recipeName, component }) => {

  return (
    <div className="recipe-container">
      <h2>{recipeName}</h2>
      <RecipeMenu />
      {component}
    </div>
  );
};