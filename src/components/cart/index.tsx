import * as S from "./style";
import { useDispatch, useSelector } from "react-redux";
import { productMinus, productPlus, removeProduct } from "../../redux/cart/actions";
import { RootStateType } from "../../redux/root-reducer";
import { ProductType } from "../../redux/cart/reducer";
import { selectTotalPrice } from "../../redux/cart/selector";
import { currencyBR } from "../../utils/localCurrency";

export const Cart = () => {
	const dispatch = useDispatch();
	const { products } : {products: ProductType[]} = useSelector((rootReducer: RootStateType) => rootReducer.cartReducer);
	const TotalPrice = useSelector(selectTotalPrice);

	const handleRemoveProduct = (product: ProductType) => {
		dispatch(removeProduct(product));
	};

	const handleProductPlus = (product: ProductType) => {
		dispatch(productPlus(product));
	};

	const handleProductMinus = (product: ProductType) => {
		dispatch(productMinus(product));
	};
	
	return (
		<S.CartWrapper>
			{products && products.map((product: ProductType, i: number) => (
				<S.CartItemsWrapper key={i}>
					<span>{product.name}</span>
					<S.CartItemsQuantityWrapper> 
						<button 
							onClick={()=> handleProductMinus(product)}>-</button>
						<span>{product.quantity}</span>
						<button 
							onClick={()=> handleProductPlus(product)}>+</button>
					</S.CartItemsQuantityWrapper>
					<button 
						onClick={()=> handleRemoveProduct(product)}>X</button>
					<span>{currencyBR(product.price)} ( {currencyBR((product.price * product.quantity))} )</span>
				</S.CartItemsWrapper>
			))}
			<S.TotalPrice><span>Total : </span><strong>{currencyBR(TotalPrice)}</strong></S.TotalPrice>
		</S.CartWrapper>
	);
};
