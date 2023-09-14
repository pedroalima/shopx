// Style
import { Span } from "./style";
import { Icon, Box, IconButton } from "@mui/material";
// Types
import { ProductType } from "../../redux/cart/reducer";
// Resources
import { productMinus, productPlus, removeProduct } from "../../redux/cart/actions";
import { useDispatch } from "react-redux";
import { currencyBR } from "../../utils/localCurrency";

export const CartItem = ({ product } : { product: ProductType}) => {
	const dispatch = useDispatch();
	const subTotal = product.price * product.quantity;

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
		<Box 
			display="flex" 
			justifyContent="space-between" 
			alignItems="center"
			sx={{
				background: "#1d242c",
				borderRadius: "10px",
				p: "0.1rem 0.5rem"
			}}>
			<Box display="flex" justifyContent="space-between" alignItems="center" width="190px">
				<IconButton 
					size="small" 
					color="warning" 
					onClick={()=> handleProductMinus(product)}>
					<Icon fontSize="small">remove</Icon>
				</IconButton>
				<Box width="20px" display="flex" justifyContent="center" alignItems="center">
					<Span>{product.quantity}</Span>
				</Box>
				<IconButton
					size="small" 
					color="success" 
					onClick={()=> handleProductPlus(product)}>
					<Icon fontSize="small">add</Icon>
				</IconButton>
				<Box width="120px">
					<Span>{product.name}</Span>
				</Box>
				<IconButton 
					size="small" 
					color="error" 
					onClick={()=> handleRemoveProduct(product)}>
					<Icon fontSize="small">close</Icon>
				</IconButton>
			</Box>
			<Box display="flex" flexDirection="column" alignItems="center">
				<Span>{currencyBR(product.price)} </Span>
				{subTotal === product.price ? (
					<Span></Span>
				) : (
					<Span>( {currencyBR(subTotal)} )</Span>
				)}
			</Box>
		</Box>
	);
};