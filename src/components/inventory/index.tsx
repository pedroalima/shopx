import { InventoryItem } from "../inventoryItem";
import { inventoryData } from "../../utils/data";
import * as S from "./style";

export const Inventory = () => {
	return (
		<S.InventoryWrapper>
			<S.InventoryList>
				{inventoryData.map(product => (
					<InventoryItem key={product.id} product={product} />
				))}
			</S.InventoryList>
		</S.InventoryWrapper>
	);
};