import { FC } from "react";
import classNames from "classnames";
import { Breadcrumbs, EditPanel, Header } from "../../components";
import { RecipeContent } from "./Content";
import { RecipeMenu } from "./Menu";
import collapse from '../../assets/img/collapse.svg';

interface IRecipeProps {
  isDrawerClosed: boolean;
  toggleDrawer: () => void;
}

export const Recipe: FC<IRecipeProps> = ({ isDrawerClosed, toggleDrawer }) => {
  return (
    <div className="recipe">
      <Header />
      <Breadcrumbs />
      <h2>Классический</h2>
      <RecipeMenu />
      <RecipeContent />
      <EditPanel />
      <img 
        className={classNames({
          "collapse-button": true,
          "collapse-button_flipped": isDrawerClosed
        })}
        src={collapse} 
        alt="collapse" 
        onClick={toggleDrawer}
      />
    </div>
  );
};