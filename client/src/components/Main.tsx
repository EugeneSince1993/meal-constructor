import classNames from "classnames";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Combosets, CookingTime, Pricelist, Recipe, RecipeMenu, Recipes, Serving } from "../pages";
import { Breadcrumbs } from "./Breadcrumbs";
import { Header } from "./Header";
import collapse from "../assets/img/collapse.svg";

interface IMainProps {
  isDrawerClosed: boolean;
  toggleDrawer: () => void;
}

export const Main: FC<IMainProps> = ({ isDrawerClosed, toggleDrawer }) => {
  const recipeNameAndMenu = (
    <>
      <h2>Классический</h2>
      <RecipeMenu />    
    </>
  );

  return (
    <div className="main">
      <Header />
      <Breadcrumbs />
      <Routes>
        <Route 
          path="/recipes" 
          element={<Recipes />}
        />
        <Route 
          path="/recipes/recipe" 
          element={
            <>
              {recipeNameAndMenu}
              <Recipe />
            </>
          }
        />
        <Route path="/recipes/cooking-time" 
          element={
            <>
              {recipeNameAndMenu}
              <CookingTime />
            </>
          }
        />
        <Route 
          path="/recipes/serving" 
          element={
            <>
              {recipeNameAndMenu}
              <Serving />
            </>
          }
        />
        <Route path="/pricelist" element={<Pricelist />} />
        <Route path="/combosets" element={<Combosets />} />
      </Routes>
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