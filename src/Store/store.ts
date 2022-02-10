import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import CartReducer from "./List/reducer";
import ThemeReducer from "./Theme/reducer";

const rootReducer = combineReducers({
  list: CartReducer,
  theme: ThemeReducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  rootReducer
);

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
