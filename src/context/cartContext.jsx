import React, { useState, createContext, useContext } from "react";

const cartContext = createContext([]);

export const useCartContext = () => {
	return useContext(cartContext);
};

export const CartContext = ({ children }) => {
	const [cartList, setCartList] = useState([]);

	function showProducts() {
		console.log(cartList);
	}

	return (
		<cartContext value={(cartList, setCartList, showProducts)}>
			{children}
		</cartContext>
	);
};
