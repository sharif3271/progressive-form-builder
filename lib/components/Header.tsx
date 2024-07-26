import { FC } from "react"
import { useContextSelector, useUpdateDescription, useUpdateTitle } from "../context"


export const Header: FC = () => {

  const title = useContextSelector(s => s.title)
  const description = useContextSelector(s => s.description)
  const isView = useContextSelector(s => s.isView)

  const onChangeTitle = useUpdateTitle()
  const onChangeDesc = useUpdateDescription()

  return (
    <div className="pfb-form-header">
      {isView ? (
        <>
          <div className="text title h2">{title}</div>
          <div className="text description h5">{description}</div>
        </>
      ) : (
        <>
          <input
            type="text"
            className="title h2"
            placeholder="Untitled form"
            value={title}
            onChange={(e) => onChangeTitle(e.target.value || '')}
          />
          <textarea
            className="description h5"
            placeholder="Form description"
            value={description}
            onChange={(e) => onChangeDesc(e.target.value || '')}
          />
        </>
      )}
    </div>
  )
}