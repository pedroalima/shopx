import { Card } from "../../components/card";
import { inventoryData } from "../../utils/data";
import * as S from "./style";

export const Inventory = () => {
	return (
		<S.InventoryWrapper>
			<S.InventoryList>
				{inventoryData.map(item => (
					<Card key={item.id} item={item} />
				))}
			</S.InventoryList>
		</S.InventoryWrapper>
	);
};