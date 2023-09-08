import { userReducer } from "./user/reducer";
import { cartReducer } from "./cart/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
	userReducer,
	cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>