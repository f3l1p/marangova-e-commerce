import React from "react";
import { Row, Col, Button } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { UseCartContext } from "../../../../context/cartContext.jsx";

const CartProduct = ({ prod }) => {
	const { removeItem } = UseCartContext();
	return (
		<Row gutter={[16, 16]}>
			<Col span={5}>
				<img alt="product" style={{ height: "12vw" }} src={prod.item.photo} />
			</Col>
			<Col span={5}>
				<h2 style={{ fontSize: "2vw" }}>{prod.item.name}</h2>
			</Col>
			<Col span={5}>
				<p>{prod.quantity}</p>
			</Col>
			<Col span={5}>
				<p style={{ fontSize: "2vw" }}>{prod.item.price}</p>
			</Col>
			<Col span={4}>
				<Button
					style={{ boxSizing: "4vw" }}
					onClick={() => removeItem(prod.item.id)}
				>
					<DeleteTwoTone />
				</Button>
			</Col>
		</Row>
	);
};

export default CartProduct;
