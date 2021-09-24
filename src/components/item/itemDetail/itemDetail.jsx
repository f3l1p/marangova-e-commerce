import React, { useState } from "react";
import { Row, Col, Button } from "antd";

const ItemDetail = (props) => {
	const [but, setBut] = useState(false);

	function clickHandler() {
		setBut(true);
	}

	return (
		<div style={{ textAlign: "center", marginTop: "80px" }}>
			<Row>
				<Col span={12}>
					<img
						alt="product-img"
						src={props.photo}
						style={{ height: "500px" }}
					/>
				</Col>
				<Col span={12}>
					<h2>{props.name}</h2>
					<p>{props.description}</p>
					<p>{props.category}</p>
					<h3>${props.price}</h3>
					{but === false ? (
						<Button
							style={{ margin: "18px" }}
							shape="round"
							onClick={clickHandler}
						>
							añadir a carrito
						</Button>
					) : (
						<Button type="primary" style={{ marginTop: "18px" }} shape="round">
							ir a la compra
						</Button>
					)}
				</Col>
			</Row>
		</div>
	);
};

export default ItemDetail;
