// Style
import * as S from "./style";
import { useSelector } from "react-redux";
// Types
import { RootStateType } from "../../redux/root-reducer";
import { ProductType } from "../../redux/cart/reducer";
// Resources
import { selectTotalPrice } from "../../redux/cart/selector";
import { currencyBR } from "../../utils/localCurrency";
import { CartItem } from "../cartItem";

export const Cart = () => {
	const { products } : {products: ProductType[]} = useSelector((rootReducer: RootStateType) => rootReducer.cartReducer);
	const TotalPrice = useSelector(selectTotalPrice);
	
	return (
		<S.CartWrapper>
			{products && products.map((product: ProductType) => (
				<CartItem key={product.id} product={product} />
			))}
			<S.TotalPrice><span>Total : </span><strong>{currencyBR(TotalPrice)}</strong></S.TotalPrice>
		</S.CartWrapper>
	);
};
