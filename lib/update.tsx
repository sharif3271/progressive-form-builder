import { FC, useEffect } from "react";
import { FormObjectModelStore } from "./types/form.type";
import { useContextSelector, useInitStore } from "./context";


export interface UpdateExternalProps {
  initialValue?: FormObjectModelStore;
  onChangeValue?: (value: FormObjectModelStore) => void;
}

export const UpdateExternal: FC<UpdateExternalProps> = ({ initialValue, onChangeValue }) => {

  const initStore = useInitStore()
  const store = useContextSelector(s => ({
    title: s.title,
    description: s.description,
    itemsObject: s.itemsObject,
  }) as FormObjectModelStore)

  useEffect(() => {
    if (initialValue) initStore(initialValue)
  }, [])

  useEffect(() => {
    onChangeValue?.(store)
  }, [store])


  return null;
}