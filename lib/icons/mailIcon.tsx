import React from 'react';
import { IconProps } from './icon.props';

export const MailIcon: React.FC<IconProps> = ({
  size = 24,
  onClick,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 4H2v16h20V4Zm-2 4-8 5-8-5V6l8 5 8-5v2Z" fill="#fff"/>
    </svg>
  );
};
export default MailIcon;
