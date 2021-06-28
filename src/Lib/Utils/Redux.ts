import {AnyAction} from 'redux';

export const isSameAction = <T extends AnyAction>(
  action1: T,
  action2: AnyAction,
): action2 is T => action1.type === action2.type;
