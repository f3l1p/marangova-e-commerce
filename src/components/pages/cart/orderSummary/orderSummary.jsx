import React from "react";
import { Col, Divider } from "antd";
import CartForm from "../cartForm/cartForm";

const OrderSummary = ({ total }) => {
	return (
		<>
			<Col span={8}>
				<div className="order-summary">
					<h1>Order Summary</h1>
					<Divider />
					<CartForm total={total} />
				</div>
			</Col>
		</>
	);
};

export default OrderSummary;
