import { FC } from "react"
import { IFormTextbox } from "../../types/form.type"
import { ItemProps } from "./prop.type"
import { withEditingWrapper } from "../../hoc"
import { useContextSelector } from "../../context"


export const TextboxItemContent: FC<ItemProps<IFormTextbox>> = ({ item, onUpdate }) => {

  const isView = useContextSelector(s => s.isView)

  if (!isView) return (
    <textarea
      className="app-textbox"
      disabled={true}
      rows={6}
      style={{ height: 110 }}
    />
  )

  return (
    <textarea
      className="app-textbox"
      rows={6}
      style={{ height: 110 }}
      value={item.value ?? ''}
      onChange={e => {
        onUpdate({
          id: item.id,
          data: {
            ...item,
            value: e.target.value || ''
          }
        })
      }}
    />
  )
}

export const TextboxItem = withEditingWrapper(TextboxItemContent)