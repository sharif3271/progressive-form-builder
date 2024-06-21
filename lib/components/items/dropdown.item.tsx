import { FC } from "react"
import { IFormInput } from "../../types/form.type"
import { ItemProps } from "./prop.type"


export const DropdownItem: FC<ItemProps<IFormInput>> = () => {
  return (
    <div className="item-container"></div>
  )
}