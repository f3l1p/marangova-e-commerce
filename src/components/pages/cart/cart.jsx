import React from "react";
//import cartContext from "../../../context/cartContext";

const Cart = ({ condition = false }) => {
	if (!condition) {
		return <h1>No se puede ver el cart</h1>;
	}

	return (
		<section style={{ margin: "80px", textAlign: "center" }}>
			<h1>CARRITO</h1>
		</section>
	);
};

export default Cart;

/*
{cart.map((el) => {
				return <></>;
			})}
{Element.item.name}
<button onClick={() => removeItem(element.item.id)}>
							Quiter Item
						</button>*/
