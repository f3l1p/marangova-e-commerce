import React, { useState } from "react";
import "./cart.scss";

import { Link } from "react-router-dom";
import { Row, Col, Divider, Empty, Button, Modal } from "antd";
import OrderSummary from "./orderSummary/orderSummary";
import CartProduct from "./cartProduct/cartProduct";
import { UseCartContext } from "../../../context/cartContext";
import { getFirestore } from "../../../services/getFirebase";
import "firebase/firestore";
import firebase from "firebase/app";

const Cart = () => {
	const { cart, setCart, clearCart, totalPrice } = UseCartContext();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [modalContent, setModalContent] = useState();

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const [formData, setFormData] = useState({
		name: "",
		tel: "",
		email: "",
	});

	const handleOnSubmit = (e) => {
		let order = {};
		order.date = firebase.firestore.Timestamp.fromDate(new Date());
		order.buyer = formData;
		order.total = totalPrice();
		order.items = cart.map((cartItem) => {
			const id = cartItem.item.id;
			const title = cartItem.item.name;
			const price = cartItem.item.price * cartItem.quantity;

			return { id, title, price };
		});

		const db = getFirestore();

		db.collection("orders")
			.add(order)
			.then((res) => {
				setIsModalVisible(true);

				setModalContent("Orden Num: " + res.id);
			})

			.finally(
				() => setCart([]),
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
			<Modal
				title="Numero de Orden"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<p>{modalContent}</p>
				<br />
				<p>Gracias por tu compra!</p>
			</Modal>
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
				<Row gutter={[16, 16]}>
					<Col sm={24} md={14}>
						<div className="order-wrapper">
							<h3>CARRITO DE COMPRAS</h3>
							<Divider />
							{cart.map((prod) => {
								return (
									<>
										<CartProduct prod={prod} />
										<br />
									</>
								);
							})}
							<Divider />

							<Button onClick={() => clearCart()}>Vaciar carrito</Button>
							<br />
						</div>
					</Col>
					<Col sm={10} md={10}>
						<OrderSummary
							formData={formData}
							setFormData={setFormData}
							total={totalPrice()}
							handleOnSubmit={handleOnSubmit}
						/>
					</Col>
				</Row>
			)}
		</section>
	);
};

export default Cart;
