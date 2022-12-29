import { FC } from "react";
import { EditPanel } from "../../components";
import { RecipeContent } from "./Content";

export const Recipe: FC = () => {
  return (
    <div className="recipe">
      <RecipeContent />
      <EditPanel />
    </div>
  );
};