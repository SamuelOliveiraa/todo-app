import { Item, ListType } from "../../Types/Item";
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
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case actions.REMOVE_LIST:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    case actions.UPDATE_CHECK:
      const newArray = [...state.list];
      newArray.map((item: Item, index:number) => {
        if(item.id === action.payload){
          newArray[index].check = !newArray[index].check 
        }
      })
      return {
        ...state,
        list: newArray,
      };
    case actions.UPDATE_LIST:
      return action.payload
    default:
      return state;
  }
};
