import { FC } from "react";

interface SwitchToggleProps {
  active?: boolean;
  onToggle?: () => void;
}
export const SwitchToggle: FC<SwitchToggleProps> = ({ active, onToggle }) => {
  return (
    <label className={`st-switch ${(active ? `on` : ``)}`} onClick={() => onToggle?.()}>
      <div></div>
    </label>
  )
}