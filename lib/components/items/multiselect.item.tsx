import { FC, useCallback, useMemo } from "react"
import { IFormMultiselect } from "../../types/form.type"
import { ItemProps } from "./prop.type"
import { withEditingWrapper } from "../../hoc"
import { MdiIcon } from "../MdiIcon"
import { mdiClose } from "@mdi/js"


export const MultiselectItemContent: FC<ItemProps<IFormMultiselect>> = ({ item, onUpdate }) => {

  const options = useMemo(() => item.options ?? [], [item.options])

  const onChangeOption = useCallback((v: string, index: number) => {
    const optionList = [...options]
    optionList[index] = v
    onUpdate({
      id: item.id,
      data: {
        ...item,
        options: optionList
      }
    })
  }, [options, item])
  const onRemoveOption = useCallback((index: number) => {
    const optionList = [...options]
    optionList.splice(index, 1)
    onUpdate({
      id: item.id,
      data: {
        ...item,
        options: optionList
      }
    })
  }, [options, item])
  const onAddOption = useCallback(() => {
    const optionList = [...options, '']
    onUpdate({
      id: item.id,
      data: {
        ...item,
        options: optionList
      }
    })
  }, [options, item])

  return (
    <div className="pfb-options-container">
      {options.map((option, i) => (
        <div className="pfb-option-row">
          <div className="square" />
          <input
            key={i}
            type="text"
            className="title h6"
            placeholder="Option"
            value={option}
            onChange={e => onChangeOption(e.target.value ?? '', i)}
          />
          <MdiIcon path={mdiClose} onClick={() => onRemoveOption(i)} />
        </div>
      ))}

      <div className="pfb-option-add" onClick={onAddOption}>
        Add Option
      </div>

    </div>
  )
}

export const MultiselectItem = withEditingWrapper(MultiselectItemContent)