import { Drawer } from '../components';
import { Recipe } from './Recipe';

export const BurgerConstructor = () => {
  return (
    <div className="burger-constructor">
      <Drawer />
      <Recipe />
    </div>
  )
};
