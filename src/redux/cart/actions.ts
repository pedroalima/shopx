import { ProductType } from "../../components/card";

export const addProduct = (payload: ProductType ) => ({
	type: "cart/addProduct",
	payload,
});

export const removeProduct = (payload: ProductType) => ({
	type: "cart/removeProduct",
	payload,
});