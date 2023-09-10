import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { CartItemsWrapper, CartWrapper, TotalPrice } from "./style";

interface ProductType {
	id: number,
	name: string,
	price: number,
	img: string,
	quantity: number,
}

export const Cart = () => {
	const { products } : {products: ProductType[]} = useSelector((rootReducer: RootState) => rootReducer.cartReducer);
	console.log({products});
	return (
		<CartWrapper>
			{products && products.map((product: ProductType, i: number) => (
				<CartItemsWrapper key={i}>
					<span>{product.quantity} {product.name}</span> <span>R$ {product.price} - ( {product.price * product.quantity} )</span>
				</CartItemsWrapper>
			))}
			<TotalPrice><span>Total : </span><strong>R$ ???,??</strong></TotalPrice>
		</CartWrapper>
	);
};
