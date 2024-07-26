import { FC, useCallback, useMemo } from "react"
import { IFormDropdown } from "../../types/form.type"
import { ItemProps } from "./prop.type"
import { withEditingWrapper } from "../../hoc"
import { mdiChevronDown, mdiClose } from "@mdi/js"
import { MdiIcon } from "../MdiIcon"
import { useContextSelector } from "../../context"
import { Select } from "../elements"


export const DropdownItemContent: FC<ItemProps<IFormDropdown>> = ({ item, onUpdate }) => {

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

  if (!isView) return (
    <>
      <div className="pfb-dropdown-shape">
        <p>Select an Option</p>
        <MdiIcon path={mdiChevronDown} />
      </div>
      <div className="pfb-options-container">
        {options.map((option, i) => (
          <div className="pfb-option-row" key={i}>
            <div />
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
    </>
  )

  return (
    <>
      <Select
        options={item.options ?? []}
        value={item.value ?? ''}
        onChange={(v) => {
          onUpdate({
            id: item.id,
            data: {
              ...item,
              value: v
            }
          })
        }}
      />
    </>
  )
}

export const DropdownItem = withEditingWrapper(DropdownItemContent)