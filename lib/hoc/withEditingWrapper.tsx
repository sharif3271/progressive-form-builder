import { FC, useMemo } from "react"
import { ItemProps } from "../components/items/prop.type"
import React from "react"
import { FormItem, FormItemType, IFormItemBase } from "../types/form.type"
import { MdiIcon, SwitchToggle } from "../components"
import { mdiClose } from "@mdi/js"



export function withEditingWrapper<T extends IFormItemBase>(ItemComponent: FC<ItemProps<T>>): FC<ItemProps<T>> {
  return ({ item, onUpdate, onRemove }: React.ComponentProps<typeof ItemComponent>) => {

    const itemTypeText = useMemo(() => {
      switch (item.type) {
        case FormItemType.INPUT:
          return 'Input'
        case FormItemType.TEXTBOX:
          return 'Textbox'
        case FormItemType.MULTISELECT:
          return 'Multi-select'
        case FormItemType.SINGLESELECT:
          return 'Single-select'
        case FormItemType.DROPDOWN:
          return 'Dropdown'
        case FormItemType.DATE:
          return 'Date'
        case FormItemType.FILE:
          return 'File'
        default:
          return ''
      }
    }, [])

    return (
      <div className="pfb-item-container">
        <div className="pfb-question-head">
          <input
            type="text"
            className="title h4"
            placeholder="Title"
            value={item.title ?? ''}
            onChange={(e) => onUpdate({
              id: item.id,
              data: { ...(item as FormItem), title: e.target?.value ?? '' }
            })}
          />
          <textarea
            className="description h6"
            placeholder="Description"
            value={item.description ?? ''}
            onChange={(e) => onUpdate({
              id: item.id,
              data: { ...(item as FormItem), description: e.target?.value ?? '' }
            })}
          />
        </div>

        <ItemComponent item={item} onRemove={onRemove} onUpdate={onUpdate} />

        <div className="pfb-question-footer">
          <span style={{ fontStyle: 'italic', color: 'var(--color-gray3)' }}>Type:  {itemTypeText}</span>
          <div style={{ flex: 1 }} />
          <span style={{ marginRight: 8 }}>Is required? </span>
          <SwitchToggle active={item.isRequired} onToggle={() => {
            onUpdate({
              id: item.id,
              data: { ...(item as FormItem), isRequired: !item.isRequired }
            })
          }} />
        </div>

        <div className="pfb-question-close" onClick={() => onRemove({ id: item.id })}>
          <MdiIcon path={mdiClose} />
        </div>

      </div>
    )
  }
}