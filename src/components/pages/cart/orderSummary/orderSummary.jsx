import React from "react";
import { Col, Divider } from "antd";
import CartForm from "../cartForm/cartForm";

const OrderSummary = ({ total, formData, setFormData, handleOnSubmit }) => {
	return (
		<>
			<Col span={8}>
				<div className="order-summary">
					<h1>Order Summary</h1>
					<Divider />
					<CartForm
						formData={formData}
						setFormData={setFormData}
						total={total}
						handleOnSubmit={handleOnSubmit}
					/>
				</div>
			</Col>
		</>
	);
};

export default OrderSummary;
