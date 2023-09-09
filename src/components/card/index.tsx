import { useDispatch } from "react-redux";
import * as S from "./style";

type ItemType = {
	id: number;
	name: string;
	price: number;
	img: string;
};

export const Card = ({ item } : { item: ItemType}) => {
	const { name, price, img } = item;
	
	const dispatch = useDispatch();

	const handleAddProductClick = () => {
		dispatch({
			type: "cart/addProduct",
			payload: item
		});
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
