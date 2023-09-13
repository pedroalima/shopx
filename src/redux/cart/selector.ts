import { RootStateType } from "../root-reducer";

export const selectTotalPrice = (rootReducer: RootStateType) => {
	return rootReducer.cartReducer.products.reduce(
		(acc, curr) => acc + curr.price * curr.quantity, 0
	);
};