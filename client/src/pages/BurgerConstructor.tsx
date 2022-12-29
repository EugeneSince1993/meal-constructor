import { useState } from 'react';
import { Drawer, Main } from '../components';

export const BurgerConstructor = () => {
  const [isDrawerClosed, setIsDrawerClosed] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerClosed(!isDrawerClosed);
  };

  return (
    <div className="burger-constructor">
      <Drawer isDrawerClosed={isDrawerClosed} />
      <Main isDrawerClosed={isDrawerClosed} toggleDrawer={toggleDrawer} />
    </div>
  )
};
