import React from 'react';
import { IconProps } from './icon.props';

export const LocationIcon: React.FC<IconProps> = ({
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
      <path d="M12 1.5a8.26 8.26 0 0 0-8.25 8.25 8.167 8.167 0 0 0 1.662 4.95s.225.296.262.339L12 22.5l6.33-7.465.258-.335v-.002A8.164 8.164 0 0 0 20.25 9.75 8.26 8.26 0 0 0 12 1.5Zm0 11.25a3 3 0 1 1 0-5.999 3 3 0 0 1 0 5.999Z"
        fill="#fff"/>
    </svg>
  );
};
export default LocationIcon;
