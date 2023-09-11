import { useDispatch } from "react-redux";
import * as S from "./style";
import { addProduct } from "../../redux/cart/actions";

export type ProductType = {
	id: number;
	name: string;
	price: number;
	img: string;
};

export const Card = ({ product } : { product: ProductType}) => {
	const { name, price, img } = product;
	
	const dispatch = useDispatch();

	const handleAddProductClick = () => {
		dispatch(addProduct(product));
	};

	return (
		<S.CardWrapper>
			<S.ImageWrapper>
				<S.ImageInventory src={img} alt={name} />
			</S.ImageWrapper>
			<S.TitleWrapper>{name}</S.TitleWrapper>
			<S.PriceWrapper>{price}</S.PriceWrapper>
			<S.Button onClick={handleAddProductClick}>Add to Cart</S.Button>
		</S.CardWrapper>
	);
};
