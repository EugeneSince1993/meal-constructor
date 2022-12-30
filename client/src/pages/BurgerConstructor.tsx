import { useState } from 'react';
import { Drawer, Main } from '../components';

export const BurgerConstructor = () => {
  const [isDrawerPutAway, setIsDrawerPutAway] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerPutAway(!isDrawerPutAway);
  };

  return (
    <div className="burger-constructor">
      <Drawer isDrawerPutAway={isDrawerPutAway} />
      <Main isDrawerPutAway={isDrawerPutAway} toggleDrawer={toggleDrawer} />
    </div>
  )
};
