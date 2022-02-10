import { ListType } from "../../Types/Item";
import { actions } from "./actions";

type Action = {
  type: keyof typeof actions;
  payload?: any;
};

const INITIAL_VALUE: ListType = {
  list: [],
};

export default (state = INITIAL_VALUE, action: Action) => {
  switch (action.type) {
    case actions.ADD_LIST:
    /* let repeat = 0;
      state.cart.map((e) => {
        if (e.id === action.payload.id) {
          repeat = 1;
        }
      });
      if (repeat !== 1) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      } */
    case actions.REMOVE_LIST:
      return state;
    case actions.UPDATE_CHECK:
      return state;
      case actions.UPDATE_LIST:
        return state;
    default:
      return state;
  }
};
