import React, { useState, createContext, useContext } from "react";

//Crear el contexto
const SearchContext = createContext();

// crear el use context
export const UseSearchContext = () => {
	return useContext(SearchContext);
};

//Crear componente CONTEXT
export const SearchContextProvider = ({ children }) => {
	const [search, setSearch] = useState([]);

	//Limpiar todo el carrito
	const clearSearch = () => setCart([]);

	return (
		<SearchContext.Provider
			value={{
				cart,
				addItem,
				clearCart,
				removeItem,
				productsInCart,
				totalPrice,
			}}
		>
			{children}
		</SearchContext.Provider>
	);
};
