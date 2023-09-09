import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface Product {
    id: number, 
    name: string, 
    price: number,
}

type StoreContextType = {
    cart: Product[],
    setCart: Dispatch<SetStateAction<Product[]>>
}

export const StoreContext = createContext<StoreContextType>({} as StoreContextType);

export const StoreProvider = ({ children } : { children: ReactNode}) => {
	const [ cart, setCart ] = useState<Product[] | []>([]);

	return (
		<StoreContext.Provider value={{
			cart,
			setCart,
		}}>
			{children}
		</StoreContext.Provider>
	);
};