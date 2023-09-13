export interface ProductType {
	id: number,
	name: string,
	price: number,
	img: string,
	quantity: number,
}

interface CartActionType {
	type: "cart/addProduct" | "cart/removeProduct" | "cart/productPlus" | "cart/productMinus",
    payload: ProductType,
}

type CartStateType = {
	products: ProductType[]
}

const initialState = {
	products: []
};

export const cartReducer = (state: CartStateType = initialState , action: CartActionType) => {
	// Verifica se o produto já existe
	const productIsAlready = state.products.some((product) => product.id === action.payload.id);

	switch(action.type) {
	case "cart/addProduct":
		// se existir, aumentar a quantidade em 1
		if (productIsAlready) {
			return {
				// retorne todo state
				...state,
				// alterando products
				products: state.products.map( product => // iterando sobre cada product
					product.id === action.payload.id // se o id do product for igual ao do clicado
						? { ...product, quantity: product.quantity + 1} 
						: product
				)
			};
		}
		// se não existir, apenas adicione
		return {
			...state,
			products: [...state.products, {...action.payload, quantity: 1 }]
		};
	case "cart/productPlus":
		// aumentando a quantidade do product em 1
		return {
			// retorne todo state
			...state, 
			// alterando products
			products: state.products.map(product => // iterando sobre cada product
				product.id === action.payload.id // se o id do product for igual ao do clicado
					? { ...product, quantity: product.quantity + 1 } // sim, aumente a quantidade em 1
					: product // não, mantenha a quantidade
			)
		};
	case "cart/productMinus":
		// reduzindo a quantidade do product em 1 e rederizando apenas os maiores que zero
		return {
			// retorne todo state
			...state,
			// alterando products
			products: state.products.map(product => // iterando sobre cada product
				product.id === action.payload.id // se o id do product for igual ao do clicado
					? { ...product, quantity: product.quantity - 1 } // sim, reduz a quantidade em 1
					: product // não, mantenha a quantidade
			).filter(product => product.quantity > 0) // retorne apenas os product maiores que zero
		};
	case "cart/removeProduct":
		// removendo produto (product) do carrinho (cart)
		return {
			...state,
			products: state.products.filter(product => product.id !== action.payload.id), // se o id do produto for igual ao do component clicado retire do array
		};
	default:
		return state;
	}
};