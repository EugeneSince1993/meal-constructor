import { useState } from 'react';
import { Button } from '../../components';
import { RecipeBlock } from './Block';
import plusWhite from '../../assets/img/plus-white.svg';
import { IRecipeBlock, IRecipeData } from '../../types';

export const RecipeContent = () => {
  const [recipeData, setRecipeData] = useState<IRecipeData>({
    recipeBlocks: [
      {
        id: 0,
        name: "Начинка",
        items: [
          {
            id: 0,
            type: 'group',
            name: 'Соус',
            weight: null,
            kcal: null,
            annotation: 'без примечания',
            ingredients: [
              {
                id: 0,
                type: 'ingredient',
                name: 'Кетчуп',
                weight: "12",
                kcal: "130",
                annotation: 'Heinz'
              },
              {
                id: 1,
                type: 'ingredient',
                name: 'Майонез',
                weight: "12",
                kcal: "130",
                annotation: 'Махеев'
              }
            ]
          },
          {
            id: 1,
            type: 'ingredient',
            name: 'Салатный лист',
            weight: "12",
            kcal: "130",
            annotation: 'айсберг'
          },
          {
            id: 2,
            type: 'ingredient',
            name: 'Помидор',
            weight: "12",
            kcal: "130",
            annotation: 'Выборжец'
          },
          {
            id: 3,
            type: 'ingredient',
            name: 'Кукуруза',
            weight: "12",
            kcal: "130",
            annotation: 'Выборжец'
          },
          {
            id: 4,
            type: 'ingredient',
            name: 'Лук',
            weight: "12",
            kcal: "130",
            annotation: 'Выборжец'
          },
          {
            id: 5,
            type: 'group',
            name: 'Котлета',
            weight: null,
            kcal: null,
            annotation: null,
            ingredients: [
              {
                id: 0,
                type: 'ingredient',
                name: 'Фарш говяжий',
                weight: "12",
                kcal: "130",
                annotation: 'разморож.'
              },
              {
                id: 1,
                type: 'ingredient',
                name: 'Лук',
                weight: "3",
                kcal: "15",
                annotation: 'лук репчатый'
              }
            ]
          }
        ]
      },
      {
        id: 1,
        name: "Основа",
        items: [
          {
            id: 0,
            type: 'ingredient',
            name: 'Булочка белая',
            weight: "90",
            kcal: "345",
            annotation: 'Хлебный дом'
          },
          {
            id: 1,
            type: 'ingredient',
            name: 'Кунжут',
            weight: "8",
            kcal: "45",
            annotation: 'без примечания'
          }
        ]
      }
    ]
  });

  return (
    <div className="recipe-content">
      {recipeData.recipeBlocks.map((recipeBlock: IRecipeBlock, index: number) => {
        return (
          <RecipeBlock 
            recipeBlock={recipeBlock} 
            recipeData={recipeData}
            setRecipeData={setRecipeData}
            key={index}
          />
        );
      })}
      <Button>
        <img src={plusWhite} alt="plus" />
        <span>Новый блок</span>
      </Button>
    </div>
  )
};