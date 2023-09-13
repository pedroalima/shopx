import { Header } from "../components/header";
import { Cart } from "../components/cart";
import { Inventory } from "../components/inventory";

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