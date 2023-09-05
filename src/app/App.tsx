import { Header } from "../components/header";
import { Cart } from "../features/cart";
import { Inventory } from "../features/inventory";

function App() {
	return (
		<>
			<Header />
			<Inventory />
			<Cart />
		</>
	);
}

export default App;