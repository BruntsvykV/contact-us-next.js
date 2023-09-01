import React, { useState } from 'react';

interface IInput {
  labelText?: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<IInput> = ({
  labelText,
  type,
  placeholder,
  className,
}: IInput) => {

  const [focused, setFocused]: [boolean, any] = useState(false);
  const [inputValue, setInputValue]: [string, any] = useState('');

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(inputValue !== '');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor={`inputField-${labelText}`}
        className={"font-['Poppins'] font-[500] text-12 leading-20.2 " + (focused ? 'text-black' : 'text-[#8D8D8D]')}
      >
        {labelText}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={className + " py-2.5 font-['Poppins'] font-[500] text-14 leading-20.2 text-[#8D8D8D] focus:text-black outline-0 border-0 border-b-2 border-[#8D8D8D] focus:border-b-[1px] focus:border-black"}
        id={`inputField-${labelText}`}
        aria-label={labelText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInputChange}
        value={inputValue}
      />
    </div>
  );
};

export default Input;
