import { FC } from "react"
import { IFormTextbox } from "../../types/form.type"
import { ItemProps } from "./prop.type"
import { withEditingWrapper } from "../../hoc"


export const TextboxItemContent: FC<ItemProps<IFormTextbox>> = () => {
  return (
    <textarea
      className="app-textbox"
      disabled={true}
      rows={6}
      style={{ height: 110 }}
    />
  )
}

export const TextboxItem = withEditingWrapper(TextboxItemContent)