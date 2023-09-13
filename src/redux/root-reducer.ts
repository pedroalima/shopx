import { userReducer } from "./user/reducer";
import { cartReducer } from "./cart/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
	userReducer,
	cartReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>