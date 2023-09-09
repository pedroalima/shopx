interface CartSliceType {
	type: "cart/addProduct",
    payload: {
        id: string | number,
        name: string,
        price: string | number,
		img: string,
    }
}

const initialState = {
	products: [],
	totalPrice: 0
};

export const cartReducer = (state = initialState, action: CartSliceType) => {
	switch(action.type) {
	case "cart/addProduct":
		return {
			...state, 
			products: [...state.products, action.payload],
		};
	default:
		return state;
	}
};