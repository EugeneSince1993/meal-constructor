import { FC, useState } from 'react';
import { Button } from '../../components';
import { RecipeBlock } from './Block';
import plusWhite from '../../assets/img/plus-white.svg';
import { ArrTableIngredient } from '../../types';

interface IRecipeContentProps {
  isDrawerPutAway: boolean;
}

export const RecipeContent: FC<IRecipeContentProps> = ({ isDrawerPutAway }) => {
  const ingredients_nachinka = [
    {
      id: 0,
      name: 'Соус',
      weight: "12",
      kcal: "130",
      annotation: 'без примечания',
    },
    {
      id: 1,
      name: 'Салатный лист',
      weight: "12",
      kcal: "130",
      annotation: 'айсберг',
    },
    {
      id: 3,
      name: 'Помидор',
      weight: "12",
      kcal: "130",
      annotation: 'без примечания',
    },
    {
      id: 4,
      name: 'Котлета',
      weight: "12",
      kcal: "130",
      annotation: 'текст',
    }
  ];
  
  const [recipeBlock, setRecipeBlock] = useState<ArrTableIngredient>(ingredients_nachinka);

  const ingredients_osnova = [
    {
      name: 'Булочка белая',
      weight: "90",
      kcal: "345",
      annotation: 'Хлебный дом'
    },
    {
      name: 'Кунжут',
      weight: "8",
      kcal: "45",
      annotation: 'без примечания'
    }
  ];

  return (
    <div className="recipe-content">
      <RecipeBlock 
        name="Начинка" 
        recipeBlock={recipeBlock} 
        setRecipeBlock={setRecipeBlock}
        isDrawerPutAway={isDrawerPutAway}
      />
      {/* <RecipeBlock name="Основа" ingredients={ingredients_osnova} /> */}
      <Button>
        <img src={plusWhite} alt="plus" />
        <span>Новый блок</span>
      </Button>
    </div>
  )
};