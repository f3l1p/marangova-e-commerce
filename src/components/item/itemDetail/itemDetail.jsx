import React, { useState } from "react";

import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import { UseCartContext } from "../../../context/cartContext";
import ItemCount from "../itemCount/itemCount";
import { animated, useSpring } from "react-spring";

const ItemDetail = ({ item }) => {
	const [but, setBut] = useState(false);
	const [quantity, setQuantity] = useState(1);

	const { addItem } = UseCartContext();

	const slide = useSpring({
		from: { y: 100, opacity: 0 },
		to: { y: 0, opacity: 1 },
		delay: 800,
	});

	function onChangeValue(value) {
		setQuantity(value);
	}

	const onAdd = (qty) => {
		addItem(item, qty);
		setBut(true);
	};

	console.log(quantity);

	return (
		<animated.div style={slide}>
			<div style={{ height: "85vh", textAlign: "center", marginTop: "80px" }}>
				<Row>
					<Col md={12}>
						<img
							alt="product-img"
							src={item.photo}
							style={{ height: "500px" }}
						/>
					</Col>
					<Col span={12}>
						<h2>{item.name}</h2>
						<p>{item.description}</p>
						<p>{item.category}</p>
						<h3>${item.price}</h3>
						<br />
						<div>
							<p style={{ margin: "9px" }}>
								<strong>cantidad:</strong>
							</p>
							<ItemCount onChangeValue={onChangeValue} />
						</div>

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
					</Col>
				</Row>
			</div>
		</animated.div>
	);
};

export default ItemDetail;
