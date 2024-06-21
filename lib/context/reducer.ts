import { FormItemType, FormObjectModelStore, IFormInput } from '../types/form.type'
import { AppUtils } from '../utils';

export enum ActionTypes {
  UPDATE_TITLE,
  UPDATE_DESCRIPTION,
  UPDATE_ITEM,
  ADD_ITEM,
  DELETE_ITEM,
}
export type PayloadType<T extends ActionTypes> =
  T extends ActionTypes.UPDATE_TITLE ? FormObjectModelStore['title'] :
  T extends ActionTypes.UPDATE_DESCRIPTION ? FormObjectModelStore['description'] :
  T extends ActionTypes.UPDATE_ITEM ? { id: string, data: Extract<FormObjectModelStore['itemsObject'][string], { id: string }> } :
  T extends ActionTypes.DELETE_ITEM ? { id: string } :
  T extends ActionTypes.ADD_ITEM ? void :
  never;

type StoreActionBase<T extends ActionTypes> = {
  type: T;
  payload: PayloadType<T>
}

export type StoreAction =
  StoreActionBase<ActionTypes.UPDATE_TITLE> |
  StoreActionBase<ActionTypes.UPDATE_DESCRIPTION> |
  StoreActionBase<ActionTypes.UPDATE_ITEM> |
  StoreActionBase<ActionTypes.DELETE_ITEM> |
  StoreActionBase<ActionTypes.ADD_ITEM>;



export function reducer(state: FormObjectModelStore, action: StoreAction): FormObjectModelStore {
  switch (action.type) {
    case ActionTypes.UPDATE_TITLE:
      return { ...state, title: action.payload }
    case ActionTypes.UPDATE_DESCRIPTION:
      return { ...state, description: action.payload }
    case ActionTypes.ADD_ITEM:
      const id = AppUtils.uniqueIdGenerate()
      return {
        ...state, itemsObject: {
          ...state.itemsObject, [id]: {
            id,
            isRequired: false,
            type: FormItemType.INPUT,
            title: ''
          } as IFormInput
        }
      }
    case ActionTypes.UPDATE_ITEM:
      return { ...state, itemsObject: { ...state.itemsObject, [action.payload.id]: action.payload.data } }
    case ActionTypes.DELETE_ITEM:
      const items = { ...state.itemsObject }
      delete items[action.payload.id]
      return { ...state, itemsObject: items }

    default:
      return state
  }
}
