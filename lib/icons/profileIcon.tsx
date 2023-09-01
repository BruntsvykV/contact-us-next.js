import React from 'react';
import { IconProps } from './icon.props';

export const ProfileIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 0.6 0.6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.3 0.317a0.135 0.135 0 1 0 0 -0.27 0.135 0.135 0 0 0 0 0.27ZM0.3 0a0.18 0.18 0 0 1 0.091 0.335c0.111 0.033 0.194 0.127 0.209 0.242 0.001 0.011 -0.007 0.021 -0.018 0.022 -0.011 0.001 -0.022 -0.006 -0.023 -0.017 -0.016 -0.126 -0.125 -0.22 -0.257 -0.22 -0.133 0 -0.243 0.095 -0.259 0.22 -0.001 0.011 -0.012 0.019 -0.023 0.017 -0.012 -0.001 -0.02 -0.011 -0.018 -0.022 0.015 -0.115 0.098 -0.208 0.209 -0.242A0.18 0.18 0 0 1 0.3 0Z"
        fill={fill}/>
    </svg>
  );
};
export default ProfileIcon;
