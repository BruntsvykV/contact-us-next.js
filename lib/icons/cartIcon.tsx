import React from 'react';
import { IconProps } from './icon.props';

export const CartIcon: React.FC<IconProps> = ({
  size = 18,
  fill = "#1F1F1F",
  className = "",
  onClick
}) => {
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      className={`fill-current ${fill} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0V0z"/>
      <path d="M17.25 17.25H6.544L3.928 2.869a.75.75 0 0 0-.731-.619H1.5" fill="none" stroke={fill}/>
      <path fill="none" stroke={fill} d="M9.375 19.125A1.875 1.875 0 0 1 7.5 21a1.875 1.875 0 0 1-1.875-1.875 1.875 1.875 0 0 1 3.75 0zm9.75 0A1.875 1.875 0 0 1 17.25 21a1.875 1.875 0 0 1-1.875-1.875 1.875 1.875 0 0 1 3.75 0zM5.859 13.5h11.775a1.491 1.491 0 0 0 1.472-1.228L20.25 6H4.5"/>
    </svg>
  );
};
export default CartIcon;
