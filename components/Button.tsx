import React from "react";


interface IButton {
  className?: string;
  label: string;
  labelColor?: string;
  bgColor?: string;
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<IButton> = ({
  className,
  label,
  labelColor,
  bgColor,
  buttonType,
  onClick,
}: IButton) => {

  return (
    <button
      type={buttonType || "button"}
      onClick={onClick}
      aria-label={label}
      className={`${className} flex justify-center items-center w-full bg-${bgColor || '[#484848]'} cursor-pointer transition hover:duration-300 hover:shadow-xl`}
    >
      <span className={`text-${labelColor} uppercase flex justify-center items-center py-4 px-12 hover:underline`}>
        {label}
      </span>
    </button>
  )
}

export default Button;
