import React from "react";
import { Row, Col, Button } from "antd";

const ItemDetail = (props) => {
	return (
		<div style={{ textAlign: "center", marginTop: "80px" }}>
			<Row>
				<Col span={12}>
					<img src={props.photo} style={{ height: "500px" }} />
				</Col>
				<Col span={12}>
					<h2>{props.name}</h2>
					<p>{props.description}</p>
					<p>{props.category}</p>
					<h3>${props.price}</h3>
					<Button type="primary" style={{ marginTop: "18px" }} shape="round">
						comprar
					</Button>
					<Button style={{ margin: "18px" }} shape="round">
						añadir a carrito
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default ItemDetail;
