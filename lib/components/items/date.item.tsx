import { FC } from "react"
import { IFormDate } from "../../types/form.type"
import { ItemProps } from "./prop.type"
import { withEditingWrapper } from "../../hoc"
import { mdiCalendar } from "@mdi/js"
import { MdiIcon } from "../MdiIcon"


export const DateItemContent: FC<ItemProps<IFormDate>> = () => {
  return (
    <div className="pfb-dropdown-shape">
      <p>mm/dd/yyyy</p>
      <MdiIcon path={mdiCalendar} />
    </div>
  )
}

export const DateItem = withEditingWrapper(DateItemContent)