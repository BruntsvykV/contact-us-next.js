import React from 'react';
import { IconProps } from './icon.props';

export const ArrowDownIcon: React.FC<IconProps> = ({
  size = 12,
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
      viewBox="0 0 12 7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.47 6.77a.75.75 0 0 0 1.06 0l4.773-4.773a.75.75 0 1 0-1.06-1.06L6 5.178 1.757.936a.75.75 0 0 0-1.06 1.06L5.47 6.77Zm-.22-1.562V6.24h1.5V5.21h-1.5Z"
        fill={fill}/>
    </svg>
  );
};
export default ArrowDownIcon;
