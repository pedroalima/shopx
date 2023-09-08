import { Card } from "../../components/card";
import { RootState } from "../../redux/root-reducer";
import { inventoryData } from "../../utils/data";
import { InventoryWrapper } from "./style";
import { useSelector } from "react-redux/es/exports";

export const Inventory = () => {
	const { currentUser } = useSelector((rootReducer: RootState) => rootReducer.userReducer);
	console.log({currentUser});
	return (
		<InventoryWrapper>
			{inventoryData.map(item => (
				<Card key={item.id} item={item} />
			))}
		</InventoryWrapper>
	);
};