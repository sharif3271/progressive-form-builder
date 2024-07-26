import { FC } from "react"
import { IFormDate } from "../../types/form.type"
import { ItemProps } from "./prop.type"
import { withEditingWrapper } from "../../hoc"
import { mdiCalendar } from "@mdi/js"
import { MdiIcon } from "../MdiIcon"
import { useContextSelector } from "../../context"


export const DateItemContent: FC<ItemProps<IFormDate>> = ({ item, onUpdate }) => {

  const isView = useContextSelector(s => s.isView)

  if (!isView) return (
    <div className="pfb-dropdown-shape">
      <p>mm/dd/yyyy</p>
      <MdiIcon path={mdiCalendar} />
    </div>
  )

  return (
    <input
      type="date"
      value={item.value ?? ''}
      onChange={e => onUpdate({
        id: item.id,
        data: {
          ...item,
          value: e.target.value ?? ''
        }
      })}
    />
  )
}

export const DateItem = withEditingWrapper(DateItemContent)