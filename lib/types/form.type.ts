export enum FormItemType {
  CUSTOM,
  INPUT,
  TEXTBOX,
  MULTISELECT,
  DROPDOWN,
  SINGLESELECT,
  DATE,
  FILE,
}

export interface IFormItemBase {
  title?: string;
  description?: string;
  type: FormItemType;
  isRequired: boolean;
  id: string;
}

export interface IFormInput extends IFormItemBase {
  type: FormItemType.INPUT;
  value: string;
}
export interface IFormTextbox extends IFormItemBase {
  type: FormItemType.TEXTBOX;
  value: string;
}
export interface IFormMultiselect extends IFormItemBase {
  type: FormItemType.MULTISELECT;
  value: string[];
  options?: string[];
}
export interface IFormDropsown extends IFormItemBase {
  type: FormItemType.DROPDOWN;
  value: string[];
  options?: string[];
}
export interface IFormSingleSelect extends IFormItemBase {
  type: FormItemType.SINGLESELECT;
  value: string;
  options?: string[];
}
export interface IFormDate extends IFormItemBase {
  type: FormItemType.DATE;
  value: string;
}
export interface IFormFile extends IFormItemBase {
  type: FormItemType.FILE;
  value: string;
  extension: string;
}
export interface IFormCustom extends IFormItemBase {
  type: FormItemType.CUSTOM;
}

export type FormItem =
  IFormInput 
  | IFormTextbox 
  | IFormMultiselect 
  | IFormSingleSelect 
  | IFormDropsown
  | IFormDate
  | IFormFile
  | IFormCustom

export type FormObjectModel = {
  title?: string;
  description?: string;
  items: FormItem[];
}

export type FormObjectModelStore = {
  title?: string;
  description?: string;
  itemsObject: Record<string, FormItem>
}