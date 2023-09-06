import { Button, CardWrapper, ImageInventory, ImageWrapper, PriceWrapper, TitleWrapper } from "./style";

type ItemType = {
	id: number;
	name: string;
	price: number;
	img: string;
};

export const Card = ({ item } : { item: ItemType}) => {
	const { name, price, img } = item;
	return (
		<CardWrapper>
			<ImageWrapper>
				<ImageInventory src={img} alt={name} />
			</ImageWrapper>
			<TitleWrapper>{name}</TitleWrapper>
			<PriceWrapper>{price}</PriceWrapper>
			<Button>Add to Cart</Button>
		</CardWrapper>
	);
};
