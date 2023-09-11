import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { CartItemsWrapper, CartWrapper, TotalPrice } from "./style";
import { removeProduct } from "../../redux/cart/actions";

interface ProductType {
	id: number,
	name: string,
	price: number,
	img: string,
	quantity: number,
}

export const Cart = () => {
	const { products } : {products: ProductType[]} = useSelector((rootReducer: RootState) => rootReducer.cartReducer);
	const dispatch = useDispatch();

	const handleRemoveProduct = (product: ProductType) => {
		dispatch(removeProduct(product));
	};
	
	console.log({products});
	return (
		<CartWrapper>
			{products && products.map((product: ProductType, i: number) => (
				<CartItemsWrapper key={i}>
					<span>{product.quantity} - {product.name}</span>
					<button onClick={()=> handleRemoveProduct(product)}>X</button>
					<span>R$ {product.price} - ( {product.price * product.quantity} )</span>
				</CartItemsWrapper>
			))}
			<TotalPrice><span>Total : </span><strong>R$ ???,??</strong></TotalPrice>
		</CartWrapper>
	);
};
