import { FC, ReactNode, useState } from 'react';
import classNames from 'classnames';
import chevronDownActive from '../assets/img/chevron-down-active.svg';

interface ICollapsibleProps {
  title: string;
  open?: boolean;
  children: ReactNode;
}

export const Collapsible: FC<ICollapsibleProps> = ({ title, open = true, children }) => {
  const [isOpened, setOpened] = useState(open);

  const toggleDropdown = () => {
    setOpened(!isOpened);
  };

  return (
    <div className="dish">
      <div className="dish__title dish-title" onClick={toggleDropdown}>
        <img 
          className={classNames({
            "dish-title__img": true,
            "dish-title__img_upside-down": isOpened
          })}
          src={chevronDownActive} 
          alt="chevron-down" 
        />
        <span>{title}</span>
      </div>
      {isOpened && children}
    </div>
  );
};