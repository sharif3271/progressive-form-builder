import { FC } from "react";
import { MdiIcon } from "../MdiIcon";
import { mdiCheckboxBlankCircle } from "@mdi/js";


interface CheckBoxProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}
export const Radio: FC<CheckBoxProps> = ({ isActive, onClick, label }) => {
  return (
    <div className="pfb-option-row action" onClick={onClick}>
      <div className="circle">
        {isActive && (
          <MdiIcon className="checkmark" path={mdiCheckboxBlankCircle} />
        )}
      </div>
      <div className="item-text">{label}</div>
    </div>
  )
}