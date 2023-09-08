import { userReducer } from "./user/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
	userReducer,
});