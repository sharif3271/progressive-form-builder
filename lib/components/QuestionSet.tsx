import { FC } from "react"
import { useContextSelector, useDeleteItem, useUpdateItem } from "../context"
import { FormItemType } from "../types/form.type"
import { InputItem, CustomItem, DateItem, DropdownItem, MultiselectItem, SingleSelectItem, TextboxItem } from './items'



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
          default:
            return null
        }
      })}
    </>
  )
}