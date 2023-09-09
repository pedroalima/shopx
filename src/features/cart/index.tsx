import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { CartItemsWrapper, CartWrapper, TotalPrice } from "./style";

interface ProductType {
	id: string | number,
	name: string,
	price: string | number,
	img: string,
}

export const Cart = () => {
	const { products } : {products: []} = useSelector((rootReducer: RootState) => rootReducer.cartReducer);
	console.log({products});
	return (
		<CartWrapper>
			{products && products.map((product: ProductType, i: number) => (
				<CartItemsWrapper key={i}>
					<span>{product.name}</span> <span>R$ {product.price}</span>
				</CartItemsWrapper>
			))}
			<TotalPrice><span>Total : </span><strong>R$ ???,??</strong></TotalPrice>
		</CartWrapper>
	);
};
