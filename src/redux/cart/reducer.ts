interface CartSliceType {
	type: "cart/addProduct",
    payload: {
        id: string | number,
        name: string,
        price: string | number,
    }
}

const initialState = {
	id: "",
	name: "",
	price: "",
};

export const cartReducer = (state = initialState, action: CartSliceType) => {
	switch(action.type) {
	case "cart/addProduct":
		return {
			...state, 
			id: action.payload.id,
			name: action.payload.name,
			price: action.payload.price,
		};
	default:
		return state;
	}
};