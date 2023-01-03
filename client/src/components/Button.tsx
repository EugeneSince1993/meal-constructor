import { FC, ReactNode } from "react";
import classNames from "classnames";

interface IButtonProps {
  variant?: string;
  link?: string;
  handler?: (param: any) => any | void;
  buttonType?: "submit" | "button";
  children: ReactNode;
}

export const Button: FC<IButtonProps> = ({ 
  variant = "solid",
  link = "",
  handler,
  buttonType = "button",
  children
}) => {
  return (
    <button 
      className={classNames({
        "button": true,
        "button_outlined": variant === "outlined",
        "button_solid": variant === "solid"
      })}
      onClick={handler}
      type={buttonType}
    >
      <div className="button__inner">
        {children}
      </div>
    </button>
  );
};