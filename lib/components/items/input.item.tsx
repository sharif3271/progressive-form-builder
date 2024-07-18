import { FC } from "react"
import { ItemProps } from "./prop.type"
import { IFormInput } from "../../types/form.type"
import { withEditingWrapper } from "../../hoc"

export const InputItemContent: FC<ItemProps<IFormInput>> = () => {
  return (
    <>
      <input className="app-input" disabled={true} />
    </>
  )
}

export const InputItem = withEditingWrapper(InputItemContent)