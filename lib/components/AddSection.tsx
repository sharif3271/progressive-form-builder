import { mdiPlus } from "@mdi/js"
import { useAddItem } from "../context"
import { MdiIcon } from "./MdiIcon"


export const AddSection = () => {

  const onAddItem = useAddItem()
  
  return (
    <div className="pfb-add-section">
      <div className="button" onClick={() => onAddItem()} title="Add a Question">
        <MdiIcon path={mdiPlus} />
      </div>
    </div>
  )
}