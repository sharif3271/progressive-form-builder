import { FC, useCallback, useMemo } from "react"
import { IFormMultiselect } from "../../types/form.type"
import { ItemProps } from "./prop.type"
import { withEditingWrapper } from "../../hoc"
import { MdiIcon } from "../MdiIcon"
import { mdiClose } from "@mdi/js"
import { useContextSelector } from "../../context"
import { CheckBox } from "../elements"


export const MultiselectItemContent: FC<ItemProps<IFormMultiselect>> = ({ item, onUpdate }) => {

  const options = useMemo(() => item.options ?? [], [item.options])
  const isView = useContextSelector(s => s.isView)

  // Creating & Editing
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
  const isCheckedOption = useMemo(() => {
    return item.value?.reduce((acc, a) => ({ ...acc, [a]: true }), {} as Record<string, boolean>) ?? {}
  }, [item.value])
  const onToggleOption = useCallback((option: string) => {
    if (item.value?.includes(option)) {
      onUpdate({
        id: item.id,
        data: {
          ...item,
          value: item.value.filter(so => so !== option)
        }
      })
    } else {
      onUpdate({
        id: item.id,
        data: {
          ...item,
          value: [...(item.value ?? []), option]
        }
      })
    }
  }, [item.value, onUpdate])

  if (!isView) return (
    <div className="pfb-options-container">
      {options.map((option, i) => (
        <div className="pfb-option-row" key={i}>
          <div className="square" />
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
        <CheckBox
          key={i}
          label={option}
          isChecked={isCheckedOption[option]}
          toggleCheck={() => onToggleOption(option)}
        />
      ))}
    </div>
  )
}

export const MultiselectItem = withEditingWrapper(MultiselectItemContent)