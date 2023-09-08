import { CartItemsWrapper, CartWrapper, TotalPrice } from "./style";

export const Cart = () => {
	return (
		<CartWrapper>
			<CartItemsWrapper>
				<span>Product </span><span>R$ ??,??</span>
			</CartItemsWrapper>
			<TotalPrice><span>Total : </span><strong>R$ ???,??</strong></TotalPrice>
		</CartWrapper>
	);
};
