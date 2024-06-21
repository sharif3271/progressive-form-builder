import { FormItem } from '../../types/form.type'

export interface ItemProps<T extends FormItem> {
  item: T;
  onUpdate: (payload: {
    id: string;
    data: FormItem;
  }) => void;
  onRemove: (payload: {
    id: string;
  }) => void;
}