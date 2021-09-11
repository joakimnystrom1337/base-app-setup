import React from 'react';

interface CheckboxProps {
  label: string,
  id: string,
  checked?: boolean
  onChange: () => void
}

export const Checkbox = ({
  label,
  checked,
  id,
  onChange,
  ...props
}: CheckboxProps):JSX.Element=> {
  return (
    <div>
      <input checked={checked} type="checkbox" id={id} onClick={onChange}/>
      <label htmlFor={id}>{label}</label>
    </div>
  );  
};
