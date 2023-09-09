import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { CartItemsWrapper, CartWrapper, TotalPrice } from "./style";

export const Cart = () => {
	const { id, name, price } = useSelector((rootReducer: RootState) => rootReducer.cartReducer);
	console.log({id, name, price});
	return (
		<CartWrapper>
			<CartItemsWrapper id={id}>
				<span>{name} </span><span>R$ {price}</span>
			</CartItemsWrapper>
			<TotalPrice><span>Total : </span><strong>R$ ???,??</strong></TotalPrice>
		</CartWrapper>
	);
};
