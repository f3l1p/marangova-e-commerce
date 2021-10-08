import React, { useState } from "react";
import "./cart.scss";

import { Link } from "react-router-dom";
import { Row, Col, Divider, Empty, Button, Alert } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import ItemCount from "../../item/itemCount/itemCount";
import OrderSummary from "./orderSummary/orderSummary";
import { UseCartContext } from "../../../context/cartContext";
import { getFirestore } from "../../../services/getFirebase";
import "firebase/firestore";

const Cart = ({ item }) => {
	const { cart, clearCart, removeItem, totalPrice } = UseCartContext();
	const [quantity, setQuantity] = useState(1);
	const { addItem } = UseCartContext();
	const [formData, setFormData] = useState({
		name: "",
		tel: "",
		email: "",
	});

	// function onChangeValue(value) {
	// 	setQuantity(value);
	// 	addItem(item, value);
	// }

	// const onAdd = (qty) => {
	// 	addItem(item, qty);
	// };

	const handleOnSubmit = (e) => {
		e.preventDefault();

		let order = {};

		//order.date = firebase.getFirestore.Timestap.fromDate(new Date());

		order.buyer = formData;

		order.total = totalPrice();

		order.items = cart.map((cartItem) => {
			const id = cartItem.item.id;
			const title = cartItem.item.title;
			const price = cartItem.item.price * cartItem.quantity;

			return { id, title, price };
		});

		const db = getFirestore();

		db.collection("orders")
			.add(order)
			.then((res) => (
				<Alert message={"orden completa" + res.id} type="success" />
			))
			.finally(() =>
				setFormData({
					name: "",
					tel: "",
					email: "",
				})
			);
	};

	return (
		<section
			className="cart-section"
			style={{ margin: "80px", textAlign: "center" }}
		>
			{cart.length === 0 ? (
				<>
					<Row>
						<Col span={24}>
							<Empty
								image={Empty.PRESENTED_IMAGE_SIMPLE}
								description={<span>No hay productos en el carrito</span>}
							/>

							<Link to="/store">ir a la tienda</Link>
						</Col>
					</Row>
				</>
			) : (
				<Row>
					<Col span={16}>
						<div className="order-wrapper">
							<h3>CARRITO DE COMPRAS</h3>
							<Divider />
							{cart.map((prod) => {
								return (
									<>
										<Row>
											<Col span={5}>
												<img
													alt="product"
													style={{ height: "200px" }}
													src={prod.item.photo}
												/>
											</Col>
											<Col span={5}>
												<h2>{prod.item.name}</h2>
											</Col>
											<Col span={5}>
												<ItemCount />
											</Col>
											<Col span={5}>
												<p>{prod.item.price}</p>
											</Col>
											<Col span={4}>
												<Button onClick={() => removeItem(prod.item.id)}>
													<DeleteTwoTone style={{ fontSize: "25px" }} />
												</Button>
											</Col>
										</Row>
										<br />
									</>
								);
							})}
							<Divider />

							<Button onClick={() => clearCart()}>Vaciar carrito</Button>
						</div>
					</Col>
					<OrderSummary
						formData={formData}
						setFormData={setFormData}
						total={totalPrice()}
					/>
				</Row>
			)}
		</section>
	);
};

export default Cart;
