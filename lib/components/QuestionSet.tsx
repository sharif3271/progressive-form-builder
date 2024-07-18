import { FC } from "react"
import { useContextSelector, useDeleteItem, useUpdateItem } from "../context"
import { FormItemType } from "../types/form.type"
import { InputItem, DateItem, DropdownItem, MultiselectItem, SingleSelectItem, TextboxItem, FileItem } from './items'



export const QuestionSet: FC = () => {

  const items = useContextSelector(s => Object.values(s.itemsObject))
  const onUpdateItem = useUpdateItem()
  const onRemoveItem = useDeleteItem()

  return (
    <>
      {items.map(i => {
        switch (i.type) {
          case FormItemType.INPUT:
            return <InputItem key={i.id} item={i} onUpdate={onUpdateItem} onRemove={onRemoveItem} />
          case FormItemType.TEXTBOX:
            return <TextboxItem key={i.id} item={i} onUpdate={onUpdateItem} onRemove={onRemoveItem} />
          case FormItemType.MULTISELECT:
            return <MultiselectItem key={i.id} item={i} onUpdate={onUpdateItem} onRemove={onRemoveItem} />
          case FormItemType.SINGLESELECT:
            return <SingleSelectItem key={i.id} item={i} onUpdate={onUpdateItem} onRemove={onRemoveItem} />
          case FormItemType.DROPDOWN:
            return <DropdownItem key={i.id} item={i} onUpdate={onUpdateItem} onRemove={onRemoveItem} />
          case FormItemType.DATE:
            return <DateItem key={i.id} item={i} onUpdate={onUpdateItem} onRemove={onRemoveItem} />
          case FormItemType.FILE:
            return <FileItem key={i.id} item={i} onUpdate={onUpdateItem} onRemove={onRemoveItem} />
          default:
            return null
        }
      })}
    </>
  )
}