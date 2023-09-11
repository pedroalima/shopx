import { Card } from "../../components/card";
import { inventoryData } from "../../utils/data";
import * as S from "./style";

export const Inventory = () => {
	return (
		<S.InventoryWrapper>
			<S.InventoryList>
				{inventoryData.map(product => (
					<Card key={product.id} product={product} />
				))}
			</S.InventoryList>
		</S.InventoryWrapper>
	);
};