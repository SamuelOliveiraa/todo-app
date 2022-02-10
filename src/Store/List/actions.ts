import { Item, ListType } from "../../Types/Item";

export const actions = {
  ADD_LIST: "ADD_CART",
  REMOVE_LIST: "REMOVE_CART",
  UPDATE_CHECK: "UPDATE_CHECK",
  UPDATE_LIST: "UPDATE_LIST",
};

export function ADD_LIST(text: string) {
  return {
    type: actions.ADD_LIST,
    payload: text,
  };
}

export function REMOVE_LIST(id: number) {
  return {
    type: actions.REMOVE_LIST,
    payload: id,
  };
}
export function UPDATE_CHECK(id: number) {
  return {
    type: actions.UPDATE_CHECK,
    payload: id,
  };
}
export function UPDATE_LIST(list: ListType) {
  return {
    type: actions.UPDATE_LIST,
    payload: list,
  };
}
