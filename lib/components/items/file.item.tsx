import { FC } from "react"
import { IFormFile } from "../../types/form.type"
import { ItemProps } from "./prop.type"
import { withEditingWrapper } from "../../hoc"
import { MdiIcon } from "../MdiIcon"
import { mdiUploadBoxOutline } from "@mdi/js"


export const FileItemContent: FC<ItemProps<IFormFile>> = () => {
  return (
    <div className="pfb-upload-file">
      <MdiIcon path={mdiUploadBoxOutline} />
    </div>
  )
}

export const FileItem = withEditingWrapper(FileItemContent)