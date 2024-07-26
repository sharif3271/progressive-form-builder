import { FC } from "react";


interface CheckBoxProps {
  options: string[];
  onChange: (so: string) => void;
  value: string;
  placeholder?: string;
}
export const Select: FC<CheckBoxProps> = ({ options, onChange, value, placeholder = 'Select an option' }) => {
  return (
    <div className="pfb-option-row" >
      <div className="pfb-select">
        <select onChange={e => onChange(e.target.value)} value={value}>
          <option value="" disabled>{placeholder}</option>
          {options.map((o, i) => (
            <option
              className="pfb-option"
              key={i}
              value={o}
            >{o}</option>
          ))}
        </select>
      </div>
    </div>
  )
}