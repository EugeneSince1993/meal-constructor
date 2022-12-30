import { FC } from "react";
import classNames from "classnames";
import { Route, Routes } from "react-router-dom";
import { Combosets, CookingTime, Pricelist, Recipe, RecipeContainer, Recipes, Serving } from "../pages";
import { Breadcrumbs } from "./Breadcrumbs";
import { Header } from "./Header";
import { EditPanel } from "./EditPanel";
import collapse from "../assets/img/collapse.svg";

interface IMainProps {
  isDrawerPutAway: boolean;
  toggleDrawer: () => void;
}

export const Main: FC<IMainProps> = ({ isDrawerPutAway, toggleDrawer }) => {

  return (
    <div 
      className={classNames({
        "main": true,
        "offsetted": !isDrawerPutAway
      })}
    >
      <Header />
      <Breadcrumbs />
      <Routes>
        <Route 
          path="/recipes" 
          element={<Recipes />}
        />
        <Route 
          path="/recipes/recipe" 
          element={<RecipeContainer recipeName="Классический" component={<Recipe />} />}
        />
        <Route 
          path="/recipes/cooking-time" 
          element={<RecipeContainer recipeName="Классический" component={<CookingTime />} />}
        />
        <Route 
          path="/recipes/serving" 
          element={<RecipeContainer recipeName="Классический" component={<Serving />} />}
        />
        <Route path="/pricelist" element={<Pricelist />} />
        <Route path="/combosets" element={<Combosets />} />
      </Routes>
      <EditPanel />
      <img 
        className={classNames({
          "collapse-button": true,
          "collapse-button_flipped": isDrawerPutAway
        })}
        src={collapse} 
        alt="collapse" 
        onClick={toggleDrawer}
      />
    </div>
  );
};