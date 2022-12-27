import { Breadcrumbs, EditPanel, Header } from "../../components";
import { RecipeContent } from "./Content";
import { RecipeMenu } from "./Menu";

export const Recipe = () => {
  return (
    <div className="recipe">
      <Header />
      <Breadcrumbs />
      <h2>Классический</h2>
      <RecipeMenu />
      <RecipeContent />
      <EditPanel />
    </div>
  );
};