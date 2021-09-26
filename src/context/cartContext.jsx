import React, { useState, createContext, useContext } from "react";

//Crear el contexto
const CartContext = createContext();

// crear el use context
export const UseCartContext = () => {
	return useContext(CartContext);
};

//Crear componente CONTEXT
export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	//Agregar item al carrito
	const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			const updateQuantity = [...cart];

			updateQuantity.map((element) => {
				if (element.item.id === item.id) {
					element.quantity += quantity;
				}
				return element;
			});
			return setCart(updateQuantity);
		} else {
			setCart([...cart, { item, quantity }]);
		}
	};

	//Evitar duplicados
	const isInCart = (id) => cart.find((el) => el.item.id === id);

	//Limpiar todo el carrito
	const clear = () => setCart([]);

	// Remover el item del carrito
	const removeItem = (itemId) => {
		const cartFilter = cart.filter((el) => el.item.id !== itemId);
		setCart(cartFilter);
	};

	console.log(cart);
	return (
		<CartContext.Provider value={{ cart, addItem, clear, removeItem }}>
			{children}
		</CartContext.Provider>
	);
};
