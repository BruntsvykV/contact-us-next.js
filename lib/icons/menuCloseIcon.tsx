import React from 'react';
import { IconProps } from './icon.props';

export const MenuCloseIcon: React.FC<IconProps> = ({
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
      <path d="M20 20 4 4m16 0L4 20" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};
export default MenuCloseIcon;
