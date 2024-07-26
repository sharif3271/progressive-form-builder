import { FC, useMemo } from "react"
import { IFormFile } from "../../types/form.type"
import { ItemProps } from "./prop.type"
import { withEditingWrapper } from "../../hoc"
import { MdiIcon } from "../MdiIcon"
import { mdiClose, mdiUploadBoxOutline } from "@mdi/js"
import { useContextSelector } from "../../context"
import { AppUtils } from "../../utils"


export const FileItemContent: FC<ItemProps<IFormFile>> = ({ item, onUpdate }) => {

  const isView = useContextSelector(s => s.isView)
  const uplaodings = useMemo(() => item.value ? [item.value] : [], [item.value])

  if (!isView) return (
    <div className="pfb-upload-file">
      <MdiIcon path={mdiUploadBoxOutline} />
    </div>
  )

  return (
    <>
      <div className="pfb-upload-file active" onClick={() => {
        AppUtils.selectFile((f) => {
          onUpdate({
            id: item.id,
            data: {
              ...item,
              value: f
            }
          })
        })
      }}>
        <MdiIcon path={mdiUploadBoxOutline} />
      </div>

      <div className="pfb-upload-preview-container"></div>

      {uplaodings.map((f, i) => {
        let src = f;
        if (typeof f !== 'string') {
          src = URL.createObjectURL(f)
        }
        return (
          <div className="pfb-file-preview" key={i}>
            <img src={src as string} onError={e => {
              const img = e.currentTarget
              img.onerror = null
              img.src = `data:image/png;base64,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`
            }}/>
            <div className="ac-close" onClick={() => {
              onUpdate({
                id: item.id,
                data: {
                  ...item,
                  value: undefined
                }
              })
              if (typeof f !== 'string') {
                // set memory free
                URL.revokeObjectURL(src as string)
              }
            }}>
              <MdiIcon path={mdiClose} />
            </div>
          </div>
        )
      })}
    </>
  )
}

export const FileItem = withEditingWrapper(FileItemContent)