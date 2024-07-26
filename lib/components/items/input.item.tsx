import { FC } from "react"
import { ItemProps } from "./prop.type"
import { IFormInput } from "../../types/form.type"
import { withEditingWrapper } from "../../hoc"
import { useContextSelector } from "../../context"

export const InputItemContent: FC<ItemProps<IFormInput>> = ({ item, onUpdate }) => {

  const isView = useContextSelector(s => s.isView)

  return (
    <>
      {!isView && <input className="app-input" disabled={true} />}
      {isView && (
        <>
          <input
            className="app-input"
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
        </>
      )}
    </>
  )
}

export const InputItem = withEditingWrapper(InputItemContent)