import React, { FC, createContext, useReducer, Dispatch, useMemo, useContext, useCallback } from "react"
import { FormObjectModelStore } from "../types/form.type"
import { ActionTypes, PayloadType, reducer, StoreAction } from './reducer'

export type AppContext = {
  store: FormObjectModelStore;
  dispatch: Dispatch<StoreAction>
}

export const FormContext = createContext({} as AppContext)

export const FormContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {

  const [store, dispatch] = useReducer(reducer, { itemsObject: {} } as FormObjectModelStore, (s) => s)

  return (
    <FormContext.Provider
      value={{
        store,
        dispatch
      }}
    >
      {children}
    </FormContext.Provider>
  )
}





// Simple Selector
function contextSelectorCreator() {
  return function <T>(selectorFN: (s: FormObjectModelStore) => T): T {
    const { store } = useContext(FormContext)
    return useMemo(() => selectorFN(store), [store, selectorFN])
  }
}
export const useContextSelector = contextSelectorCreator()




// Simple Action Dispatcher
function contextUpdateCreator<T extends ActionTypes>(type: T) {
  return function () {
    const { dispatch } = useContext(FormContext)
    return useCallback(
      (payload: PayloadType<T>) => {
        dispatch({ type, payload } as StoreAction)
      }
      , [dispatch]
    )
  }
}
export const useUpdateTitle = contextUpdateCreator(ActionTypes.UPDATE_TITLE)
export const useUpdateDescription = contextUpdateCreator(ActionTypes.UPDATE_DESCRIPTION)
export const useUpdateItem = contextUpdateCreator(ActionTypes.UPDATE_ITEM)