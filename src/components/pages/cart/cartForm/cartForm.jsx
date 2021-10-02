import React, { useState } from "react";
import { Form, Input, Divider, Button } from "antd";

const CartForm = ({ total }) => {
	const [form] = Form.useForm();
	const [requiredMark, setRequiredMarkType] = useState("optional");

	const onRequiredTypeChange = ({ requiredMarkValue }) => {
		setRequiredMarkType(requiredMarkValue);
	};
	return (
		<>
			<Form
				form={form}
				layout="vertical"
				initialValues={{
					requiredMarkValue: requiredMark,
				}}
				onValuesChange={onRequiredTypeChange}
				requiredMark={requiredMark}
			>
				<Form.Item
					label="Nombre"
					name="name"
					required
					tooltip="This is a required field"
					rules={[{ required: true, message: "Porfavor, ingresa tu nombre!" }]}
				>
					<Input placeholder="nombre..." />
				</Form.Item>
				<Form.Item
					label="Telefono"
					name="tel"
					required
					tooltip="This is a required field"
					rules={[
						{ required: true, message: "Porfavor, ingresa tu telefono!" },
					]}
				>
					<Input placeholder="xxx-xxx-xxxx" />
				</Form.Item>
				<Form.Item
					label="e-mail"
					name="email"
					required
					tooltip="This is a required field"
					rules={[{ required: true, message: "Porfavor, ingresa tu correo!" }]}
				>
					<Input placeholder="tu correo..." />
				</Form.Item>
				<Divider />
				<h1>TOTAL: ${total}</h1>
				<Form.Item>
					<Button htmlType="submit">TERMINAR COMPRA</Button>
				</Form.Item>
				.
			</Form>
		</>
	);
};

export default CartForm;
