import React from "react";
import { Divider } from "antd";
import CartForm from "../cartForm/cartForm";

const OrderSummary = ({ total, formData, setFormData, handleOnSubmit }) => {
	return (
		<>
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
		</>
	);
};

export default OrderSummary;
