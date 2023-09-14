// Style
import * as S from "./style";
import { Icon, Button, Box } from "@mui/material";
// Types
import { ProductType } from "../../redux/cart/reducer";
// Resources
import { productMinus, productPlus, removeProduct } from "../../redux/cart/actions";
import { useDispatch } from "react-redux";
import { currencyBR } from "../../utils/localCurrency";


export const CartItem = ({ product } : { product: ProductType}) => {
	const dispatch = useDispatch();

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
		<S.CartItemsWrapper>
			<span>{product.name}</span>

			<Box>
				<Button 
					size="small" 
					color="warning" 
					onClick={()=> handleProductMinus(product)}>
					<Icon>remove</Icon>
				</Button>
				<span>{product.quantity}</span>
				<Button
					size="small" 
					color="success" 
					onClick={()=> handleProductPlus(product)}>
					<Icon>add</Icon>
				</Button>
			</Box>
                        
			<Button 
				size="small" 
				color="error" 
				onClick={()=> handleRemoveProduct(product)}>
				<Icon>close</Icon>
			</Button>
                        
			<span>{currencyBR(product.price)} ( {currencyBR((product.price * product.quantity))} )</span>
		</S.CartItemsWrapper>
	);
};