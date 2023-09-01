import React from "react";
import styles from "./checkbox.module.css";


interface ICheckbox {
  className?: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
}
const Checkbox: React.FC<ICheckbox> = ({
  className,
  label,
  checked,
  disabled,
}: ICheckbox) => {

  return (
    <div className={`${className} flex items-center`}>
      <label className={`${styles.check} flex items-center font-['Poppins'] font-[400] text-12 leading-20.2 hover:underline`}>
        <input className={`${styles.checkInput} pl-2.5`}
         type={"checkbox"}
         checked={checked}
         disabled={disabled}
        />
          <span className={`${styles.checkBox}`}></span>
        {label}
      </label>
    </div>
  )
}

export default Checkbox;
