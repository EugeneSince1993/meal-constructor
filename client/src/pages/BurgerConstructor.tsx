import { useState } from 'react';
import { Drawer } from '../components';
import { Recipe } from './Recipe';

export const BurgerConstructor = () => {
  const [isDrawerClosed, setIsDrawerClosed] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerClosed(!isDrawerClosed);
  };

  return (
    <div className="burger-constructor">
      <Drawer isDrawerClosed={isDrawerClosed} />
      <Recipe isDrawerClosed={isDrawerClosed} toggleDrawer={toggleDrawer} />
    </div>
  )
};
