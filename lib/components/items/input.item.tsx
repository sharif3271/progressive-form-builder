import { FC } from "react"
import { ItemProps } from "./prop.type"
import { IFormInput } from "../../types/form.type"

export const InputItem: FC<ItemProps<IFormInput>> = () => {
  return (
    <div className="item-container"></div>
  )
}