import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import * as S from "./style";
import { productPlus, removeProduct } from "../../redux/cart/actions";

interface ProductType {
	id: number,
	name: string,
	price: number,
	img: string,
	quantity: number,
}

export const Cart = () => {
	const { products, totalPrice } : {products: ProductType[], totalPrice: number} = useSelector((rootReducer: RootState) => rootReducer.cartReducer);
	const dispatch = useDispatch();

	const handleRemoveProduct = (product: ProductType) => {
		dispatch(removeProduct(product));
	};

	const handleProductPlus = (product: ProductType) => {
		dispatch(productPlus(product));
	};
	
	return (
		<S.CartWrapper>
			{products && products.map((product: ProductType, i: number) => (
				<S.CartItemsWrapper key={i}>
					<S.CartItemsQuantityWrapper> 
						<button>-</button>
						<span>{product.quantity}</span>
						<button onClick={()=> handleProductPlus(product)}>+</button>
						<span>{product.name}</span>
					</S.CartItemsQuantityWrapper>
					<button onClick={()=> handleRemoveProduct(product)}>X</button>
					<span>R$ {product.price} - ( {product.price * product.quantity} )</span>
				</S.CartItemsWrapper>
			))}
			<S.TotalPrice><span>Total : </span><strong>R$ {totalPrice}</strong></S.TotalPrice>
		</S.CartWrapper>
	);
};
