import React from 'react';
import { IconProps } from './icon.props';

export const TwitterIcon: React.FC<IconProps> = ({
  size = 30,
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
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="15" fill="#1B1B1B"/>
      <path d="M23 10.425a6.241 6.241 0 0 1-1.77.47 3.029 3.029 0 0 0 1.352-1.67c-.603.353-1.262.6-1.95.732a3.067 3.067 0 0 0-1.023-.709A3.107 3.107 0 0 0 18.385 9c-1.703 0-3.073 1.36-3.073 3.028 0 .235.029.469.075.694A8.781 8.781 0 0 1 9.05 9.555a2.97 2.97 0 0 0-.418 1.528c0 1.051.543 1.978 1.37 2.523a3.137 3.137 0 0 1-1.39-.386v.038c0 1.471 1.056 2.69 2.464 2.971a3.307 3.307 0 0 1-.809.103c-.2 0-.39-.02-.58-.046.389 1.2 1.523 2.072 2.873 2.1a6.221 6.221 0 0 1-3.816 1.294c-.258 0-.496-.009-.743-.037A8.802 8.802 0 0 0 12.721 21c5.653 0 8.747-4.612 8.747-8.615 0-.131 0-.262-.01-.394A6.566 6.566 0 0 0 23 10.425Z"
        fill="#fff"/>
    </svg>
  );
};
export default TwitterIcon;
