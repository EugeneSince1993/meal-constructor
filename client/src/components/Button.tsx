import { FC, ReactNode } from "react";
import classNames from "classnames";

interface IButtonProps {
  variant?: string;
  link?: string;
  handler?: (param: any) => any | void;
  children: ReactNode;
}

export const Button: FC<IButtonProps> = ({ 
  variant = "solid",
  link = "",
  handler,
  children
}) => {
  return (
    <button className={classNames({
      "button": true,
      "button_outlined": variant === "outlined",
      "button_solid": variant === "solid"
    })}>
      <div className="button__inner">
        {children}
      </div>
    </button>
  );
};