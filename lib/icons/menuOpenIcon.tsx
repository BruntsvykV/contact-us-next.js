import React from 'react';
import { IconProps } from './icon.props';

export const MenuOpenIcon: React.FC<IconProps> = ({
  size = 24,
  onClick
}) => {
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 18h-8a1 1 0 1 1 0-2h8v2Zm0-5H4a1 1 0 1 1 0-2h17v2Zm0-5H4a1 1 0 0 1 0-2h17v2Z" fill="#000"/>
    </svg>
  );
};
export default MenuOpenIcon;
