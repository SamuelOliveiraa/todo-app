import { ListType } from "../../Types/Item";
import { actions } from "./actions";

type Action = {
  type: keyof typeof actions;
  payload?: any;
};


export default (state = true, action: Action) => {
  switch (action.type) {
    case actions.TOGGLE_THEME:
      return !state;
    default:
      return state;
  }
};
