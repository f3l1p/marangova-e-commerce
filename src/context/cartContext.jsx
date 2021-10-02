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
	const clearCart = () => setCart([]);

	// Remover el item del carrito
	const removeItem = (itemId) => {
		const cartFilter = cart.filter((el) => el.item.id !== itemId);
		setCart(cartFilter);
	};

	//Cantidad de items en el carrito
	const productsInCart = () => {
		return cart.reduce((acum, element) => acum + element.quantity, 0);
	};

	const totalPrice = () => {
		return cart.reduce(
			(acum, element) => acum + element.quantity * element.item.price,
			0
		);
	};

	console.log(cart);
	return (
		<CartContext.Provider
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
		</CartContext.Provider>
	);
};
