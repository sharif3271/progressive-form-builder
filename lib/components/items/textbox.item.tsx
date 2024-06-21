import { FC } from "react"
import { IFormInput } from "../../types/form.type"
import { ItemProps } from "./prop.type"


export const TextboxItem: FC<ItemProps<IFormInput>> = () => {
  return (
    <div className="item-container"></div>
  )
}