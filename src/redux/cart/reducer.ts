interface ProductType {
	id: number,
	name: string,
	price: number,
	img: string,
	quantity: number,
}

interface CartActionType {
	type: "cart/addProduct",
    payload: ProductType,
}

type CartStateType = {
	products: ProductType[],
	totalPrice:number,
}

const initialState = {
	products: [],
	totalPrice: 0
};

export const cartReducer = (state: CartStateType = initialState , action: CartActionType) => {
	// Verifica se o produto já existe
	const productIsAlready = state.products.some((product) => product.id === action.payload.id);

	switch(action.type) {
	case "cart/addProduct":
		// se existir aumentar a quantidade em 1
		if (productIsAlready) {
			return {
				...state,
				products: state.products.map(
					product => product.id === action.payload.id 
						? { ...product, quantity: product.quantity + 1} 
						: product
				),
			};
		}
		// se não existir, apenas adiciona-lo
		return {
			...state,
			products: [...state.products, {...action.payload, quantity: 1 }]
		};
	default:
		return state;
	}
};