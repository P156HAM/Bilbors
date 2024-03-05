import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducers";
import filterReducer from "./reducers/filterReducers";

const rootReducer = combineReducers({
  cart: cartReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
