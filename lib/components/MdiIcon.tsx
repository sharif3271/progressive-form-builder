import { FC, HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLOrSVGElement> {
  path: string;
}

export const MdiIcon: FC<IProps> = ({ path, ...props }) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d={path} fill="var(--color-gray2)" />
  </svg>
)