export interface Ingredient {
  id: number;
  type: string;
  name: string;
  weight: string;
  kcal: string;
  annotation: string;
} 

export interface IGroup {
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
  items: (Ingredient | IGroup)[];
}

export type RecipeBlocks = IRecipeBlock[];

export interface IRecipeData {
  recipeBlocks: RecipeBlocks;
}
