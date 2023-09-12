import { ProductType } from "../../components/card";

export const addProduct = (payload: ProductType ) => ({
	type: "cart/addProduct",
	payload,
});

export const productPlus = (payload: ProductType ) => ({
	type: "cart/productPlus",
	payload,
});

export const productMinus = (payload: ProductType ) => ({
	type: "cart/productMinus",
	payload,
});

export const removeProduct = (payload: ProductType) => ({
	type: "cart/removeProduct",
	payload,
});