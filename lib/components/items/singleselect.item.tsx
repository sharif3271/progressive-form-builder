import { FC, useCallback, useMemo } from "react"
import { IFormSingleSelect } from "../../types/form.type"
import { ItemProps } from "./prop.type"
import { withEditingWrapper } from "../../hoc"
import { mdiClose } from "@mdi/js"
import { MdiIcon } from "../MdiIcon"
import { useContextSelector } from "../../context"
import { Radio } from "../elements"


export const SingleSelectItemContent: FC<ItemProps<IFormSingleSelect>> = ({ item, onUpdate }) => {

  const options = useMemo(() => item.options ?? [], [item.options])
  const isView = useContextSelector(s => s.isView)

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

  // Filling the Form
  const onClickOption = useCallback((option: string) => {
    onUpdate({
      id: item.id,
      data: {
        ...item,
        value: option
      }
    })
  }, [item.value, onUpdate])

  if (!isView) return (
    <div className="pfb-options-container">
      {options.map((option, i) => (
        <div className="pfb-option-row" key={i}>
          <div className="circle" />
          <input
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

  return (
    <div className="pfb-options-container" style={{ gap: 0 }}>
      {options.map((option, i) => (
        <Radio
          key={i}
          label={option}
          isActive={item.value === option}
          onClick={() => onClickOption(option)}
        />
      ))}
    </div>
  )
}

export const SingleSelectItem = withEditingWrapper(SingleSelectItemContent)