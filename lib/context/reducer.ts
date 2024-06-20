import { FormObjectModelStore } from '../types/form.type'
import { AppUtils } from '../utils';

export enum ActionTypes {
  UPDATE_TITLE,
  UPDATE_DESCRIPTION,
  UPDATE_ITEM,
}
export type PayloadType<T extends ActionTypes> = 
  T extends ActionTypes.UPDATE_TITLE ? FormObjectModelStore['title'] :
  T extends ActionTypes.UPDATE_DESCRIPTION ? FormObjectModelStore['description'] :
  T extends ActionTypes.UPDATE_ITEM ? Extract<FormObjectModelStore['itemsObject'][string], { id: string }> :
  never;

type StoreActionBase<T extends ActionTypes> = {
  type: T;
  payload: PayloadType<T>
}

export type StoreAction = StoreActionBase<ActionTypes.UPDATE_TITLE> | StoreActionBase<ActionTypes.UPDATE_DESCRIPTION> | StoreActionBase<ActionTypes.UPDATE_ITEM>



export function reducer(state: FormObjectModelStore, action: StoreAction) {
  switch (action.type) {
    case ActionTypes.UPDATE_TITLE:
      return { ...state, title: action.payload }
    case ActionTypes.UPDATE_DESCRIPTION:
      return { ...state, description: action.payload }
    case ActionTypes.UPDATE_ITEM:
      return { ...state, itemsObject: {...state.itemsObject, [AppUtils.uniqueIdGenerate()]: action.payload } }
    default:
      return state
  }
}
