export interface ITableIngredient {
  id: number;
  name: string;
  weight: string;
  kcal: string;
  annotation: string;
}

export type ArrTableIngredient = ITableIngredient[];


export interface Ingredient {
  id: number;
  type: string;
  name: string;
  weight: string;
  kcal: string;
  annotation: string;
} 

export interface Group {
  id: number;
  type: string;
  name: string;
  weight: string | null;
  kcal: string | null;
  annotation: string | null;
  ingredients: Ingredient[];
} 

export interface IRecipeBlock {
  id: number;
  name: string;
  items: (Ingredient | Group)[];
}

export type RecipeBlocksArr = IRecipeBlock[];