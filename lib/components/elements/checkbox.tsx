import { FC } from "react";
import { MdiIcon } from "../MdiIcon";
import { mdiCheckBold } from "@mdi/js";


interface CheckBoxProps {
  isChecked: boolean;
  toggleCheck: () => void;
  label: string;
}
export const CheckBox: FC<CheckBoxProps> = ({ isChecked, toggleCheck, label }) => {
  return (
    <div className="pfb-option-row action" onClick={toggleCheck}>
      <div className="square">
        {isChecked && (
          <MdiIcon className="checkmark" path={mdiCheckBold} />
        )}
      </div>
      <div className="item-text">{label}</div>
    </div>
  )
}