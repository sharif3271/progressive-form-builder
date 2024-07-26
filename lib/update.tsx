import { FC, useEffect } from "react";
import { FormObjectModelStore } from "./types/form.type";
import { useContextSelector, useInitStore, useUpdateIsView } from "./context";


export interface UpdateExternalProps {
  initialValue?: FormObjectModelStore;
  onChangeValue?: (value: FormObjectModelStore) => void;
  isView?: boolean;
}

export const UpdateExternal: FC<UpdateExternalProps> = ({ initialValue, onChangeValue, isView = false }) => {

  const initStore = useInitStore()
  const updateIsView = useUpdateIsView()
  const store = useContextSelector(s => ({
    title: s.title,
    description: s.description,
    itemsObject: s.itemsObject,
  }) as FormObjectModelStore)

  useEffect(() => {
    if (initialValue) initStore(initialValue)
  }, [])

  useEffect(() => {
    updateIsView(Boolean(isView))
  }, [isView])

  useEffect(() => {
    onChangeValue?.(store)
  }, [store])


  return null;
}