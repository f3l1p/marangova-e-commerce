import React, { useState } from "react";

import { Row, Col, Button } from "antd";

import { Link } from "react-router-dom";
import { UseCartContext } from "../../../context/cartContext";

import ItemCount from "../itemCount/itemCount";

const ItemDetail = ({ item }) => {
	const [but, setBut] = useState(false);
	const [quantity, setQuantity] = useState(1);

	const { addItem } = UseCartContext();

	function onChangeValue(value) {
		setQuantity(value);
	}

	const onAdd = (qty) => {
		addItem(item, qty);
		setBut(true);
	};

	console.log(quantity);

	return (
		<div style={{ textAlign: "center", marginTop: "80px" }}>
			<Row>
				<Col span={12}>
					<img alt="product-img" src={item.photo} style={{ height: "500px" }} />
				</Col>
				<Col span={12}>
					<h2>{item.name}</h2>
					<p>{item.description}</p>
					<p>{item.category}</p>
					<h3>${item.price}</h3>
					<Row>
						<p style={{ margin: "9px" }}>
							<strong>cantidad:</strong>
						</p>
						<ItemCount onChangeValue={onChangeValue} />
					</Row>

					<Row>
						{but === false ? (
							<>
								<Button
									style={{ margin: "18px" }}
									shape="round"
									onClick={() => onAdd(quantity)}
								>
									añadir a carrito
								</Button>
							</>
						) : (
							<Link to="/cart">
								<Button
									type="primary"
									style={{ marginTop: "18px" }}
									shape="round"
								>
									finalizar compra
								</Button>
							</Link>
						)}
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default ItemDetail;
