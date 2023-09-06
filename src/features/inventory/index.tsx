import { Card } from "../../components/card";
import { inventoryData } from "../../utils/data";
import { InventoryWrapper } from "./style";

export const Inventory = () => {
	return (
		<InventoryWrapper>
			{inventoryData.map(item => (
				<Card key={item.id} item={item} />
			))}
		</InventoryWrapper>
	);
};