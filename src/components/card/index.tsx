import { Button, CardWrapper, ImageInventory, ImageWrapper, PriceWrapper, TitleWrapper } from "./style";
import Img from "../../../public/vite.svg";

export const Card = () => {
	return (
		<CardWrapper>
			<ImageWrapper>
				<ImageInventory src={Img} alt="proto" />
			</ImageWrapper>
			<TitleWrapper>Title</TitleWrapper>
			<PriceWrapper>Price</PriceWrapper>
			<Button>Add to Cart</Button>
		</CardWrapper>
	);
};
